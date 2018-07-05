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
        if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/silla/'+this.data.id,{headers:{wp:"demo"}})).data;
        }
        this.data.title = data.persona.nombrepreferido;
        this.data.props = data;
        // this.data.structure = (await axios.get('http://apipersona.estratek.com/organization/structure/silla', {headers:{wp: 'demo'}})).data;
        let structure = (await axios.get('http://apipersona.estratek.com/organization/structure/silla', {headers:{wp: 'demo'}})).data;
        this.data.structure = JSON.parse(structure.structure)
        this.data.cleanStructure = _.omit(JSON.parse(structure.structure), [''])
    }
    
    async setData(){
        await this.setChildren();
        await this.setParent();
    }

    async setChildren(){
        this.data.children = [];
    }   
    
    async setParent(){
        this.data.parent = new Puesto(this.data.props.plaza._id);
        this.data.parent.init();
    }

}