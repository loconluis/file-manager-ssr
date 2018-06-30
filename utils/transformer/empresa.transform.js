import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Area from './area.transform'
import workspace from './workspace.transform'
import Workspace from './workspace.transform';

export default class Empresa extends Generic{
    constructor(id,type){
        super(id,type);
    }

    async setData(empresa){
        if(!empresa){
            let data = (await axios.get('http://192.168.0.119:3004/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();

        }else{
            this.data.title = empresa.nombre;
            this.data.props = _.omit(empresa, ['_id']);
        }
    }

    async setChildren(){
        try{
            let areas = (await axios.get('http://192.168.0.119:3004/area?empresa='+this.data.id,{headers:{wp:"demo"}})).data;
            let areasPadre = areas.filter(area=>!area.areapadre && area)

            this.data.children = areasPadre.map((area)=>{
                let classArea = new Area(area._id,'area');
                classArea.setData(area);
                return classArea;
            });
        }catch(e){
            console.log(e);
        }

    }

    async setParent(){
        let idworkspace = '5b0749205bd37f2dbd0f33f5';
        this.data.parent = new Workspace(idworkspace,'workspace');
        await this.data.parent.setData();
    }

    async create(data){
        try{
            let empresa = (await axios.post('http://192.168.0.119:3004/empresa',data,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            console.log(e);
        }
    }

    async save(data){
        try{
            let empresa = (await axios.put('http://192.168.0.119:3004/empresa/'+this.data.id,data,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            console.log(e);
        }
    }

    async delete(){
        try{
            let empresa = (await axios.delete('http://192.168.0.119:3004/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            console.log(e);
        }
    }

}