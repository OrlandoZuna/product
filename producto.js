class Product {
    constructor(id, name, description, quatity) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.quatity = quatity;
    }
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getDescription() {
      return this.description;
    }
    getQuantity() {
      return this.quatity;
    }
  }
  export default  class ProductManagement {
    constructor() {
      this.listproducts = new Array();
    }
    addProduct(name, description, quantity) {
      var date = new Date();
      var product = new Product(date, name, description, quantity);
      this.listproducts.push(product);
    }
    removeProducts(product) {
      for (var i = 0; i < this.listproducts.length; i++) {
        if (this.listproducts[i] == product) {
          this.listproducts.splice(i, 1);
          return true;
        }
      }
      return false;
    }
    updateProdcuts(product, updateproduct) {
      for (var i = 0; i < this.listproducts.length; i++) {
        if (this.listproducts[i] == product) {
          this.listproducts[i] = updateproduct;
          return true;
        }
      }
      return false;
    }
    getList() {
      return this.listproducts;
    }
  }
  export {Product, ProductManagement};
  