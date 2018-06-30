export default class generic {
    constructor(id,type){
        this.data = {
            id:id,
            type:type,
            title:'',
            props:{},
            children:[]
        }
    }

    setData(data){
        this.data = data;
    }

    getData(){

    }

    getChildren(){

    }

    getProps(){
        return this.data.props;
    }

    save(){

    }

    update(){

    }

    delete(){

    }
}