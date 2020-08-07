//first system of declare function
function add(num1,num2){
    return num1*num2;
}
const result =add(12,13);
console.log(result);

//2nd system of declare function
function add2(num1,num2){
    if(num2==undefined){
        num2 = 23;//you can put any value by default by this system.
    }
    return num1 + num2;
}
const result2 =add2(12);
console.log(result2);
//3rd system of declare function
function add3(num1,num2){
    num2=num2 || 5;
    return num1+num2;
}
const result3 =add3(12);
console.log(result3);

//last system and this is the Es6 system and it is effective
function add4(num1,num2 = 20){
    return num1+num2;
}
const result4 =add4(12);
console.log(result4);