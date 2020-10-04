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
            plus = lnum + 1
            document.getElementById("next_up_href").href = "lesson" + plus.toString() + "_1.html";
            if(lnum > 0) {

                for (let index = 1; index <= lnum; index++) {
                    var element = document.getElementById(lnum) ;
                    console.log(lnum , index);
                    element.classList.remove("not-done"); 
                    element.classList.add("done");
                }
            
            }
        });
        
    }
})