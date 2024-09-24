// city assignment

function city(){
  var input1 =  document.getElementById("input-1").value;
  if(input1==="Karachi"){
    alert("Welcome! to the city of Lights ;)");
  }
  else if (input1==="karachi"){
    alert("Welcome! to the city of Lights ;)");
  }
  else{
    alert("Welcome! ")
  }
}

// gender assignment

function gender(){
    var input2 = document.getElementById("input-2").value;
    if(input2==="male"){
       alert("Welcome! Sir how are you?")
    }
    else{
        alert("Welcome! Mam how are you?")
    }
}

// traffic signals

function redClick(){
    alert("you must STOP!")
}
function yellowClick(){
    alert("Get ready to GO!")
}
function greenClick(){
    alert("You are legal to GO!")
}

// fuel assignment

function fuel(){
     var input3 = document.getElementById("input-3").value;
     if(input3<="0.25 litres"){
        alert("Please refill the fuel in your car!")
     }
else{
    alert("You have enough fuel to next petrol pump!")
}
}

// guess number assignment

function guess(){
    var sceretNumber = "6"
    var input4 = document.getElementById("input-4").value;
      if(input4 === sceretNumber){
        alert("BINGO! correct answer")
      }
      else if(input4 === "7"){
        alert("Close enough to a correct answer!")
      }
      else if(input4 === "5"){
        alert("Close enough to a correct answer!")
      }
      else{
        alert("OPPS! try again")
      }
}

// number divisible by 3 assignment

function number(){
    var input5 = document.getElementById("input-5").value;
  
     if(input5%3===0){
        alert("YES this num is divisible by 3")
        
     }
     else{
        alert("NO this num is not divisible by 3")    
     }
}

// even and odd assignment

function even(){
    var input6 = document.getElementById("input-6").value;
    if (input6%2===0){
        alert("It is an EVEN number")
    }
    else{
        alert("It is an ODD number")
    }
}

// calculator assignment

function calculator(){
var input7 = document.getElementById("input-7").value;
var input8 = document.getElementById("input-8").value;
var selectOption = document.getElementById("myDropdown").value;
var showCalculation = document.getElementById("input-cal");

let result;
if(selectOption==="add"){
    result =   Number(input7) + Number(input8 ) ;
} else if(selectOption==="sub"){
     result =   Number(input7) - Number(input8 ) ;
}
else if(selectOption==="mul"){
    result =   Number(input7) * Number(input8 ) ;
}
else if(selectOption==="div"){
    result =   Number(input7) / Number(input8 ) ;
}

showCalculation.value=result;


}