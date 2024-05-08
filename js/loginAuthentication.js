
var loginBtn = document.getElementById("login_btn"); 

loginBtn.addEventListener("click", function() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (username === "admin" && password === "admin123") {
        window.location.replace("admin.html");
    } else {
        window.location.replace("about.html");
    }
});
