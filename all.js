//*********** to put in commit we use // and total all statements we using contral+shift+k we use  */



// //  var a = 10
// // var  b = 15
// // var c = ("vinay")
// // var d = 'kumar'


// // console.log(a+b+c)
// // console.log(d)

// var a  =  3
// var b = 'java script'
// var c = true

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(a+b+c)
// var d = false
// console.log(d)

// let f = 300
// console.log(f)

// const e =78
// console.log(e)

// var int = 988765
// console.log(int)

// var string_name = "vinay"
// console.log(string_name)

// var car = 'tata'
// const price = 6098765432
// var a,b,c
// a = 3
// b=5
// c=6
// console.log(a,b,c)
 

// console.log(price+car)




// var  a =10
// let b = 2
// //console.log(typeof(a))
// //console.log(typeof(b))
// //console.log(a+b)

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a**b)
// console.log(a/b)
// console.log(a%b)
// console.log(++a)
// console.log(--a)
// console.log(++b)
// console.log(--b)



// var c = 10
// var d = 9
// c>d?
// console.log("c is biger"):
// console.log("d is smaller");


// let e= 3
// let f= 8
// // console.log(e&f)

// var result = "300"
// console.log(result)
// result = Number(result)
// console.log(typeof(result))

//**************************************EXPLICT CONVERSTON ****************************************************** */
// var result
// result = Boolean(0)     // to covert the boolean it case sentive
// console.log(result)
// console.log(typeof(result))


// let result ;
// result = String(2345);     /// to convert the string to number
// console.log(result);
// console.log(typeof(result))


//  let result1 ;
// result1 = Number("234");      // to convert  the string to number
// console.log(result1);
// console.log(typeof(result1))





//*************  FLOAT   ***********8 */
// var a =  '34567.0987654'
// console.log(a)
// console.log(parseInt(a))
// console.log(parseFloat(a))
// console.log(Math.floor(a))
// console.log(typeof(a))


// a = "ten"
// b = Boolean(a)
// c= Number(a)
// console.log(a)
// console.log(b)
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))


//*********** string  */






//*********************************************************** string ****************************************/
// length , charAt(), indexOf(), toUpperCase(), toLowerCase(), toString()
// a = "javascript"
// console.log(a)
// console.log(a.length)
// console.log(a.indexOf("t"))
// console.log(a.charAt(9))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.toString())


// console.log("it's me")
// console.log("it's\\\\me")
// console.log('kumar')

// let a =['vinay','rakesh','raju','naveen' ,'sravan']
// let b = ['p', 'r','a', 'y','g']
// console.log("surname :"+ b[2])
// console.log("name:"+a[3])

//******************************************************8 CONDITIONAL STATEMENTS ************** */
// //if
// else
// // if else-if ladder
// // switch

// if (5>2)
// {
//     console.log("1 is grater than 2")
// }
// else {
//     console.log("then the coditions is failed ")

// }

// let a =19098765432;
// let b = 987658;
// if(a>b){
//     console.log("a is big")

// }
// else{
//     console.log("b is big")
// }
//******** if, elseif, else */
// let a =1;
// let b= 25;
// let c =3
// if(a>b){
//     console.log("a is big")
// }
// else if (c>b){
//     console.log("c is big")

// }
// else{
//     console.log("b is big")
// // }

// //***** switch  */
// let a =10;
// let b = 20 ;
// let c = 30;

// switch(b)
// {
//    case 10 :console.log(" value is 10 ")
//    break;
//    case 20: console.log('value is 20')
//    break
// }
// *********** loopind statements **************8
// let a = 0
// do{
//     console.log("1="+a);
//     a++

// // }while(a<13)
// for(var a=1;a<=50;a++){

//     if (a==2){
//         console.log("contious the matter")
//         continue
//     }
//     if(a==5){
//         console.log("breake the statement")
//         break
//     }console.log("page no is :"+a)


// }

//********************************************************** scope  ************//
//block scope
//global scope
//localscope and function scope
//*********************************** block scope  **********************************************/
// ************ let and const only access inside the funtions but not outside of the  function ,
//var can access out side of functions  and also inside of the function



//let a = 2
// if(a>=1){
//     console.log("print value")
//      var b = 20;
//      console.log(b)
//  }
//  console.log(b)

// let a = 2
// if(a>=1){
//     console.log("print value")
//     let b = 20;
//     console.log(b)
// }

//  ***************************************      functions  & bolck  scope  ***********************************
//****  let and const only access inside  the funtions  but not outside of the functions  ,
// var can access out side of functions  and  inside of the function */
// function f(){
//  let  a = 20;
//     console.log(a);
// }
// f()
// console.log("out side :"+a)

// function f()
// {
//      const   car= "volvo"
//     console.log(car)
// }
// f()

//**********************  GLOBAL SCOPE */
  // we can  declar with out let , var, const  &  we  can directly assign the variables like if (a = 20){
  //} console.log (a)
  //if we mention variables out side of the functions than it is call the gobal scope  as mentions in the below example
  //and also we can access out side the funtions and also

//  if (a = 30){
//     a1 = 40
//     console.log("inside  of the funtion :"+  a1)
//  }
//  console.log("outside of the funtions : "+ a)


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&            functios                  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//functions
//function call
//Return


// How to create the function and must be use funtion keyword as mentions in the below given  
//and also last must call the funtion name 
// function fan(){
//     console.log(" this ia functons of the java script")
// }
//  fan()

//*****************************************************8 */       Return   ******************************************8

// function f1 (a,b){

//     console.log("add the values od a and b :"+(a+b))
//     return a+b
// }
// var a = 10 , b = 20 
// var add = f1 (a,b)
// console.log(add)


//****************************************** */ Alert , Prompt , Coonfirm********************************************************************8


// Alert box

//class and object 

// var person = {name : "vinay", age : "21"};
// console.log(typeof(person));
// console.log(person);
// console.log(person.age);
// console.log(person.age.length)
// console.log(person.name)
// console.log(person.name.length)


//*************object methods  *********/
//************* object constructors*****
// */
// function person (name,age){  // to create the constructors
//   this.name=name;
//   this.age=age;
// }
// var p = new person("vinay",21)  // to create the objects
// var p1 =new person("guru",22)
// console.log(p.name)
// console.log(p.age)
// console.log(p1.name)
// console.log(p1.age);


//******** Methods */
// var person= {name:"vinay",age :21, changename: function change(a){this.name=a;  console.log("fun call") }};
// console.log("Before method call");
// console.log(person.name);

// console.log("after method call");
// person.changename("guru");
// console.log(person.name);

// function person (name,age){
//   this.name =name;
//   this.age=age;
//   this.changeage=function cn(age)
//   {

//     this.age=age;
//   }
// }
// var p = new person("vinay",21);
// //console.log(p.name+p.age);
// console.log("before the method call");

// console.log(p.age);
// console.log("after method call");

// p.changeage(45);
// console.log(p.age);


// function person (name,age){
//   this.name =name;
//   this.age=age;
//   this.changeage=cn;
// }
// function cn(age){
//     this.age=age;
  
// }
// var p = new person("vinay",21);
// //console.log(p.name+p.age);
// console.log("before the method call");

// console.log(p.age);
// console.log("after method call");

// p.changeage(45);
// console.log(p.age);




function person (name,age){
  this.name =name;
  this.age=age;
  this.yob= yob;
}
function yob(age){
    return 2024-this.age
  
}
var p = new person("vinay",23);
console.log(p.name+p.age);
console.log("before the method call");

console.log(p.age);
console.log("after method call");

console.log(p.yob());
console.log(p.age);

