var app=angular.module("myMod",[]);

 app.controller("myController", function($scope){                //$scope is  model here .
    $scope.name = "Monalisa Ganguly"
    $scope.number=0
    $scope.myFunction= function(){
        $scope.number++ 
    }

    $scope.fruits=["Apple","Banana","Mango","Strawberry","Lichi","Grapes","Apricot"]
    $scope.student={name:"Monalisa", gender:"Female", age:23 };
    $scope.employee =[
        {name:"Mona",city:"Burdwan",age:23},
        {name:"Raj",city:"Burdwan",age:25},
        {name:"Munna",city:"Burdwan",age:24},  
        {name:"Anita",city:"Burdwan",age:23},
        {name:"Rupam",city:"Burdwan",age:26},
    ];
    $scope.name="I am Monalisa Ganguly"
    $scope.amount=400000
    $scope.mydate=new Date();



    $scope.names=["Mona","Anita","Munna","Rupam", "Banani", "Apu", "Tandra"]

    $scope.employees= [
        {name:"Mona",city:"Burdwan",age:23},
        {name:"Raj",city:"Burdwan",age:24},
        {name:"Munna",city:"Burdwan",age:47},  
        {name:"Anita",city:"Burdwan",age:46},
        {name:"Rupam",city:"Burdwan",age:28},
    ];
    $scope.myFunction=function(x){
        $scope.order= x;
    }
    $scope.fruits=["apple", "mango", "grapes", "strawberry", "apricot", "guava"];
    $scope.students= [
        {name:"Mona",city:"Burdwan",age:23},
        {name:"Raj",city:"Burdwan",age:24},
        {name:"Munna",city:"Burdwan",age:47},  
        {name:"Anita",city:"Burdwan",age:46},
        {name:"Rupam",city:"Burdwan",age:28},
    ];

    $scope.emplo= [
        {name:"Mona",city:"Burdwan",age:23},
        {name:"Raj",city:"Burdwan",age:24},
        {name:"Munna",city:"Burdwan",age:47},  
        {name:"Anita",city:"Burdwan",age:46},
        {name:"Rupam",city:"Burdwan",age:28},
    ];

});

