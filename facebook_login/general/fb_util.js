/**
  * Util class to use Facebook API
  * @namespace fbUtil
  */
var fbUtil = {

    /**
      * Loads Facebook SDK to call Facebook APIs.
      * @memberof fbUtil
      * @method loadFacebookSdk
      * @param appId - Application ID. If you want to create a new app ID, refer to https://developers.facebook.com/docs/apps/register.
      * @param actAfterLoading - Callback function to work after loading Facebook SDK
      */
     loadFacebookSdk: function(appId, actAfterLoading) {
        var js;
        var fjs = document.getElementsByTagName('script')[0];
        
        if (document.getElementById('facebook-jssdk')) {
            FB.getLoginStatus(actAfterLoading);
            return;
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId      : appId,
                cookie     : true,  // enable cookies to allow the server to access 
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
            });

            FB.getLoginStatus(actAfterLoading);
        };
        
        js = document.createElement('script');
        js.id = 'facebook-jssdk';
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);    // fbAsyncInit will be called.
    },

    /**
      * Reads the user profile. 
      * @param actAfterGettingUserProfile - Callback function to work after reading the profile
      */
    getUserProfile: function (actAfterGettingUserProfile) {
        // Refer to https://developers.facebook.com/docs/graph-api/reference/user
        // to decide which data of the profile to read
        FB.api('/me?fields=id,name,email,permissions', actAfterGettingUserProfile);
    }
};
