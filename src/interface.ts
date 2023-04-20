interface Greetable {
  name: string
  greet(pharse: string): void
}

class Person implements Greetable{
    name: string
    age = 30
    constructor(n: string){
        this.name = n
    }
    greet(pharse: string){
        console.log(pharse + ' ' + this.name);
    }
}
let user1: Greetable

user1 = new Person('Ngoc Thanh')

