document.getElementById("add").onclick= addition;
document.getElementById("substract").onclick= difference;
document.getElementById("multiply").onclick= product;
document.getElementById("divide").onclick= quotient;



function addition(){
  var a =parseFloat(document.querySelector("#firstValue").value);
  var b =parseFloat(document.querySelector("#secondValue").value);
  var solution= a+b;
  document.getElementById("result").innerHTML=solution;
}

function difference(){
  var a =parseFloat(document.querySelector("#firstValue").value);
  var b =parseFloat(document.querySelector("#secondValue").value);
  var solution= a-b;
  document.getElementById("result").innerHTML=solution;
}
function product(){
  var a =parseFloat(document.querySelector("#firstValue").value);
  var b =parseFloat(document.querySelector("#secondValue").value);
  var solution= a*b;
  document.getElementById("result").innerHTML=solution;
}

function quotient(){
  var a =parseFloat(document.querySelector("#firstValue").value);
  var b =parseFloat(document.querySelector("#secondValue").value);
  var solution= a/b;
  document.getElementById("result").innerHTML=solution;
}
