import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Empresa from './empresa.transform'

export default class Workspace extends Generic{
    constructor(id){
        super(id,'worskpace');
    }
    
    async init(data){
        if(!data){
            data = (await axios.get('http://apipersona.estratek.com/workspace/workspace/'+this.data.id,{headers:{wp:"demo"}})).data;
        }
        this.data.title = data.domain;
        this.data.props = data;
    }

    async setData(){
        await this.setChildren();
        await this.setParent();
    }

    async setChildren(){
        try{
            let empresas = (await axios.get('http://apipersona.estratek.com/organization/empresa',{headers:{wp:"demo"}})).data;
            this.data.children = empresas.map((empresa)=>{
                let classEmpresa = new Empresa(empresa._id);
                classEmpresa.init(empresa);
                return classEmpresa;
            });
        }catch(e){
            console.log(e);
        }

    }  

    async setParent(){
        this.data.parent = null;
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Nueva Empresa',
                'type':'empresa'
            }
        ]
    }
}