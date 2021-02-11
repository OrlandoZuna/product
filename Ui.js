//aqui se programara la ui
import Product from "./producto.js";
import ProductManagement from "./producto.js";
class UI {
    constructor() {
        this.form = document.getElementById("form");
        this.container = document.getElementById("containertable");
        console.log("LOAD");
        this.productmanagement = new ProductManagement();

        this.productmanagement.addProduct("Pollo", "Pollo dofia", 12);
        this.productmanagement.addProduct("Carne", "Santa cruz", 11);
        this.productmanagement.addProduct("Leche", "leche Pil", 100);
        this.productmanagement.addProduct("Tee", "Tee Windsor", 123);
        this.lisproducts = this.productmanagement.getList();
        //this.lisproducts = productmanagement.getList();
        this.loadEvents();
        this.loadTable();
    }
    loadTable() {
        this.html = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        `;
        for (var i = 0; i < this.lisproducts.length; i++) {
            this.html += `<tr>
            <th scope="row">${i}</th>
            <td>${this.lisproducts[i].getName()}</td>
            <td>${this.lisproducts[i].getDescription()}</td>
            <td>${this.lisproducts[i].getQuantity()}</td>
            <td><button type="button" class="btn btn-danger" ids="${i}">Borrar</button></td>
          </tr>`;

        }
        this.html += `
        </tbody>
              </table>
        `;
        this.container.innerHTML = this.html;
        var buttons = document.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", (e) => {
                var product = this.lisproducts[Number(e.target.getAttribute("ids"))];
                this.productmanagement.removeProducts(product);
                this.loadTable();
            });
        }
    }
    loadEvents() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var name = document.getElementsByName("name");
            var description = document.getElementsByName("description");
            var quantity = document.getElementsByName("quantity");

            this.productmanagement.addProduct(name[0].value, description[0].value, quantity[0].value);
            this.loadTable();
        })
    }
}
var init = new UI(); 