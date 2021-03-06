var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
    
        if (authResult.additionalUserInfo.isNewUser == true){
            analytics.logEvent('new_user');

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
    signInSuccessUrl: 'https://bhashaflix.web.app/learn',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '../legal/privacy-policy.html'
};



ui.start('#firebaseui-auth-container', uiConfig);



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location = 'index.html';
    }
})
