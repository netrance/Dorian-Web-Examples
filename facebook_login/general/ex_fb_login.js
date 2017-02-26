// This is called with the results from from FB.getLoginStatus().
function respondLoginStatus(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        location.href = "ex_fb_profile.html"
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
    }
}

$(document).ready(function() {
    // Assign your own app ID to appId parameter.
    fbUtil.loadFacebookSdk('', respondLoginStatus);
});