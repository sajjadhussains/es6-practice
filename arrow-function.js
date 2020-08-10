//previous rules for writting function

function doubleIt(num){
    return num*2;
}
const result1 = doubleIt(5);
console.log(result1);

//previous another rules for writting function by declaring as a variable-----

const doubleIt2 = function(num2){
    return num2 * 5;
}
const result2 = doubleIt2(8);
console.log(result2);

//rules for writting function in ES6 is given bellow:-----
            //for one parameter--
            const doubleIt3 = num3 => num3 * 7;
            const result3 = doubleIt3(3);
            console.log(result3);
            //rules for writting more parameters
            const doubleIt4 = (x,y) => x+y;
            const result4 =doubleIt4(13,11);
            console.log(result4);
            // rules for writting no parameters
                const give5 = () => 5;
                const result5 = give5();
                console.log(result5);

                // If I want to get return from function by doing multiple work ----
                const doMath = (a,b) => {
                    const sum = a + b;
                    const diff = a - b;
                    const result = sum * diff;
                    return result;
                }
                const result6 =doMath(10,5);
                console.log(result6);
