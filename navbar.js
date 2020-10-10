//When the window scrolls , hide the navbar
var nav_visible = false


//Change the dashboard redirect if the user is signed in 

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    learn_elements = document.getElementById("learn");
    learn_elements.href = "bhashaflix/learn"
    document.getElementById("sign_in").classList.add("d-none");
    document.getElementById("login").classList.add("d-none");

    var photoURL = user.photoURL;
    if (photoURL != null) {
      document.getElementById("user_image").src = photoURL;
      document.getElementById("user_image").crossOrigin = "anonymous";
    }

    document.getElementById("user_image").classList.remove("d-none");
  }
})


function menu(){
  if(nav_visible == false) {
    document.getElementById("nav_options").classList.remove("d-none");
    document.getElementById("nav_options").classList.remove("d-md-flex");
    document.getElementById("nav_options").classList.add("w-100");
    nav_visible = true
  } else{
    document.getElementById("nav_options").classList.add("d-none");
    document.getElementById("nav_options").classList.add("d-md-flex");
    document.getElementById("nav_options").classList.remove("w-100");
    nav_visible = false
  }
}