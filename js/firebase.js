
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAK5LoIJ8vTZiICpGI4VqpLdcl4qdMQTlQ",
    authDomain: "pagina-glass-mate.firebaseapp.com",
    databaseURL: "https://pagina-glass-mate.firebaseio.com",
    projectId: "pagina-glass-mate",
    storageBucket: "pagina-glass-mate.appspot.com",
    messagingSenderId: "791142590036",
    appId: "1:791142590036:web:308b33b82aef3f9d736fc1",
    measurementId: "G-JS6JEG7ET7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  


  var database = firebase.database();

  var starCountRef = firebase.database().ref().child('products');
starCountRef.on('value', function(snapshot) {
console.log("DATA....", snapshot.val())
});


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAK5LoIJ8vTZiICpGI4VqpLdcl4qdMQTlQ",
    authDomain: "pagina-glass-mate.firebaseapp.com",
    databaseURL: "https://pagina-glass-mate.firebaseio.com",
    projectId: "pagina-glass-mate",
    storageBucket: "pagina-glass-mate.appspot.com",
    messagingSenderId: "791142590036",
    appId: "1:791142590036:web:308b33b82aef3f9d736fc1",
    measurementId: "G-JS6JEG7ET7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log("asdfasfasdfasd222222f",firebase)

  // Get a reference to the database service
var database = firebase.database();



function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData("1", "asfdafds", "ASDFAsd", "asfasd")

var refData = database.ref().child("games");


refData.on('value', function(snapshot) {
  console.log("DATA....", snapshot.val())
});