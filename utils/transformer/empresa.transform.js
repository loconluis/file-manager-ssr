import Generic from './generic.transform'
import axios from 'axios'
import _ from 'lodash'
import Area from './area.transform'
import workspace from './workspace.transform'
import Workspace from './workspace.transform';

export default class Empresa extends Generic{
    constructor(id){
        super(id,'empresa');
        this.icon = 'fa fa-industry'
    }

    /**
     * 
     * Setters
     *  
     */
    async setData(empresa){
        if(!empresa){
            let data = (await axios.get('http://192.168.0.119:3004/empresa/'+this.data.id,{headers:{wp:"demo"}})).data;
            await this.setData(data);
            await this.setChildren();
            await this.setParent();
            await this.setCreateOptions();
        }else{
            this.data.title = empresa.nombre;
            this.data.props = _.omit(empresa, ['_id']);
            this.data.structure = (await axios.get('http://192.168.0.119:3004/structure/empresa',{headers:{wp:"demo"}})).data;
        }
    }

    async setChildren(){
        try{
            let areas = (await axios.get('http://192.168.0.119:3004/area?empresa='+this.data.id,{headers:{wp:"demo"}})).data;
            let areasPadre = areas.filter(area=>!area.areapadre && area)

            this.data.children = areasPadre.map((area)=>{
                let classArea = new Area(area._id);
                classArea.setData(area);
                return classArea;
            });
        }catch(e){
            console.log(e);
        }

    }

    async setParent(){
        let idworkspace = '5b0749205bd37f2dbd0f33f5';
        this.data.parent = new Workspace(idworkspace);
        await this.data.parent.setData();
    }

    async setCreateOptions(){
        this.data.createOptions = [
            {
                'label':'Nueva Área',
                'value':new Area(null)
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