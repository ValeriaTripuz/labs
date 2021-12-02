
// let today= new Date();
// let day=today.getDay();
// let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(`Today is: ${dayList[day]}`);

// let hour= today.getHours();
// let minutes= today.getMinutes();
// let second= today.getSeconds();

// console.log(`Current time: ${hour}:${minutes}:${second}`);
// let partOfTheDay= (hour>=12)? "PM":"AM";
// console.log(partOfTheDay);

// function leapyear(year){
//     return (year%100===0)? (year%400 ===0): (year%4 ===0);
// }
// console.log(leapyear(2017));
// console.log(leapyear(1988));
// for(let year= 2014; year <=2050;year++){
//     const day= new Date(year,4,7);
//     if(day.getDay()===6){
//         console.log(`7st May is being a Saturday : ${year}` );
//     }
// }

// const number= Math.ceil(Math.random()*10);
// console.log(number);
// const yourNumber= prompt("Guess the number between 1 and 10");
//  if(yourNumber== number){
//      console.log(`Matched your number: ${yourNumber}; our number: ${number}`)
//  }else{
//      if(yourNumber>10){
//          console.log(`Too big number`);
//      }else{
//      console.log(`Not matched, the number was ${number}`);
//      }
//     }

// const today= new Date();
// let xmas= new Date(today.getFullYear(),11,25);
// if(today.getMonth()==11 && today.Date()>25){
//     xmas.setFullYear(xmas.getFullYear()+1);
// }
// let oneDay= 1000*60*60*24;
// console.log(Math.ceil((xmas.getTime()-today.getTime())/(oneDay))+ " days left until Christmas !");

// function multiplyBy(){
// number1=document.getElementById("firstNumber").value;
// number2=document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML= (number1*number2);
// }
// function divideBy(){
//     number1=document.getElementById("firstNumber").value;
// number2=document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML= (number1/number2);
// }

// function cToF(celcius){
//     const cTemp = celcius;
//     const fTemp= (celcius*9+(32*5))/5;
//     console.log(`Celcius : ${cTemp}\xB0C; Farenheit : ${fTemp}\xB0F`) 
// }
// function fToC(farenheit){
//     const fTemp2= farenheit;
//     const cTemp1 = (5/9)*(fTemp2-32);
//     console.log(`Farenheit : ${fTemp2}\xB0 ; Celcius : ${cTemp1}\xB0C`) 
// }
// cToF(20);
// fToC(40);

// console.log(document.URL);
// let filename= "system.jpeg";
// console.log(filename.split('.').pop());

// let markWeights = 78;
// let johnWeights = 92;

// let markTall = 1.69;
// let johnTall = 1.95;

// markBMI= markWeights / markTall**2;
// johnBMI= johnWeights / johnTall**2;

// if(markBMI>johnBMI){
//     console.log(`mark ${markBMI} is bigger than john ${johnBMI} `);
// }else{
//     console.log(`mark ${markBMI} is smaller than john ${johnBMI} `);
// }

// function addingString (str){
//     if(str.substring(0,2)==='Py'){
// return str;
//     }else{
//         return "Py"+ str;
//     }

// }
// console.log(addingString("Python"));

// function changeLetter(str){
//     withoutFirstAndLast= str.substring(1,str.length-1);
// return (str.charAt(str.length-1) + withoutFirstAndLast + str.charAt());
// }
// console.log(changeLetter('Python'));
// console.log(changeLetter("Swift"));

// function addLetter(str){
// //return(str+str.charAt());
// // firstLetter= str.substring(0,1);
// // return(str+firstLetter);
// lastThreeLetter= str.substring(str.length-3);
// return(lastThreeLetter + str+ lastThreeLetter);
// }
// console.log(addLetter("Swift"));
// console.log(addLetter("Python"));

// function checkJava(str){
//    if(str.substring(4,10)=='Script'){
//        return str.substring(0,4);
//    }else{
//        return str;
//    }
// }
// console.log(checkJava("JavaScript"));
// console.log(checkJava("StringJava"));

function check(str,char){
    counter=0;
    for(let i=0; i< str.length;i++){
        if((str.charAt(i)===char)){
            counter=counter;
        }
    }
    return counter;
}

console.log(check("Pythonyy", "y"));
console.log(check("Swiftw", "w"));
console.log(check("JavaScript", "c"));