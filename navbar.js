//When the window scrolls , hide the navbar
var nav_visible = false


//Change the dashboard redirect if the user is signed in 
/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("dashboard").href = "/ml/dashboard/dashboard.html";
  }
})
*/

function menu(){
  if(nav_visible == false) {
    document.getElementById("nav_options").classList.remove("d-none");
    document.getElementById("nav_options").classList.remove("d-md-flex");
    document.getElementById("nav_options").classList.add("w-100");
    document.getElementById("nav_options").classList.add("bg-white");
    nav_visible = true
  } else{
    document.getElementById("nav_options").classList.add("d-none");
    document.getElementById("nav_options").classList.add("d-md-flex");
    document.getElementById("nav_options").classList.remove("w-100");
    document.getElementById("nav_options").classList.remove("bg-white");
    nav_visible = false
  }
}