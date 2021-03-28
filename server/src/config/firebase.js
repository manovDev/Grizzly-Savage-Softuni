
var admin = require("firebase-admin");

var serviceAccount = require("./grizzly-savage-firebase-adminsdk-qowzk-907964423a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
