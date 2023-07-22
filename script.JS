function runCode() {
    var x= 2
    var y= 4

if(prompt("2+4?")==x+y) {alert("correct!"); } else {alert("wrong")}
 
}


function gameCode(){
    var x=prompt("Where Do You Live?")
    var correctAnswer = ("Kabwe")
    if (x === correctAnswer) 
    {alert("Correct!")} else 
    {alert("Incorrect")}

  
var message = "Thanks, ";
var userName = prompt("your name", " " );
 var banger = "!";
 var customMess = message + userName + banger;
 alert(customMess);
}
    

function gameCode1(){
   
var message = "Thanks, ";
var userName = prompt("your name", " " );
 var banger = "!";
 var customMess = message + userName + banger;
 alert(customMess);
}
    
function quadratic(){
a=prompt("enter a",14)
b=prompt("enter b",38)
c=prompt("c",8)
d=Math.sqrt(b*b-4*a*c)
prompt("d values is", d)

x1=(-b-d)/(2*a)
x2=(-b+d)/(2*a)
if (d>0){alert("real root")}
if (d<0){alert("complex root")}
else
alert(x1)
alert(x2)
}