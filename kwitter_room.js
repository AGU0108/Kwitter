//COLOCA LAS CREDENCIALES DE FIREBASE
var   firebaseConfig = {
  apiKey: "AIzaSyB7iCPQbhd5AbDKBogPc_jvQc6maIAV0yY",
  authDomain: "kwitter-901ee.firebaseapp.com",
  databaseURL: "https://kwitter-901ee-default-rtdb.firebaseio.com",
  projectId: "kwitter-901ee",
  storageBucket: "kwitter-901ee.appspot.com",
  messagingSenderId: "89447313676",
  appId: "1:89447313676:web:787ecad8638fb95347d929"
};




    
   
   firebase.initializeApp(firebaseConfig);




   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }



function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

   

      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


      });});}



getRoom();




function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


