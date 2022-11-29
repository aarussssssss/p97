
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCdhUVx8xqAPoI1rQIaCa9OssmH8MdyrMg",
      databaseURL:"https://kweet-ac5fd-default-rtdb.firebaseio.com",
      authDomain: "kweet-ac5fd.firebaseapp.com",
      projectId: "kweet-ac5fd",
      storageBucket: "kweet-ac5fd.appspot.com",
      messagingSenderId: "591511100858",
      appId: "1:591511100858:web:cbc6b617267b3b0237d183"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}
