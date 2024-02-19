//write a class to calculate the Uber price.
class UberPrice{
    static distance="";
    static carType="";
    static bookedCar="";

    constructor(distance,carType,bookedCar)
    {
        var cars={
            "100km":"$100",
            "200km":"$200",
            "300km":"$300",
            "400km":"$400",
            "500km":"$500",
            "600km":"$600",
            "700km":"$700",
            "800km":"$800",
            "900km":"$900",
            "1000km":"$1000"
        }
        return cars[distance];
    }
}

var obj=new UberPrice("200","SUV","Tata Safari");