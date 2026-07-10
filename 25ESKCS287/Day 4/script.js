const btn = document.getElementById("themeBtn");

btn.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

btn.innerHTML="☀️ Light Mode";

}else{

btn.innerHTML="🌙 Dark Mode";

}

};

document.getElementById("registrationForm").addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Registration Successful!");

this.reset();

});