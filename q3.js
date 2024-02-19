//Write a “person” class to hold all the details.

 class Person{
            static name="";
            static age="";
            static gender="";
            static occupation="";

            constructor(name,age,gender,occupation){
                this.name=name;
                this.age=age;
                this.gender=gender;
                this.occupation=occupation;
            }
        }

        var obj=new Person("Nithish",23,"Male","Techwaukee");
        var obj2=new Person("Santhosh",22,"Male","SF");
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.gender);
        console.log(obj.occupation);