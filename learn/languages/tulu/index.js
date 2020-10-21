//Add next up card
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid;
        var db = firebase.firestore();
        const usersRef = db.collection('user-progress').doc(uid);
        usersRef.get().then((querySnapshot) => {
            //CHANGE LANG NAME
            var lnum = querySnapshot.data().tulu
            if(lnum < lessons[2].length ) {
                document.getElementById("next_up").innerHTML = lessons[2][lnum] ;
                document.getElementById("next_up_row").classList.remove("d-none");
                plus = lnum + 1
                document.getElementById("next_up_href").href = "lesson" + plus.toString() + "_1.html";
            }

            if(lnum > 0) {
                for ( var i = 1 ; i <= lnum ; i ++){
                    var ele = document.getElementById(i.toString()); 
                    ele.classList.add("done") ;
                    ele.classList.remove("not-done") ;

                }
            }
        });
        
    }
})