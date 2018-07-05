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
    
<<<<<<< HEAD
    async init(data){
        if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
=======
    async setData(puesto){
        if(this.data.id === null) {
            let structurePuesto = (await axios.get('http://apipersona.estratek.com/organization/structure/puesto',{headers:{wp:"demo"}})).data;
            let structurePlaza = (await axios.get('http://apipersona.estratek.com/organization/structure/plaza',{headers:{wp:"demo"}})).data;
            let structure = _.merge(JSON.parse(structurePlaza.structure),JSON.parse(structurePuesto.structure));
            this.data.structure = structure
            this.data.cleanStructure = _.omit(structure, ['jefeareas','plazas','puesto', 'sillas','valid_tru']);
        } else if(!puesto){
            let data = (await axios.get('http://apipersona.estratek.com/organization/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();
            await this.setCreateOptions();
        }else{
            let structurePuesto = (await axios.get('http://apipersona.estratek.com/organization/structure/puesto',{headers:{wp:"demo"}})).data;
            let structurePlaza = (await axios.get('http://apipersona.estratek.com/organization/structure/plaza',{headers:{wp:"demo"}})).data;
            let structure = _.merge(JSON.parse(structurePlaza.structure),JSON.parse(structurePuesto.structure));
            this.data.cleanStructure = _.omit(structure, ['jefeareas','plazas','puesto', 'sillas','valid_tru']);
            this.data.title = puesto.puesto.nombre;
            this.data.props = puesto;
>>>>>>> 6120741b16fc8f53016ab44cfde04a2c9aef8c1d
        }
        let structurePuesto = (await axios.get('http://apipersona.estratek.com/organization/structure/puesto',{headers:{wp:"demo"}})).data;
        let structurePlaza = (await axios.get('http://apipersona.estratek.com/organization/structure/plaza',{headers:{wp:"demo"}})).data;
        let structure = _.merge(JSON.parse(structurePlaza.structure),JSON.parse(structurePuesto.structure));
        this.data.cleanStructure = _.omit(structure, ['jefeareas','plazas','puesto', 'sillas','valid_tru']);
        this.data.title = data.puesto.nombre;
        this.data.props = data;
    }
    
    async setData(){
        await this.setChildren();
        await this.setParent();
        await this.setCreateOptions();
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://apipersona.estratek.com/organization/silla?plaza='+this.data.id,{headers:{wp:"demo"}})).data;
            this.data.children = hijos.map((hijo)=>{
                let classPersona = new Persona(hijo._id);
                classPersona.init(hijo);
                return classPersona;
            });
        }catch(e){
            console.log(e);
        }

    }   

    async setParent(){
        this.data.parent = new Area(this.data.props.area._id);
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

}