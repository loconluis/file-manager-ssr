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
        }else{
            this.setProps(data);
        }
    }

    setProps(data){
        this.data.props = data;
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

    mapDataToProps(){
        this.data.props.puesto.nombre= this.data.title;
        this.data.props._id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.puesto.nombre;
        this.data.id = this.data.props._id;
    }

}