import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.transform'

export default class Persona extends Generic{
    constructor(id){
        super(id,'persona');
        this.icon = 'https://medizzy.com/_nuxt/img/user-placeholder.d2a3ff8.png'
    }
    
    async setData(persona){
        if(!persona){
            let data = (await axios.get('http://192.168.0.119:3004/silla/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();
        }else{
            this.data.title = persona.persona.nombrepreferido;
            this.data.props = _.omit(persona, ['_id'])
        }
    }

    async setChildren(){
        this.data.children = [];
    }   
    
    async setParent(){
        this.data.parent = new Area(this.data.props.plaza._id);
        this.data.parent.setData();
    }

}