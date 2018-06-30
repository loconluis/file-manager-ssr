import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Empresa from './empresa.transform'

export default class Workspace extends Generic{
    constructor(id,type){
        super(id,type);
    }

    async setData(workspace){
        if(!workspace){
            let data = (await axios.get('http://apipersona.estratek.com/workspace/workspace/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            this.data.children = await this.setChildren();
        }else{
            this.data.title = workspace.domain;
            this.data.props = _.omit(workspace, ['id'])
        }
    }

    async setChildren(){
        try{
            let empresas = (await axios.get('http://192.168.0.119:3004/empresa',{headers:{wp:"demo"}})).data;
            return empresas.map((empresa)=>{
                let classEmpresa = new Empresa(empresa._id,'empresa');
                classEmpresa.setData(empresa);
                return classEmpresa;
            });
        }catch(e){
            console.log(e);
        }

    }   

}