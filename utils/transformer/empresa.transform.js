import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Area from './area.transform'
import workspace from './workspace.transform'
import Workspace from './workspace.transform';

export default class Empresa extends Generic{
    constructor(id){
        super(id,'empresa');
        this.data.icon = 'fa fa-industry'
    }
    
    async init(data){
        if(this.data.id === null){
            await this.setStructure();
        }else if(!data){
            data = (await axios.get('http://apipersona.estratek.com/organization/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            this.setProps(data);
        }else{
            this.setProps(data);
        }
    }

    setProps(data){
        this.data.props = data;
        this.mapPropsToData();
    }

    async setStructure(){
        // this.data.structure = (await axios.get('http://apipersona.estratek.com/organization/structure/empresa',{headers:{wp:"demo"}})).data;
        let structure = (await axios.get('http://apipersona.estratek.com/organization/structure/empresa',{headers:{wp:"demo"}})).data;
        this.data.structure = JSON.parse(structure.structure)
        let cleanDataStructure = _.omit(JSON.parse(structure.structure), ['areas', 'puestos'])
        this.data.cleanStructure = cleanDataStructure;
    }

    /**
     * 
     * Setters
     *  
     */
    async setData(){
        await this.setChildren();
        await this.setParent();
        await this.setCreateOptions();
    }

    async setChildren(){
        try{
            let areas = (await axios.get('http://apipersona.estratek.com/organization/area?empresa='+this.data.id,{headers:{wp:"demo"}})).data;
            let areasPadre = areas.filter(area=>!area.areapadre && area)

            this.data.children = await Promise.all(areasPadre.map(async (area)=>{
                let classArea = new Area(area._id);
                await classArea.init(area);
                return classArea;
            }));
        }catch(e){
            console.log(e);
        }

    }

    async setParent(){
        let idworkspace = '5b0749205bd37f2dbd0f33f5';
        this.data.parent = new Workspace(idworkspace);
        await this.data.parent.init();
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Nueva Área',
                'type':'area'
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
            this.data.props = (await axios.post('http://apipersona.estratek.com/organization/empresa',this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            console.log(e);
        }
    }

    async save(){
        try{
            this.mapDataToProps();
            this.data.props = (await axios.put('http://apipersona.estratek.com/organization/empresa/'+this.data.id,this.data.props,{headers:{wp:"demo"}})).data;
            this.mapPropsToData();
            return this.data.props;
        }catch(e){
            console.log(e);
        }
    }

    async delete(){
        try{
            let empresa = (await axios.delete('http://apipersona.estratek.com/organization/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            return empresa;
        }catch(e){
            console.log(e);
        }
    }

}