document.getElementById("checkButton").addEventListener("click", function (){
    
    const resultDiv = document.getElementById("result");
    const ageValue = parseInt(document.getElementById("age-input").value);
    
    resultDiv.innerHTML = "";
    if(isNaN(ageValue) || ageValue <0){
        resultDiv.innerHTML = "Please enter a valid age";
        return;
    };
    
    //value from html input
    
    console.log(ageValue);
    //select where to display result
    

    //conditions
    if(ageValue >= 18){
        resultDiv.innerHTML += "You are eligible to vote </br>";
    } else{
        resultDiv.innerHTML += "You are not eligible to vote </br>";
    }
    if(ageValue >= 21){
      resultDiv.innerHTML += "You are eligible to drink alcohol </br>";  
    } else{
        resultDiv.innerHTML += "You are not eligible to drink alcohol </br>";
    }
    //check for driving
    if(ageValue >= 16){
        resultDiv.innerHTML += "You are eligible to drive </br>";
    } else{
        resultDiv.innerHTML += "You are not eligible to drive </br>";
    };

});