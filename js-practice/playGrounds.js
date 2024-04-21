//----------------------------Variable Concept-------------------------------------------

// let myAge = 18;
// const name = ' cybersecurity Analyst';
// document.write('Fred is a young ', name ,' who is ',  myAge)

// let myAge
// const myName = 'Fred'
// let job

// myAge = 'an 18 year old'
// job = ' Cybersecurity Analyst'

// document.write(myName , ' is ', myAge , job )


// -----------------------Variable Concept Ends----------------------------------------------






// -------------------------Array Concept----------------------------------------------------

// let musicians = ['Fred', 'Huldah', 'Nuella', 'Issac', 'Bismarck', 'Anita', 'Mark'];
//  musicians[1] = 'Erica'
//  musicians[2] = 'judith'
//  let vocalist = musicians[2]
// document.write(vocalist)


// let students = ['Emma', 'fred', 'Eric','Joe']
// students[2] = 'Prince'

// let callStudent = students[2]
// document.write(callStudent)

// let pcSafe = ['macBook Pro', 'macBook Air', 'Lenovo-Yoga']
// pcSafe[1] = 'ipad pro'
// let apple = pcSafe[1]
// document.write(Apple)

// let myArray = ['Apple', 'Orange', 'Candy', ]

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }


// ------------Array Concept Ends--------------------------------------------




// ------------------------Conditions and Loops--------------------------

//If else statements

// var fred = 'programmer'
// if(fred == 'programmer'){
//     alert("Mr.Fred is a senior Programmer")
// }



// var bismarck = 'bassist'
// if(bismarck == 'senior bassist'){
//     alert("Bismark is skillful bass player")
// }

// else if(bismarck == 'keyboardist'){
//     alert('Bismarck is not a keyboardist')
// }

// else{
//     alert('Game over! Bismarck is a bassist.')
// }



//----------Loops-------------------------------------  

// while and for Loops
// var i = 1
// while(i < 70){
//     document.write('coding is awesome')
//     i++;
// }

// for(var i = 1; i < 7; i++){
//     document.write("coding is awesome")
// }


// for( var i = 100; i< 1000; i++){
//         document.write("coding is awesome")
// }

// let shoppingCart = ['Apple', 'Mango','Orange', 'onion']
// // console.log(shoppingCart.length)

// for(let i = 0; i <= shoppingCart.length; i++){
//     console.log('This is item at index ' + i + ' ' + shoppingCart[i])
// }



// ---------------Statements------------------------------













//-----------------function----------------------------------
// function sayHi(){
//     document.write( 'Hello world'), 
//     document.write( 'Super Hi')
// } 

// sayHi();


// function addingTwoNum(firstNum, secondNum){
// console.log(firstNum + secondNum)
// }

// addingTwoNum(5,2);


// function producingTwoNames(firstname, secondname){
//     console.log(firstname , secondname)
// }
// producingTwoNames('Fred ','Matthew')




// function addSomething(num, str){
//      let add = num + str 
//      console.log(add)
// }

//  addSomething(21, ' More days to go')

// function addTen(num){
//      let ans = num + 10
//      return ans;
// }

// let answer = addTen(30)

// const addNumbers= (num1, num2)=>{
//      let total = num1 * num2
//      console.log(total)
// }
//  addNumbers(5,5)


//  const productNum = (num1, num2)=>{
//           let sum = num1 * num2
//           console.log(sum)
//  }
//    productNum(5,6);


// function getArea(width, height){
//      return width * height;
// }

// console.log(getArea(4,4))














// -----------Objects Concept------------------

// let hotel = {
//     name: 'The Dutchman',
//     rooms: 1000,
//     booked: 400,

//     checkAvailability : function(){
//         return  this.rooms - this.booked;
//     }    
// }



// var car = {
//     name: 'Tundra Armored',
//     brand: 'Toyota',
//     model: 'GX Armored 2024',
//     speed: 6000,
//     glassType: 'Hard limo colored',
//     oldPrice: 600000, 
//     newPrice: 1000000,
//     discount: 25,

