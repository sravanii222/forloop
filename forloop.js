// 1.

         
const person = {name: "Alice", age: 25, country: "USA"};

for (let obj in person) {
console.log(`${obj}: ${person[obj]}`);
}

    // 2.

     let numbers = [10,20,30,40,50]
     let sum =0;
     for(num  of numbers ){
       sum += num;
     }
     console.log(sum)

    // 3.

    // let person = {name:"Alice",age:25,country:"USA"};
     Object.freeze(person);
     person.id = 20;   
     console.log(person)

    // 4.

    //let person = {name:"Alice",age:25,country:"USA"};
     Object.seal(person);
     person.age = 20;   
     console.log(person);


    // 5.

     //let person = {name:"Alice",age:25,country:"USA"};

     Object.keys(person);
     console.log(Object.keys(person))

    // 6.

     //let person = {name:"Alice",age:25,country:"USA"};
     console.log(Object.values(person))

    // 7.

    // let person = {name:"Alice",age:25,country:"USA"};
     let none = Object.entries(person);
      console.log(none)

    // 8.

     const student = {name:"john",subjects:{math:90,english:85}};

     for(value in student){
     console.log(Object.keys(student[value]))
     for(key in student){
       console.log(student[value.key])
     }

      let int = Object.keys(student[value])
      console.log(int)
     }

    // 9.
    //  const student = { name: "John", age: 25, subject: "Math" };


        for (let value in student) {
      console.log(`${value}: ${student[value]}`);
}

// Second loop: log only the values of the properties
for (let value in student) {
console.log(student[value]);
}

    // 10.
   // const person = { name: "Alice" };
Object.freeze(person); 

person.name = "bob"; 
person.age = 20; 
console.log(person); 