import { navbar }  from "../components/navbar.js";
//console.log(navbar)

let navbardiv = document.getElementById("nav-container")
navbardiv.innerHTML = navbar();

let loginshow = document.getElementById("logshow")
loginshow.onclick = function() {
document.getElementById("login").style.display ="block"
}

document.querySelector("form").addEventListener("submit", signin);
//var AllUsers = JSON.parse(localStorage.getItem("userDataBase"));

function signin(event){
  var AllUsers = JSON.parse(localStorage.getItem("userDataBase"));

event.preventDefault();
var mail = document.getElementById("outmail").value
var pass = document.getElementById("outpass").value
// console.log(regdUsers.username)
  
for(var i=0; i<AllUsers.length; i++)
{
    var flag=false;  
    if(mail == []){
        let text = document.getElementById("mymail");
        text.style.color ="red";
        flag=true;
        break;
   }
   else if(mail !== []){
    let text = document.getElementById("mymail");
    text.style.color ="#0ebaba";
    flag=true;
   }
     if(pass == []){
        let text = document.getElementById("mypass");
        text.style.color ="red";
        flag=true;
        break;
   }
    else  if(AllUsers[i].mail == mail && AllUsers[i].password == pass)
      {
        flag=true;
        alert("login successfully")
        document.getElementById("login").style.display ="none";
        // document.getElementById("logshow").style.display ="none";
        let showname = document.getElementById("x")
        showname.innerHTML = AllUsers[i].username;

        let showlogo = document.getElementById("signlogo")
        showlogo.src ="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-nav.svg";
        showname.setAttribute("id","namshow")        
        showname.onclick = function () {
             let logout =  document.createElement(h4)
             logout.innerHTML ="Logout"
        }
        break;
      }
}
if(flag==false){
    alert("Invaild Username or Password") 
  }

}

// signup ////
let showsignup = document.getElementById("gotosignup")
showsignup.onclick = function () {
  document.getElementById("login").style.display ="none";
  document.getElementById("signup").style.display ="block"
}


let startfill = document.getElementById("inputbtn");

var userStack=JSON.parse(localStorage.getItem("userDataBase"))||[];

startfill.onclick =  function formSubmit(){
  event.preventDefault();

  var nam = document.getElementById("innam").value 
  var mail = document.getElementById("inmail").value 
  var pass = document.getElementById("inpass").value 
  var num = document.getElementById("innum").value 
  console.log(nam,mail,pass,num)
 
  var flag=true;
  // if(pass !=="" || mail !== "" || nam !== "" || num !== "" ){
  //   let text = document.querySelectorAll(".valid");
  //   text.style.color = "green";
  //   flag=true;
  // }
  if(nam == ""){
      let text = document.getElementById("validnam");
      text.style.color ="red";  
      flag=false;
  }

  if(mail == ""){
    let text = document.getElementById("validmail");
    text.style.color ="red";
    flag=false;
  }

  if(pass == ""){
    let text = document.getElementById("validpass");
    text.style.color ="red";
    flag=false;
  }

  if(num == "" || num.length != 10 ){
    let text = document.getElementById("validnum");
    text.style.color ="red";
    text.innerHTML ="*Invalid Mobile Number";
    flag=false;
  }
  if(flag == true){
      var userData = {
          username: nam,
          mail: mail,
          password: pass,
          mobile: num,
      };
      userStack.push(userData);
      localStorage.setItem("userDataBase", JSON.stringify(userStack))
      alert("Sign-up succsessfully...")  
      document.getElementById("login").style.display ="block";
      document.getElementById("signup").style.display ="none"
     
   }   
  }



let displayin = document.getElementById("cross1")
displayin.onclick = function close () {
  document.getElementById("login").style.display ="none";
}

let displayup = document.getElementById("cross2")
displayup.onclick = function close () {
  document.getElementById("signup").style.display ="none"
}