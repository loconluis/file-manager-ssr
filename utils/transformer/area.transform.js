import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.transform'
import Empresa from './empresa.transform'

export default class Area extends Generic{
    constructor(id){
        super(id,'area');
        this.icon = 'fa fa-building'
    }
    
    async setData(area){
        if(!area){
            let data = (await axios.get('http://192.168.0.119:3004/area/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();
            await this.setCreateOptions();
        }else{
            this.data.title = area.nombre;
            this.data.props = _.omit(area, ['_id'])
        }
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://192.168.0.119:3004/area/finderchilds?area='+this.data.id,{headers:{wp:"demo"}})).data;
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
                            tempclass = new Area(hijo._id);
                            break;
                        case 'puesto':
                            tempclass = new Puesto(hijo._id);
                            break;
                    }
                    tempclass.setData(hijo);
                    return tempclass;
                });
                children = _.union(children,hijostype);
            });
            this.data.children = children;
        }catch(e){
            console.log(e);
        }

    }   

    async setParent(){
        if(this.data.props.areapadre){
            this.data.parent = new Area(this.data.props.areapadre._id);
        }else{
            this.data.parent = new Empresa(this.data.props.empresa._id);
        }
        await this.data.parent.setData();
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Nueva Área',
                'type':'area'
            },
            {
                'label':'Nuevo Puesto',
                'type':'puesto'
            }
        ]
    }

    mapDataToProps(){
        this.data.props.nombre = this.data.title;
        this.data.props._id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.nombre;
        this.data.id = this.data.props._id;
    }

    async create(){
        try{
            this.mapDataToProps();
            this.data.props = (await axios.post('http://192.168.0.119:3004/empresa',this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            console.log(e);
        }
    }

    async save(){
        try{
            this.mapDataToProps();
            this.data.props = (await axios.put('http://192.168.0.119:3004/empresa/'+this.data.id,this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
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