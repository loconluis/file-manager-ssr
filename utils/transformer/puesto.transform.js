import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Persona from './persona.transform'
import Area from './area.transform'

export default class Puesto extends Generic{
    constructor(id){
        super(id,'puesto');
    }
    
    async setData(puesto){
        if(!puesto){
            let data = (await axios.get('http://192.168.0.119:3004/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();
        }else{
            this.data.title = puesto.puesto.nombre;
            this.data.props = _.omit(puesto, ['_id'])
        }
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://192.168.0.119:3004/silla?plaza='+this.data.id,{headers:{wp:"demo"}})).data;
            this.data.children = hijos.map((hijo)=>{
                let classPersona = new Persona(hijo._id);
                classPersona.setData(hijo);
                return classPersona;
            });
        }catch(e){
            console.log(e);
        }

    }   

    async setParent(){
        this.data.parent = new Area(this.data.props.area._id);
        this.data.parent.setData();
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Asignar a persona',
                'value':new Persona(null)
            }
        ]
    }

}