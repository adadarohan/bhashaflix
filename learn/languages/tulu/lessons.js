function next(lesson) {
    analytics.logEvent('lesson_completed');
    var user = firebase.auth().currentUser; 
    var uid = user.uid;
    var db = firebase.firestore();
    db.collection('user-progress').doc(uid).set({
        tulu : lesson
    },{ merge: true }).then(function() {
        console.log("Document written");
        confetti.start(3000);
        setTimeout(function () {
            window.location.href = "index.html";
        }, 3000);
    })
    .catch(function(error) {
        console.error("Error adding document: " ,  error);
    }); 

}