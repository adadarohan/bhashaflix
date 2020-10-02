//Add next up card
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid;
        var db = firebase.firestore();
        const usersRef = db.collection('user-progress').doc(uid);
        usersRef.get().then((querySnapshot) => {
            //CHANGE LANG NAME
            var lnum = querySnapshot.data().example
            document.getElementById("next_up").innerHTML = lessons[0][lnum] ;
            document.getElementById("next_up_row").classList.remove("d-none");
            document.getElementById("next_up_href").href = "lesson_" + toString(lnum) + "_1.html";
            if(lnum > 0) {
                for (let index = 0; index <= lnum; index++) {
                    document.getElementById(lnum).classList.remove("not-done"); 
                    document.getElementById(lnum).classList.add("done");  
                }
            }

        });
        
    }
})