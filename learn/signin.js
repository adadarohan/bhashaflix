var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        var user = firebase.auth().currentUser;
        var uid = user.uid;
        if (authResult.additionalUserInfo.isNewUser == true){
            console.log(uid);
            analytics.logEvent('new_user');
            db.collection("user-progress").doc(uid).set({
                example : 0,
                example2: 0
            })

        } else {
            analytics.logEvent('login');
        }
        
        return true;
        },

        uiShown: function() {
        // The widget is rendered.

        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};



ui.start('#firebaseui-auth-container', uiConfig);


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = 'index.html';
    }
})