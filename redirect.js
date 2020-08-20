firebase.auth().onAuthStateChanged(function(user) {
    if (user == false) {
        window.location.href = "/bhashaflix";
    }
});