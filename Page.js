// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8QPEf0uPLI8RnXdWJYPA25gRaH7IXsPQ",
    authDomain: "veho-a94aa.firebaseapp.com",
    databaseURL: "https://veho-a94aa-default-rtdb.firebaseio.com",
    projectId: "veho-a94aa",
    storageBucket: "veho-a94aa.appspot.com",
    messagingSenderId: "814183967929",
    appId: "1:814183967929:web:0aecff154beef7e9fe7f68"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function submit(){
      pnr = document.getElementById("pnr").value;
      vehi = document.getElementById("vehi").value;
      veh = vehi.toLowerCase();
    firebase.database().ref().child("/"+veh+"/"+pnr).once("value" , function (snapshot) {
        vehi = document.getElementById("vehi").value;  
        veh = vehi.toLowerCase();        
        var name = snapshot.child("nameof"+veh).val();
        var date = snapshot.child("date").val();
        var cost = snapshot.child("cost").val();
        var starttime = snapshot.child("starttime").val();
        localStorage.setItem("Name", name);
        localStorage.setItem("StartTime", starttime);
        localStorage.setItem("Date", date);
        localStorage.setItem("Cost", cost);
        console.log(name+"     "+ date+"     " +cost+"     "+starttime+"     ")               
        window.alert("Please Pay.");
        window.location = "Payment.html";
      });
  }