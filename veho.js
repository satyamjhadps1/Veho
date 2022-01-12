function profile(){
    document.getElementById("divhidden").style.display = "inline";
  }
  function loaded(){
      username = localStorage.getItem("UserName");
      useremail = localStorage.getItem("UserEmail");
      userno = localStorage.getItem("UserNo");
      document.getElementById("name").innerHTML = "Name - &nbsp;&nbsp;&nbsp;&nbsp;" + username;
      document.getElementById("welcomeuser").innerHTML = "Welcome - " +username+" to Veho";
      document.getElementById("phoneno").innerHTML = "No - &nbsp;&nbsp;&nbsp;&nbsp;" + userno;  
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    
  }
  function closeprofile(){
    document.getElementById("divhidden").style.display = "none";
  }
  function train(){
      window.location = "train.html";
  }
  function ship(){
    window.location = "ship.html";
}
function plane(){
    window.location = "plain.html";
}
function hotel(){
    window.location = "hotel.html";
}
function visit(){
    window.location = "visit.html";
}
