import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Empresa from './empresa.transform'

export default class Workspace extends Generic{
    constructor(id){
        super(id,'worskpace');
    }
    
    async init(data){
        if(this.data.id === null){
            await this.setStructure();
        }else if(!data){
            data = (await axios.get('http://apipersona.estratek.com/workspace/workspace/'+this.data.id,{headers:{wp:"demo"}})).data;
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

    }

    async setData(){
        await this.setChildren();
        await this.setParent();
        await this.setCreateOptions();
    }

    async setChildren(){
        try{
            let empresas = (await axios.get('http://apipersona.estratek.com/organization/empresa',{headers:{wp:"demo"}})).data;
            this.data.children = await Promise.all(empresas.map(async (empresa)=>{
                let classEmpresa = new Empresa(empresa._id);
                await classEmpresa.init(empresa);
                return classEmpresa;
            }));
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

    mapDataToProps(){
        this.data.props.domain= this.data.title;
        this.data.props.id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.domain;
        this.data.id = this.data.props.id;
    }
}