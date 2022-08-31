let URL = "";
let environment = "proc"

if(environment === "proc"){
  URL = "https://socket-io-mernstack-chat-app.netlify.app";
}else if(environment === "local"){
  URL = "http://localhost:3000";
}

module.exports = { URL };
