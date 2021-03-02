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
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push("Sebastian");
myArray.push("Brenda");
myArray.push("Natalia");
console.log(myArray);
console.log(`Obtener el indice 1 de mi arreglo, el valor es ${myArray.get(1)}`);
myArray.pop();
console.log("El nuevo arreglo con POP es", myArray);
myArray.push("Paco");
console.log("Agregamos a Paco", myArray);
myArray.delete(1);
console.log("Borramos a Brenda", myArray);
