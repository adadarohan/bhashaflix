firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("get-started").href = "/bhashaflix/learn";
        document.getElementById("learn-card").href = "/bhashaflix/learn";
        document.getElementById("get-started-bottom").href = "/bhashaflix/learn";
    }
})

analytics.logEvent('add_payment_info');
console.log("logged event");