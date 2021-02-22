/* const array = ["Sebastian", "Brenda", "Paco"];
console.log(array);
array.push("Natalia");
console.log(array);
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push("Sebastian");
myArray.push("Brenda");
console.log(myArray);
console.log(`Obtener el indice 1 de mi arreglo, el valor es ${myArray.get(1)}`);
