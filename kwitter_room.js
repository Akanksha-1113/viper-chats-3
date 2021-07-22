
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqTLlv3BDyMbYRJaHeNDFC_n54mbJRlic",
    authDomain: "viper-chats.firebaseapp.com",
    databaseURL: "https://viper-chats-default-rtdb.firebaseio.com",
    projectId: "viper-chats",
    storageBucket: "viper-chats.appspot.com",
    messagingSenderId: "172361688731",
    appId: "1:172361688731:web:ae754cac7e2bbc5592083e",
    measurementId: "G-7STY1KEZ7K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
          Room_name = document.getElementById("room_name").nodeValue;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
    
        });

        localStorage.setItem("room_name" , room_name);

        window.location = "kwitter_page.Html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}