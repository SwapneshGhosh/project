var firebaseConfig = {
      apiKey: "AIzaSyCarncXTmdbC8K60r0Ctxy43iLDUef3uEY",
      authDomain: "kwitter-8e443.firebaseapp.com",
      databaseURL: "https://kwitter-8e443-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e443",
      storageBucket: "kwitter-8e443.appspot.com",
      messagingSenderId: "740247853699",
      appId: "1:740247853699:web:833caf3a07fab23ef0d9b6",
      measurementId: "${config.measurementId}"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";      
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";      
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}