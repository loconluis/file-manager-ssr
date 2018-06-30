import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Persona from './persona.transform'

export default class Puesto extends Generic{
    constructor(id,type){
        super(id,type);
    }
    
    async setData(puesto){
        this.data.title = puesto.puesto.nombre;
        this.data.props = _.omit(puesto, ['_id'])
        this.data.children = await this.getChildren();
    }

    async getData(){
        try{
            let data = (await axios.get('http://192.168.0.119:3004/plaza/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
        }catch(e){
            console.log(e);
        }
    }

    async getChildren(){
        try{
            let hijos = (await axios.get('http://192.168.0.119:3004/silla?plaza='+this.data.id,{headers:{wp:"demo"}})).data;
            console.log("plaza ",this.data.title);
            console.log("sillas",hijos)
            return hijos.map((hijo)=>{
                let classPersona = new Persona(hijo._id,'persona');
                classPersona.setData(hijo);
                return classPersona;
            });
        }catch(e){
            console.log(e);
        }

    }   

}