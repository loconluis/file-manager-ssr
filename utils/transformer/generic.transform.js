export default class generic {
    constructor(id,type){
        this.data = {
            id:id,
            type:type,
            icon:'',
            img:'',
            title:'',
            structure: {},
            cleanStructure: {},
            props:{},
            children:[],
            createOptions:[]
        }
    }

    setData(data){
        this.data = data;
    }

    setChildren(){

    }

    setParent(){

    }

    getProps(){
        return this.data.props;
    }

    create(){

    }

    save(){

    }

    delete(){

    }
}