import Generic from './generic.tranform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.tranform'

export default class Area extends Generic{
    constructor(id,type){
        super(id,type);
    }
    
    async setData(area){
        this.title = area.nombre;
        this.props = _.omit(area, ['_id'])
        this.children = await this.getChildren();
    }

    async getData(){
        try{
            let data = (await axios.get('http://192.168.0.119:3004/area/'+this.id,{headers:{wp:"demo"}})).data;
            this.setData(data);
        }catch(e){
            console.log(e);
        }
    }

    async getChildren(){
        try{
            let hijos = (await axios.get('http://192.168.0.119:3004/area/adminchilds?area='+this.id,{headers:{wp:"demo"}})).data;
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
                        case 'area':
                            tempclass = new Puesto(hijo._id,'puesto');
                            break;
                    }
                    tempclass.setData(hijo);
                    return tempclass;
                });
                children = _.merge(children,hijostype);
            });
            return children;
        }catch(e){
            console.log(e);
        }

    }   

}