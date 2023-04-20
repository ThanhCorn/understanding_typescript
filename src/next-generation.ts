const userName = 'ngoc thanh'

let age = 30
age = 29

function add(a:number, b:number){
    let result
    result = a + b
    return result
}

if( age > 20){
    let isOld = true
}

//Spread

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking', ...hobbies]


//Rest
const added = (...numbers: number[]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue
    }, 0 )
}

const addNumber = added(1,2,3,4,5,6,7,8,9,10);

//Array & Object Destructuring

const hobby1 = hobbies[0]
const hobby2 = hobbies[1]   
const [hobby3, hobby4] = hobbies

const person = {
    name:'Ngoc Thanh',
    age: 30
}
const {name:string,age:number} = person;