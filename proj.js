
var p=0;
var e=0
function emilCheck() {
  var x= document.getElementById('email')
  if(x.value.length<=3 || !x.value.includes("@") || !x.value.includes("."))
  {
    var para=document.getElementById('p1')
    para.innerText="Make sure email is more than 3 characters and has @ and a .";
    para.style.color="red";
    e=0;
  }
  else{
    var para=document.getElementById('p1')
    para.innerText="";
    para.style.color="white";
    e=1;
  }
  if(p==1 && e==1){
    var good=document.getElementById('p3')
    good.innerText="All good to go!";
    good.style.color="green";
  }
  else{
    var good=document.getElementById('p3')
    good.innerText="";
    good.style.color="white";
  }

}
function passCheck() {
  var x= document.getElementById('password')
  if(x.value.length<=8 )
  {
    var para=document.getElementById('p2')
    para.innerText="Make sure password is more than 8 characters.";
    para.style.color="red";
    p=0;
  }
  else{
    var para=document.getElementById('p2')
    para.innerText="";
    para.style.color="white";
    p=1;
  }
  if(p==1 && e==1){
    var good=document.getElementById('p3')
    good.innerText="All good to go!";
    good.style.color="green";
  }
  else{
    var good=document.getElementById('p3')
    good.innerText="";
    good.style.color="white";

  }

}

function blue() {
  var x= document.getElementById('email')
  var y= document.getElementById('password')
  alert(" Are you want to move forward with \n Email Id.: "+x.value+" \n Password: "+ y.value);
  alert("successful signup!")
  location.reload();

}
