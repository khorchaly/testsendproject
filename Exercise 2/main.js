

function isLeap() {


var year = prompt("Enter l'année :");
var text;


if(year % 4 === 0){
   if(year % 100 === 0){
     if(year % 400 === 0){
        text = year+" is leap year";
     }
     else{
        text = year+" is not leap year";
     }
   }
   else{
    text = year+" is leap year";
   }
}
else{
    text = year+" is not leap year";
}

document.getElementById("demo").innerHTML = text;

}