
// class Atm{
//     constructor(id  , pw) { // constructor method
//         this.id  = id
//         this.pw = pw
//     }
//     sayhi(){   //prototype method
//         console.log("hii..this is prototype method.")
//     }
    
//     static Hello(){ // static method
//         console.log("hello their .. this is the static method..")
//     }

// }
    
// let Atm1 = new Atm("gogo" , "1234") // calling the function const
// console.log(Atm1)

// Atm1.sayhi(); // calling the prototype method

// Atm.Hello() // calling static method

// //----------------------------------------------------------------------------------------------------------------

// // Inhertiance 
// class emp {
//     constructor(name ){
//         this.name = name;
       
//     }
//     message(){
//         console.log("hello messgE IS HERE......")
//     }

// }

// class manger extends emp {
//     constructor(name  ,region){
//         super(name );
//         this.region = region;
//     }
//     info(){
//         super.message()
//         console.log(this.name + " is this manager of .."+ this.region)
//     }

// }
// class admin extends manger{

// }




// let admin1 = new admin("Govind", "india")

// console.log(admin1)

// //--------------------------------------------------------------------------------------------------------------

// class emp{
//     #name="";
//     constructor(name){
//         this.#name = name
//     }
//     #getName(){
//         console.log(this.name)
//     }
//     pubfunc(){
//         this.#getName();

//     }
// }

// let emp1 = new emp("gogo");

// console.log(emp1.pubfunc());

// //-----------------------------------------------------------------------------------------------------------------

// //mixin
// let usefullmethod = {
//     sayhii(){
//         console.log("hello");
//     },

//     saybyeee(){
//         console.log("byee");
//     }
// }

// class user{
//     constructor(){
//         this.name = "gogo"
//     }
// }
// Object.assign(user.prototype , usefullmethod)

// let usr1 = new user()
//     console.log(usr1.sayhii)

//------------------------------------------------------------------------------------------------------------------

// Class ->  Opps concept 

class Car{
    constructor(company , engine){ // constructor
        this.company = company;
        this.engine =  engine;

    }

    getInfo(){ // methods
        return (
            `${this.company} have  ${this.engine} engine`
        )
    }
}

const firstCar =  new Car('Jaguar' , 'F18')
console.log(firstCar) // Car { company: 'Jaguar', engine: 'F18' }

console.log(firstCar.getInfo()) // Jaguar have  F18 engine

// Inhertiance 

class superCar extends Car {
    constructor(company , engine , doors){
        super(company ,engine)
        this.doors = doors;
    }

    speed(){
        return `241mph`
    }
}

const mysupercar = new superCar('Bugatti' , 'V18')
console.log(mysupercar) // superCar { company: 'Bugatti', engine: 'V18', doors: undefined }

// Polymorphism

class Sedan extends Car{
    constructor(company ,engine , model){
        super(company , engine ,model)
        this.model = model;
    }

    speed(){
        return '220mph'
    }
}

const mySportCar = new superCar('bugatti' , 'V18',2)
const mySedan = new Sedan('Mercedeces' , 'V12' , 'S-class')

console.log(mySportCar.speed())
console.log(mySedan.speed())


//Encapsulation

class SportCar extends Car{
    #engine;
    constructor(company , engine){
        super(company , engine)
        this.#engine =  engine;
    }

    getEngine(){
        return this.#engine ;
    }

    setEngine(){
        return this.#engine = engine
    }
}

const mySportCar1 = new SportCar('Buggati' , 'W16' , 2);
console.log(mySportCar1.getEngine())











