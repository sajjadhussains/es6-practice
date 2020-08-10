//rules for writting class
class Student{

}
const student1 = new Student();
const student2 = new Student();
console.log(student1,student2);
//now the class is empty,if you want to give property to this class then you have to write constructor

class Student1{
    constructor(){
        this.id = 1;
        this.name ="mahi";
    }
}
const student3 = new Student1();
const student4 = new Student1();
console.log(student3,student4);

//We can differentiate also by giving parameter to constructor
class OfficeMate{
        constructor(id,name){
            this.id = id;
            this.name = name;
            this.company = "Mukto Software Company";
        }
}
const officeMate1 = new OfficeMate(12,"shuvo");
const officeMate2 =new OfficeMate(22,"mahiya");
console.log(officeMate1,officeMate2);