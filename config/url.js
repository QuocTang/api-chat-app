let URL = "";
let environment = "proc"

if(environment === "proc"){
  URL = "https://messenger-app-io.netlify.app";
}else if(environment === "local"){
  URL = "http://localhost:3000";
}

module.exports = { URL };
