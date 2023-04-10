var app=angular.module("myMod",[]);

 app.controller("myController", function($scope,$location, $interval){                //$scope is provide model .
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

    $scope.abc= [
        {name:"Mona",gender:"Female", class:12},
        {name:"Raj",gender:"Male", class:10},
        {name:"Munna",gender:"Male", class:11},
        {name:"Anita",gender:"Female", class:9},
        {name:"Rupam",gender:"Male", class:7}
        
    
    ];
    $scope.EmpView="index2.html";
$scope.url=$location.absUrl();
$scope.protocol=$location.protocol();
$scope.host=$location.host();
$scope.port=$location.port();

// $scope.count=0;
// $interval(function(){
//     $scope.count++
// },2000 )

$interval(function(){
    $scope.dateAndTime=new Date();
},1000)





});

