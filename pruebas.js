import { ProductManagement,Product } from "./producto.js";
var p = new ProductManagement();

p.addProduct("Pollo", "Pollo sofia", 12);
p.addProduct("carne", "carne santa cruz", 5);
p.addProduct("arroz", "arroz de emapa", 50);
var lista = p.getList();
console.log(lista);
var deletep = lista[1];
p.removeProducts(deletep);
var lista = p.getList();
var unpdate = new Product(1, lista[1].name, "arroz de xyz", 1);
p.updateProdcuts(lista[1], unpdate);

console.log(lista);
