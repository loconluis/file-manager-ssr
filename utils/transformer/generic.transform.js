export default class generic {
    constructor(id,type){
        this.data = {
            id:id,
            type:type,
            title:'',
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