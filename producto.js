class productoss{
    constructor(name, description, quantity){
         this.name = name;
         this.description= description;
         this.quantity=quantity;
    }
}
class productosManagement {
    constructor() {
        this.listproductos = []
    }
    addproductos(producto){
        this.listproductos.push(producto);
    }
    removeproductos(producto){
        for (var i=0; i< this.listproductos.length; i++){
            if(this.listproductos[i]== producto){
                this.listproductos.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateproductos(producto, newproducto){
        for (var i=0; i< this.listproductos.length; i++){
            if(this.listproductos[i]== producto){
                this.listproductos[i]= newproducto;
                return;
            } 
        }
    }
    showproductos(){
        return this.listproductos;
    }
}
export{productoss, productosManagement};