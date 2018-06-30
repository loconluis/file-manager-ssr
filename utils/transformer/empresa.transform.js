import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Area from './area.transform'

export default class Empresa extends Generic{
    constructor(id,type){
        super(id,type);
    }

    async setData(empresa){
        if(!empresa){
            let data = (await axios.get('http://192.168.0.119:3004/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            this.data.children = await this.setChildren();
        }else{
            this.data.title = empresa.nombre;
            this.data.props = _.omit(empresa, ['_id']);
        }
    }

    async setChildren(){
        try{
            let areas = (await axios.get('http://192.168.0.119:3004/area?empresa='+this.data.id,{headers:{wp:"demo"}})).data;
            let areasPadre = areas.filter(area=>!area.areapadre && area)

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