
function bmiCalculator(){
    var weight = prompt("Please enter your weight :");
    var height = prompt("Please enter your height :");
    var text;
    var finalheight = height * height; 
    var bmi = weight / finalheight;

    if (bmi <= 18.5) {
        text = "You are underweight.";
    }
    else if(18.5 < bmi && bmi <= 24.9 ) {
        text = "You have a normal weight.";
    }
    else if(bmi > 24.9 ) {
        text = "You are overweight.";
    }
    else{
        text = "something wrong"
    }
     
    document.getElementById("demo").innerHTML = text;
}