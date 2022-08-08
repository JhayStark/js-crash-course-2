let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(!true);
console.log(!false);
console.log(num1===num3); //equality check
console.log(word1 === word2 );
console.log(word1 != word2 );

//CONTROL FLOW

let item = "Annapurna";
if (item === "Annapurna"){
    console.log("Buy Annapurna")
} else if(item === "U2"){
    console.log("Buy U2")
} else if(item === "A1"){
    console.log("Buy A1")
} else{
    console.log("Buy rock salt")
}

let score = 85;
if(score >= 0 && score <=100){
    if (score >= 90){
        console.log("Excellent")
    
    } else if (score >= 80){
        console.log("Very Good")
    
    } else if (score >= 70){
        console.log("Good")
    
    } else if (score >= 60){
        console.log("Average")
    
    } else if (score >= 50){
        console.log("Credit")
    
    } else if (score >= 40){
        console.log("Pass")
    
    } else if (score >= 0) {
        console.log("Fail")
    }

} else {
    console.log("Please enter a valid score")
}

function sum(a, b){
    let total = a + b;
    return total;
};

let eleven = sum(5,6); //11
let fifteen = sum(7,8);
let nineteen = sum(9,10);

function multiply(a, b =1){
    let total = a * b;
    return total;
};

let product = multiply(5)
console.log(product)


//LOOPS
for(let i = 1; i <=10; i++ ){
    console.log(i)
};

// WHILE LOOPS
let num = 1;
while(num <= 10){
    console.log(num);
    num++
};

// DO WHILE LOOP
let age = 1;
do{
    console.log(age + ' You cant vote')
    age++
} while (age <18);

//ARRAY METHODS
let ages  = [18,19,20,21,22,18,19,20,21,22]

for(let age of ages){
    console.log(Math.pow(age, 2))
}

//FILTER
let marriage = ages.filter(num=> num > 18);
console.log(marriage);

//MAP
let squares = ages.map(age => age * age);
console.log(squares);

//FIND
let eighteen = ages.find(age=> age === 18)
console.log(eighteen)