/*
    class = (ES6 feature) provides a more structured and cleaner way to 
            work with objects compared to traditional construtors functions
            ex. static keyword, encpasulation, inheritance 
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

salesTax = 0.05;

const product1 = new Product("Leather Jacket", 19.99);
const product2 = new Product("Pants", 22.50);

const total1 = product1.calculateTotal(salesTax);

product1.displayProduct();
console.log(`Total (with sales tax) : $${total1.toFixed(2)}`);

const total2 = product2.calculateTotal(salesTax);

product2.displayProduct();
console.log(`Total (with sales tax) : $${total2.toFixed(2)}`);