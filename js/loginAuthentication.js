var loginBtn = document.getElementById("login-form"); 
    
  let adminNames = ["admin"];
  let adminPasswords = ["admin123"];
  
  let donorNames = ["hamdy","aboelela","hegawy","hema","sameh"];
  let donorPasswords = ["hamdy123","aboelela123","hegawy123","hema123","sameh123"];
  
  let orgNames = ["org1","org2","org3"];
  let orgPasswords = ["organization123","organization234","organization345"];
  
  loginBtn.addEventListener("submit", function(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      for(let i = 0; i<adminNames.length;i++){
          if(username == adminNames[i] && password == adminPasswords[i]){
            window.location.replace("../html/admin.html");
          }
      }
  
      for(let i = 0; i<donorNames.length;i++){
          if(username == donorNames[i] && password == donorPasswords[i]){
            window.location.replace("../html/donor.html");
          }
      }
  
      for(let i = 0; i<orgNames.length;i++){
          if(username == orgNames[i] && password == orgPasswords[i]){
            window.location.replace("../html/org.html");
          }
      }
  });