import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.transform'

export default class Area extends Generic{
    constructor(id,type){
        super(id,type);
    }
    
    async setData(area){
        if(!area){
            let data = (await axios.get('http://192.168.0.119:3004/area/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            this.data.children = await this.setChildren();
        }else{
            this.data.title = area.nombre;
            this.data.props = _.omit(area, ['_id'])
        }
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://192.168.20.112:3001/area/adminchilds?area='+this.data.id,{headers:{wp:"demo"}})).data;
            /**
             * {
             *  "area":[{...},{...}],
             *  "puesto":[{...},{...}]
             * }
             */
            let children = [];
            let types = Object.keys(hijos);
            types.map(type=>{
                let hijostype = hijos[type].map((hijo)=>{
                    let tempclass = null;
                    switch(type){
                        case 'area':
                            tempclass = new Area(hijo._id,'area');
                            break;
                        case 'puesto':
                            tempclass = new Puesto(hijo._id,'puesto');
                            break;
                    }
                    tempclass.setData(hijo);
                    return tempclass;
                });
                children = _.union(children,hijostype);
            });
            return children;
        }catch(e){
            console.log(e);
        }

    }   

}