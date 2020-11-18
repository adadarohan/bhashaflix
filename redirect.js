firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //user is logged in
    } else {
        window.location.href = "/learn/signin.html";
    }
});