import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Puesto from './puesto.transform'
import Empresa from './empresa.transform'

export default class Area extends Generic{
    constructor(id){
        super(id,'area');
        this.data.icon = 'fa fa-building'
    }
    
    async init(data){
        if(this.data.id === null){
            await this.setStructure();
        }else if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/area/'+this.data.id,{headers:{wp:"demo"}})).data;
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
        // this.data.structure = (await axios.get('http://apipersona.estratek.com/organization/structure/area', {headers:{wp: 'demo'}})).data;
        let structure = (await axios.get('http://apipersona.estratek.com/organization/structure/area', {headers:{wp: 'demo'}})).data;
        this.data.structure = JSON.parse(structure.structure)
        this.data.cleanStructure = _.omit(JSON.parse(structure.structure), ['plazajefe', 'areashijas', 'plazas'])
    }
    
    async setData(){
        await this.setChildren();
        await this.setParent();
        await this.setCreateOptions();
    }

    async setChildren(){
        try{
            let hijos = (await axios.get('http://apipersona.estratek.com/organization/area/finderchilds?area='+this.data.id,{headers:{wp:"demo"}})).data;
            /**
             * {
             *  "area":[{...},{...}],
             *  "puesto":[{...},{...}]
             * }
             */
            let children = [];
            let types = Object.keys(hijos);
            await Promise.all(types.map(async type=>{
                let hijostype = await Promise.all(hijos[type].map(async (hijo)=>{
                    let tempclass = null;
                    switch(type){
                        case 'area':
                            tempclass = new Area(hijo._id);
                            tempclass.data.structure = this.data.structure;
                            tempclass.data.cleanStructure = this.data.cleanStructure;
                            break;
                        case 'puesto':
                            tempclass = new Puesto(hijo._id);
                            break;
                    }
                    await tempclass.init(hijo);
                    return tempclass;
                }));
                children = _.union(children,hijostype);
            }));
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
        await this.data.parent.init();
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

    async getPossibleParents(){
        let area = (await axios.get('http://apipersona.estratek.com/organization/empresa/tree?empresa='+this.data.props.empresa._id,{headers:{wp:"demo"}})).data;
        console.log("area",area);
        let posibleParents = [];
        let profundidad = -1;
        let recorrerHijos = function(node){
            profundidad++;
            let dash = '';
            for(let i = 0; i<=profundidad;i++){
                dash += '--';
            }
            posibleParents.push({'label':dash+node.nombre,'value':node._id});
            if(node.children.length>0){
                node.children.map((hijo)=>{
                    recorrerHijos(hijo);
                });
            }
            profundidad--;
        }
        recorrerHijos(area);
        return posibleParents;
    }

    mapDataToProps(){
        his.data.props.nombre = this.data.title;
        this.data.props._id = this.data.id;
    }

    mapPropsToData(){
        this.data.title = this.data.props.nombre;
        this.data.id = this.data.props._id;
    }

    async create(){
        try{
            this.data.props = (await axios.post('http://apipersona.estratek.com/organization/area',this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async save(){
        try{
            this.data.props = (await axios.put('http://apipersona.estratek.com/organization/area/'+this.data.id,this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            throw new Error(e);
        }
    }

    async move(parentId){
        try{
            let editarea = {
                areapadre:parentId
            }
            let area = (await axios.put('http://apipersona.estratek.com/organization/area/'+this.data.props.id,editarea,{headers:{wp:"demo"}})).data;
            this.setProps(area);
            this.mapPropsToData();
        }catch(e){
            throw new Error(e);
        }
    }

    async delete(){
        try{
            let empresa = (await axios.delete('http://apipersona.estratek.com/organization/area/'+this.data.id,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            throw new Error(e);
        }
    }
}