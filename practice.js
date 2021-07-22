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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"

    });
}