//     checkPriceDifference: function(){
//         return this.newPrice - this.oldPrice
//     }

//     checkDiscount: function(){
//         return (this.discount/100) * this.newPrice
//     }
// }
 
//   console.log(60)
// console.log(checkDiscount());



// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };


//   var user = {
//     firstName: 'fred',
//     lastName: 'wayne',
//     age     :   18,
//     id      : 456,

//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
//   }

     
    // var cat ={
    //     name: 'Peace',
    //     weight: 55,
    //     height: 5,
    //     eating: true,

    //     crying: function(){
    //             document.write('Mioo! Miooo')
    //     }
    // }

    // cat.crying();

    // if(cat.eating == true){
    //     cat.crying()
    // }


      



       
       let car = {
           brand: 'Benz',
           modelName: 'MayBatch v7',
           color: 'Carbon Black',
           Price: `15 Million`,
           productionNum: 500000,
           realOwners: 125000,
           tracked: 25,
           soldPrice: 400000,
       
           checkLeftCars: function(){
               return this.productionNum - this.realOwners;
           },
       
           checkTrackedCars: function(){
               return (this.tracked / 100) * this.productionNum;
           },
       
           checkIncome: function(){
               return this.productionNum * this.soldPrice;
               
           },
       
           checkMissing: function(){
               return this.productionNum - this.checkTrackedCars();

           },

           checkLoss: function(){
            return this.checkIncome() - ((this.checkMissing()) * this.soldPrice)
            return (`Amount of loss in dollars as cash: $${loss.toLocaleString(50,000,000,000)}`);

           }
       };


        // --------Calculating for Loss Price of Car object using Variables

        // Calculate expected income from selling all cars
        let expectedIncome = car.checkIncome();

        // Calculate actual income received from selling cars to real owners
        let actualIncome = car.realOwners * car.soldPrice;

        // Calculate the amount of loss in dollars as cash
        let loss = expectedIncome - actualIncome;
       
       
       console.log(car.checkIncome());
       console.log(car.checkMissing());
       console.log(car.checkIncome());
    
    // ----In this Car Object version:
    //    - Each method within the `car` object is correctly defined with a comma after its closing brace.
    //    - The `checkLeftCars` method calculates the number of cars left by subtracting the number of real owners from the total production.
    //    - The `checkTrackedCars` method calculates the number of tracked cars as a percentage of the total production.
    //    - The `checkIncome` method calculates the total income from selling all the cars produced.
    //    - The `checkMissing` method calculates the number of missing cars by subtracting the number of tracked cars from the total production.




       if('MayBatch v7'== car.modelName){
        console.log("MayBatch is an expensive car model of Benz")
       }
     

       let missingCars = car.checkMissing();
        console.log(missingCars);
       

       if(missingCars == car.tracked){
        console.log("The number of missing cars is equal to the  percentage of tracked cars.");
       }

       else if(missingCars == car.realOwners){
        console.log("The number of missing cars is equal to the number of real owners.");
       }

       else{
        console.log("The number of missing cars is neither equal to the number of tracked cars nor the number of real owners.");
       }













      
      

































//  ---------------------------All JAVASCRIPT CONCEPT PRACTICES---------------------------------

//  console.log("John" + " " + "Doe")

//  let x = 10;
//  x *= 5;
//  console.log(x)



// functions
// let x = myFunction(4,3);

// function myFunction(a, b){
//     return a * b
// }


// let mypcSafe = ['macBook-pro', 'Hewllete pad', 'ipad', 'lenovo']
// for(let i = 0; i < mypcSafe.length; i++){
//     console.log('This is the item index ' + i, '' + mypcSafe[i])

 
// }

// let x = 34;
// let y = 50;

// function operationOfNums(firstnum, secondnum){
//     console.log(firstnum =- secondnum)
// }

// operationOfNums(x, y);


// function addSomething( num, str){
//     console.log(num + str)
// }

// addSomething(4,5);








