firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var nextlink = "/bhashaflix/learn" ;
        document.getElementById("get-started").href = nextlink;
        document.getElementById("learn-card").href = nextlink;
        document.getElementById("get-started-bottom").href = nextlink;
    }
})

