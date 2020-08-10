const person = {name:'shuvo',age:17,job:'facebooker',gfNmae:'Ema Watson',phone:'01834235533',address:'tolarbug',friends:['rahul','milton','shanto','tom cruse']}
// const gfNmae=person.gfNmae;
const { phone,gfNmae,address} = person;
console.log(gfNmae,phone,address);

const friends = ['sakib khan','Arman Khan','Amir Khan','shahrukh Khan'];
const [cotoFriends,nestFriends,...restFriends] =friends;
console.log(cotoFriends,nestFriends);
console.log(restFriends);

const complexObject={
    name:'habib Khan',
    info:{
        address:'kola bagan',
        leader:'Tiger leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);