import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.transform'

export default class Persona extends Generic{
    constructor(id){
        super(id,'persona');
        this.data.icon = 'https://medizzy.com/_nuxt/img/user-placeholder.d2a3ff8.png'
    }
    
    async init(data){
        if(this.data.id === null){
            await this.setStructure();
        }else if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/silla/'+this.data.id,{headers:{wp:"demo"}})).data;
            this.setProps(data);
            await this.setParent();
        }else{
            await this.setStructure();
            this.setProps(data);
        }
    }

    setProps(data){
        let props = {
            persona:data.persona._id,
            nombre:data.persona.nombrepreferido,
            puesto:data.plaza.puesto,
            plaza:data.plaza._id,
            centrodecosto:data.centrodecosto._id,
            horario:data.horario._id,
            contrato:data.contrato._id,
            salario:data.salario._id,
            fechainicio:data.fechainicio,
            fechafin:data.fechafin,
            foto:data.persona.foto,
            valid_thru:data.valid_thru
        }
        this.data.props = props;
        this.mapPropsToData();
    }

    async setStructure(){
        // this.data.structure = (await axios.get('http://apipersona.estratek.com/organization/structure/silla', {headers:{wp: 'demo'}})).data;
        let structure = (await axios.get('http://apipersona.estratek.com/organization/structure/silla', {headers:{wp: 'demo'}})).data;
        let structurePlaza = (await axios.get('http://apipersona.estratek.com/organization/structure/plaza', {headers:{wp: 'demo'}})).data;
        structurePlaza = JSON.parse(structurePlaza.structure)
        this.data.structure = JSON.parse(structure.structure)
        this.data.structure.puesto = structurePlaza.puesto;
        this.data.structure.plaza.hidden = true;
        this.data.cleanStructure = _.omit(this.data.structure, ['nombre','activa'])
    }
    
    async setData(){
        await this.setChildren();
        await this.setParent();
    }

    async setChildren(){
        this.data.children = [];
    }   
    
    async setParent(){
        this.data.parent = new Puesto(this.data.props.plaza);
        await this.data.parent.init();
    }

    async getPossibleParents(){
        await this.setParent();
        let plazas = (await axios.get('http://apipersona.estratek.com/organization/plaza/tree?empresa='+this.data.parent.data.props.empresa,{headers:{wp:"demo"}})).data;
        let posibleParents = [];
        let profundidad = -1;
        let recorrerHijos = function(node){
            profundidad++;
            let dash = '';
            for(let i = 0; i<=profundidad;i++){
                dash += '--';
            }
            posibleParents.push({'label':dash+node.puesto.nombre,'value':node._id});
            if(node.children.length>0){
                node.children.map((hijo)=>{
                    recorrerHijos(hijo);
                });
            }
            profundidad--;
        }
        plazas.map((plaza)=>{
            recorrerHijos(plaza);
            profundidad = -1;
        });
        return posibleParents;
    }

    mapDataToProps(){
        this.data.props.nombre = this.data.title;
        this.data.props._id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.nombre;
        this.data.img = this.data.props.foto;
        this.data.id = this.data.props._id;
    }

    async create(){
        try{
            let newSilla = {
                persona:this.data.props.persona,
                nombre:this.data.props.nombre+' '+this.data.parent.data.props.nombre,
                plaza:this.data.props.plaza,
                centrodecosto:this.data.props.centrodecosto,
                horario:this.data.props.horario,
                contrato:this.data.props.contrato,
                salario:this.data.props.salario,
                fechainicio:this.data.props.fechainicio,
                fechafin:this.data.props.fechafin,
                activa:true,
                valid_thru:this.data.props.valid_thru
            }
            let silla = (await axios.post('http://apipersona.estratek.com/organization/silla',newSilla,{headers:{wp:"demo"}})).data;
            this.setProps(silla);
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async save(){
        try{
            this.data.props = (await axios.put('http://apipersona.estratek.com/organization/silla/'+this.data.id,this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async move(parentId){
        try{
            let editsilla = {
                plaza:parentId
            }
            let silla = (await axios.put('http://apipersona.estratek.com/organization/silla/'+this.data.props.id,editsilla,{headers:{wp:"demo"}})).data;
            this.setProps(silla);
            this.mapPropsToData();
        }catch(e){
            throw new Error(e);
        }
    }

    async delete(){
        try{
            let persona = (await axios.delete('http://apipersona.estratek.com/organization/silla/'+this.data.id,{headers:{wp:"demo"}})).data;
            return persona;
        }catch(e){
            throw new Error(e);
        }
    }

}