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
            fs = name_prefixes[Math.floor(Math.random() * (name_prefixes.length - 1))] + first_name ;
        } else {
            fs = prefixes[Math.floor(Math.random() * (prefixes.length - 1))];
        }
        ss = compliments[Math.floor(Math.random() * (compliments.length - 1))];
        document.getElementById("name").innerHTML = fs;
        document.getElementById("compliment").innerHTML = ss;

    }
})

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

var languages = ['example' , 'example2']

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

document.getElementById('languages-search').onkeydown = function(e){
    if(e.keyCode == 13){
      query = document.getElementById("languages-search").value ;
      search(query)
    }
 };
