//Concatenate multiple arrays: ----
const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[25,36,22,29];
// const allAges = ages.concat(ages2);
// console.log(allAges);
// const allAges2=ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges2);

//concatenate can be done easily in ES6 by three dot(...) which is called spread operator

const allAges = [...ages,...ages2,...ages3];
console.log(allAges);

// how can we find maximum number----
const buisness = 650;
const minister =450;
const socib = 250;
const maximum = Math.max(buisness,minister,socib);
console.log(maximum);

// we can find maximum which we have done above,,,but if we want to find maximum of an array,then what we have to do is given bellow:

const takapoisha =[650,450,250,850];
const beshiTaka = Math.max(...takapoisha);
console.log('beshi taka ase jar tar takar number'+' '+beshiTaka);

//3 dots means ,spreading all the elements of an array...