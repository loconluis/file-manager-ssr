import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Persona from './persona.transform'
import Area from './area.transform'

export default class Puesto extends Generic{
    constructor(id){
        super(id,'puesto');
        this.data.icon = 'fa fa-briefcase'
    }
    
    async init(data){
        if(this.data.id === null){
            await this.setStructure();
        }else if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            this.setProps(data);
            await this.setParent();
            await this.setStructure();
        }else{
            this.setProps(data);
        }
    } 

    setProps(data){
        let props = {
            _id:data._id,
            nombre:data.puesto.nombre,
            area:data.area._id,
            puesto:data.puesto._id,
            perfilpuesto:data.puesto.perfilpuesto,
            familiapuesto:data.puesto.familiapuesto,
            centrodecosto:data.centrodecosto._id,
            empresa:data.puesto.empresa,
            descripcion:data.puesto.descripcion,
            cantidad:data.cantidad,
            valid_thru:data.valid_thru
        }
        this.data.props = props;
        this.mapPropsToData();
    }

    async setStructure(){
        let structurePuesto = (await axios.get('http://apipersona.estratek.com/organization/structure/puesto',{headers:{wp:"demo"}})).data;
        let structurePlaza = (await axios.get('http://apipersona.estratek.com/organization/structure/plaza',{headers:{wp:"demo"}})).data;
        this.data.structure = _.merge(JSON.parse(structurePlaza.structure),JSON.parse(structurePuesto.structure));
        this.data.cleanStructure = _.omit(this.data.structure, ['jefeareas','plazas','puesto', 'sillas','valid_tru']);
    }
    
    async setData(){
        await this.setChildren();
        await this.setParent();
        await this.setCreateOptions();
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://apipersona.estratek.com/organization/silla?plaza='+this.data.id,{headers:{wp:"demo"}})).data;
            this.data.children = await Promise.all(hijos.map(async (hijo)=>{
                let classPersona = new Persona(hijo._id);
                await classPersona.init(hijo);
                return classPersona;
            }));
        }catch(e){
            console.log(e);
        }
    }   

    async setParent(){
        this.data.parent = new Area(this.data.props.area);
        this.data.parent.init();
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Asignar a persona',
                'type':'persona'
            }
        ]
    }

    async getPosibleParents(){
        let area = (await axios.get('http://apipersona.estratek.com/organization/empresa/tree?empresa='+this.data.props.empresa,{headers:{wp:"demo"}})).data;
        console.log("area",area);
        let posibleParents = [];
        let profundidad = -1;
        let recorrerHijos = function(node){
            profundidad++;
            let dash = '';
            for(let i = 0; i<=profundidad;i++){
                dash += '--';
            }
            posibleParents.push({'label':dash+node.nombre,'value':node._id});
            if(node.children.length>0){
                node.children.map((hijo)=>{
                    recorrerHijos(hijo);
                });
            }
            profundidad--;
        }
        recorrerHijos(area);
        return posibleParents;
    }

    mapDataToProps(){
        this.data.props.nombre= this.data.title;
        this.data.props._id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.nombre;
        this.data.id = this.data.props._id;
    }

    async create(){
        try{
            let nuevopuesto = {
                nombre:this.data.props.nombre,
                perfilpuesto:this.data.props.perfilpuesto,
                familiapuesto:this.data.props.familiapuesto,
                empresa:this.data.props.empresa,
                descripcion:this.data.props.descripcion,
                valid_tru:this.data.props.valid_thru
            }
            let puesto = (await axios.post('http://apipersona.estratek.com/organization/puesto/',nuevopuesto,{headers:{wp:"demo"}})).data;
            let nuevaplaza = {
                nombre:this.data.props.nombre,
                area:this.data.props.area,
                puesto:puesto._id,
                cantidad:this.data.props.cantidad,
                centrodecosto:this.data.props.centrodecosto,
                valid_thru:this.data.props.valid_thru
            }
            let plaza = (await axios.post('http://apipersona.estratek.com/organization/plaza/',nuevaplaza,{headers:{wp:"demo"}})).data;
            this.setProps(plaza);
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async save(){
        try{
            let plaza = (await axios.get('http://apipersona.estratek.com/organization/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            let editPuesto = {
                nombre:this.data.props.nombre,
                perfilpuesto:this.data.props.perfilpuesto,
                familiapuesto:this.data.props.familiapuesto,
                empresa:this.data.props.empresa,
                descripcion:this.data.props.descripcion,
                valid_tru:this.data.props.valid_thru
            }
            let puesto = (await axios.put('http://apipersona.estratek.com/organization/puesto/'+plaza.puesto._id,editPuesto,{headers:{wp:"demo"}})).data;
            let editplaza = {
                nombre:this.data.props.nombre,
                area:this.data.props.area,
                puesto:puesto._id,
                cantidad:this.data.props.cantidad,
                centrodecosto:this.data.props.centrodecosto,
                valid_thru:this.data.props.valid_thru
            }
            plaza = (await axios.put('http://apipersona.estratek.com/organization/plaza/'+this.data.id,editplaza,{headers:{wp:"demo"}})).data;
            this.setProps(plaza);
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async move(parentId){
        try{
            let editplaza = {
                area:parentId
            }
            let plaza = (await axios.put('http://apipersona.estratek.com/organization/plaza/'+this.data.props.id,editplaza,{headers:{wp:"demo"}})).data;
            this.setProps(plaza);
            this.mapPropsToData();
        }catch(e){
            throw new Error(e);
        }
    }

    async delete(){
        try{
            let plaza = (await axios.delete('http://apipersona.estratek.com/organization/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            throw new Error(e);
        }
    }

}