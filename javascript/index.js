//Operators
var score = 8
console.log("Mid-level skills:",score >0 && score< 10)

var timeRemaining  =0
energy= 10
console.log( "Game over: ", timeRemaining == 0 || energy == 0)

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

//Conditional statements

var result = 50

if( result >=80){
    console.log("You have passed above 80")
}else if(result>= 50){
    console.log("You have passed")
}else{
    console.log("You have failed")
}

var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
}


var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
}


var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}



var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Tuesday':
       console.log('Do something');
       break;
   case 'Wednesday':
       console.log('Do something');
       break;
   case 'Thursday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Saturday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
       break;
}


var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Do something');
       break;
   case 'Tuesday':
       console.log('Do something');
       break;
   case 'Wednesday':
       console.log('Do something');
       break;
   case 'Thursday':
       console.log('Do something');
       break;
   case 'Friday':
       console.log('Do something');
       break;
   case 'Saturday':
       console.log('Do something');
       break;
   case 'Sunday':
       console.log('Do something');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}


//Lopping 

var x=0
console.log("Using a while loop")
while(x <=10){
    console.log("X:",x)
    x+=1
}
console.log("Using a for loop")
for(var x=10;x>=0;x--){
    console.log("X:",x)
}

for(var x=0;x<=3;x++){
    console.log("X:",x)
}

//Task
for(var x= 5; x>0;x--){
    console.log(x)
}
console.log("Counting completed")

//Whila count down
x =5
while(x>0){
    console.log(x)
    x--
}
console.log("Counting completed in while")

x=2018
while(x<=2022){
    console.log(x)
    x++
}

//Nested loops
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

for(var x =1;x<=10;x++){
    if(x==1){
        console.log("Gold medal")
    }else if(x==2){
        console.log("Silver medal")
    }else if(x==3){
        console.log("Bronze medal")
    }else{
        console.log(x)
    }
  
}

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}