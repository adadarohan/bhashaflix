//Give a greeting with name
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var fs;
        var ss;
        var first_name ;  
        var name = user.displayName;
        name_prefixes = ['Hi ', 'Hello ', 'Hey ']
        prefixes = ['Hi there', 'Hello there', 'Hey there' , 'Hey you']
        compliments = ['You look beautiful' , 'Have an amazing day' , 'Be fearless' , 'Learn something new', 'Dream big' , 'Believe in yourself' , 'Make today amazing']
        if (name != null) {
            var name_parts = name.split(" ");
            first_name = name_parts[0] ;
            fs = name_prefixes[Math.floor(Math.random() * (name_prefixes.length))] + first_name ;
        } else {
            fs = prefixes[Math.floor(Math.random() * (prefixes.length))];
        }
        ss = compliments[Math.floor(Math.random() * (compliments.length))];
        document.getElementById("name").innerHTML = fs;
        document.getElementById("compliment").innerHTML = ss;

        var uid = user.uid;
        var db = firebase.firestore();

        const usersRef = db.collection('user-progress').doc(uid);
        usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                usersRef.onSnapshot((doc) => {
                    var all_langs = doc.data();
                    var langdata = [all_langs.example , all_langs.example2 ];
                    started(langdata);
                });
            } else {
                usersRef.set({
                    example : -1 ,
                    example2: -1
                }).then(function() {
                    console.log("Document written");
        
                })
                .catch(function(error) {
                    console.error("Error adding document: " ,  error);
        
                }); 
            }
        });


    }
})

//Flip da cards
function flip ( card_id , state) {
    if (state) {
        document.getElementById(card_id + "-front").classList.add("d-none");
        document.getElementById(card_id + "-back").classList.remove("d-none");
    }
    else {
        document.getElementById(card_id + "-front").classList.remove("d-none");
        document.getElementById(card_id + "-back").classList.add("d-none");
    }
}

// Search for a quesry in a language and hide non matching results
function search (query) {
    const matches = languages.filter(s => s.includes(query));
    languages.forEach(element => {
        if (matches.includes(element) == false) {
            document.getElementById(element).classList.add("d-none");
        } else {
            document.getElementById(element).classList.remove("d-none");
        }
    });
}

//Call search function when enter is pressed
document.getElementById('languages-search').onkeydown = function(e){
    console.log(e.code);
    if(e.code == "Enter"){
      query = document.getElementById("languages-search").value ;
      search(query)
    }
};

//Show the progress bar and set the progress for started langages
function started (progress) {
    //Array of progress sorted by language array
    //var progress = [5 , 0] ; 
    for (var index = 0 ; index < progress.length ; index++) {
        if (progress[index] >= 0) {
            var id = languages[index] ;
            var percent = Math.round((progress[index] / lessons[index].length) * 100);
            next_lesson = lessons[index][progress[index]] ;
            document.getElementById(id + "-language").href = "languages/" + id ;
            document.getElementById(id + "-progress").style.width  = percent + '%';
            document.getElementById(id + "-next-lesson").innerHTML = percent + "% Complete <br> Next up - " + next_lesson;
            document.getElementById(id + "-not-started").classList.add("d-none");
            document.getElementById(id + "-started").classList.remove("d-none");
        }
    }
}

