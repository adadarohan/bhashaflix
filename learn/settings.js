function sign_out () {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        window.location.href = "/";
      }, function(error) {
          console.error('Sign Out Error', error);
      });

}