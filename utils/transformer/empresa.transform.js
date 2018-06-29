import Generic from './generic.tranform'
import axios from 'axios'
import _ from 'lodash'
import Area from './area.tranform'

export default class Empresa extends Generic{
    constructor(id,type){
        super(id,type);
    }

    async etData(empresa){
        this.title = empresa.nombre;
        this.props = _.omit(empresa, ['_id']);
        this.children = await this.getChildren();
    }

    async getData(){
        try{
            let data = (await axios.get('http://192.168.0.119:3004/empresa/'+this.id,{headers:{wp:"demo"}})).data;
            this.setData(data);
        }catch(e){
            console.log(e);
        }
    }

    async getChildren(){
        try{
            let areas = (await axios.get('http://192.168.0.119:3004/area?empresa='+this.id,{headers:{wp:"demo"}})).data;
            areasPadre =  areas.map(area=>!area.areapadre);

            return areasPadre.map((area)=>{
                let classArea = new Area(area._id,'area');
                classArea.setData(area);
                return classArea;
            });
        }catch(e){
            console.log(e);
        }

    }

}