//----------------------Exercise 1 for Booleans, Variables, and Floats.------------------------

//  const myName = "Fred"
//  let jobTitle = "Cybersecurity Analyst, "
//  let jobRoles =  "ensure the protection of people, organizations, data, computer systems and network. He respond, investigates  incidents and report his findings. "
//  let myDegrees = 'CISSP and CEH certification,'
//  let lifeStyle = 'Very intellectual, Humble and serious.'


//  var myAge = 18
//  var myPay = 300000
//  var myExp =  3
//  var workHour = 8
//  var employers = 3

//  let float1 = 2.5
//  let float2 = 3.7
//  let float3 = 5.3
//  let float4 = 3.85
//  let float5 = 4.23

//  let booLean1 = 'True'
//  let booLean2 = 'True'
//  let booLean3 = 'false'
//  let booLean4 = 'True'
//  let booLean5 = 'false'

//  document.write(myName, ' is an ', myAge, ' year old ', jobTitle , ' whose duty is to ', jobRoles, 'He holds ',
//   myDegrees, ' and many more. ', 'Not just being a professional analyst, ', 'he is ', lifeStyle, ' With his job title, '
//   , 'it could be ', booLean1, ' that he earns a salary not less than $', myPay, '. He works ', workHour,
//    ' hours per week, which could even increase his salary by ', float1, '%' )

// document.write(`{myname} is an {myAge} year old {jobTitle} whose duty is to {jobRoles} He holds 
// {myDegrees} and many more. Not just being a professional analyst, he is {lifestyle}. With his job title `)

   //Arithematic operations (Exercise 2)

//    let num1 = 10
//    let num2 = 50

// console.log(num1-1 + num2)
 
// num1 = (4 + 6) * 10
// let sum = 5*5 + num1
// console.log(sum) 
   




// --------------------------Exercise 2-Project---------------------------

//-------------- Arrays with for loop assignment

// let myCollegues = ['Issac', 'Mark', 'Kofi', 'Benedict', 'Nuella', 'Huldah']
// let bandPlayer = myCollegues[0]

// for(let i = 0; i < myCollegues.length; i++){
//    console.log('This is my colleague at index ', + i,' ' + myCollegues[i])
  

// }



//-------------------------- Statement Assignment 

// if( myCollegues[1] == bandPlayer){
//    console.log(`Yes, he's my colleague and a band player as well.`)
// }


// else if(bandPlayer == myCollegues[2]){
//    console.log(`He's a colleague but not a band player`)
// }

// else if(bandPlayer == myCollegues[3]){
//    console.log(`He's a colleague but not a band player`)
// }

// else if(bandPlayer == myCollegues[4]){
//    console.log(`He's a colleague but not a band player`)
// }

// else{
//    console.log(`Non of them is qualified. Issac is the band player`)
// }


// -----------------function assignment

// function addThreeNumbers(num1, num2, num3){
//       let sum = (num1 + num2) * num3
//    return sum;
// }

// console.log(addThreeNumbers(3,4,2));




// -----------------Exercise 3-Project
// Create an object displaying my name, age and email in addition with any two other objects.

let person ={
   name: 'fred',
   age: `18 years`,
   email: `fred123@gmail.com`,

   checkPersonalInfo: function(){
      console.log(`${this.name} is ${this.age} and his email address is ${this.email}`)
      return;
   }
}

person.checkPersonalInfo();


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

    }
          console.log(car.checkTrackedCars(), car.checkLeftCars())



          let hotel ={
            name: `Rock City`,
            location: `kwahu-Nkwatia`,
            Reputation: `2nd largest In West Africa`
          }

          console.log(hotel.name)



         // ------Class Assignment----

         class Human{
            constructor(name, age){
               this.name = name
               this.age = age
            }

            talk(){
               console.log(`${this.name} speaks`)
               
            }
         }

         var identity = new Human('Enoch', 17);
      

         class Man extends Human{
               Super(name, age){
                  this.name = name
                  this.age = age
               }

            incident(){
               console.log(`with ${this.name}, who is 40 and 23 years older than him.`)
            }
         }
         
         let interaction = new Man(`Mr.Benedict`, 40)
         identity.talk().interaction.incident();

         