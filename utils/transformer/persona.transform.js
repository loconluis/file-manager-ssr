import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'

export default class Persona extends Generic{
    constructor(id,type){
        super(id,type);
    }
    
    async setData(persona){
        if(!persona){
            let data = (await axios.get('http://192.168.0.119:3004/silla/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            this.data.children = await this.setChildren();
        }else{
            this.data.title = persona.persona.nombrepreferido;
            this.data.props = _.omit(persona, ['_id'])
        }
    }

    async setChildren(){}   

}