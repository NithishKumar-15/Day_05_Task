//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    static title="";
    static studio="";
    static rating="PG­13";

    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getPG(arr){
        var obj1={
            "KGF":"PG",
            "LEO":"PG",
            "BEAST":"PG",
            "MILLER":"AG",

        }
        console.log(arr);
        var newArr=[];
        var i1=0;
       for(var i of arr){
        if(obj1[i]=="PG"){
            newArr[i1]=i;
            i1++;
        }
       }
        return newArr;
    }
}

var obj=new Movie();
var ara1=["KGF","LEO","BEAST","MILLER"];
console.log(obj.getPG(ara1));

/*
Output:
["KGF","LEO","BEAST","MILLER"]
["KGF","LEO","BEAST"]
*/
