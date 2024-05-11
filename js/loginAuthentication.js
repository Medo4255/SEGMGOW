
var loginBtn = document.getElementById("login_btn"); 

let adminNames = ["admin"];
let adminPasswords = ["admin123"];

let donorNames = ["hamdy","aboelela","hegawy","hema","sameh"];
let donorPasswords = ["hamdy123","aboelela123","hegawy123","hema123","sameh123"];

let orgNames = ["org1","org2","org3"];
let orgPasswords = ["organization123","organization234","organization345"];

loginBtn.addEventListener("click", function() {
    var username = document.getElementsById("username")[0].value;
    var password = document.getElementsById("password")[0].value;

    for(let i = 0; i<adminNames.length;i++){
        if(username == adminNames[i] && password == adminPasswords[i]){
            window.location.replace("admin.html");
        }
    }

    for(let i = 0; i<donorNames.length;i++){
        if(username == donorNames[i] && password == donorPasswords[i]){
            window.location.replace("donor.html");
        }
    }

    for(let i = 0; i<orgNames.length;i++){
        if(username == orgNames[i] && password == orgPasswords[i]){
            window.location.replace("org.html");
        }
    }
});
