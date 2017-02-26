function respondLoginStatus(response) {
    if (response.status === 'connected') {
        fbUtil.getUserProfile(function(response) {
            console.log("Current user profile: " + JSON.stringify(response));

            refreshGreeting(response.name, response.email);
        });
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
    }
}

function refreshGreeting(name, email) {
    $("#id_div_greeting").html("Hello, " + name + " (" + email  + ").");
}

function goToFBLogin() {
    location.href = "ex_fb_login.html";
}

$(document).ready(function() {
    // Assign your own app ID to appId parameter.
    fbUtil.loadFacebookSdk('', respondLoginStatus);
});