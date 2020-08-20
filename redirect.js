firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
    } else {
        window.location.href = "/bhashaflix/learn/signin.html";
    }
});