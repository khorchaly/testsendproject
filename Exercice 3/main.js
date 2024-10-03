




function whosPaying() {

var names = [ "Oussama" , "Salah" , "Monir"];

var numberOfPeople = names.length;

var chooseOne = Math.floor(Math.random() * numberOfPeople);

document.getElementById("demo").innerHTML = names[chooseOne] +" is going to buy lunch today !";

}    

