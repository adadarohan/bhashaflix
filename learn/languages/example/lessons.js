function next(lesson) {
    var user = firebase.auth().currentUser; 
    var uid = user.uid;
    var db = firebase.firestore();
    db.collection('user-progress').doc(uid).set({
        example : lesson
    },{ merge: true }).then(function() {
        console.log("Document written");
        window.location.href = "index.html";
    })
    .catch(function(error) {
        console.error("Error adding document: " ,  error);
    }); 


}