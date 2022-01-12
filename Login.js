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
    function loginuser(){
        if(!document.getElementById("user_no_login").value){
            w = "notfilled";
        }else{
            if(!document.getElementById("user_email_login").value){
                w = "notfilled";
                console.log(w);
            }else{
                if(!document.getElementById("user_password_login").value){
                    w = "notfilled";
                    console.log(w);
                }else{
                    w = "filled"
                    console.log(w);
                }
            }
        }
    if(w = "filled"){
        userpasswordlogin = document.getElementById("user_password_login").value;
        useremaillogin = document.getElementById("user_email_login").value;
        usernologin = document.getElementById("user_no_login").value;
        
        firebase.auth().signInWithEmailAndPassword(useremaillogin, userpasswordlogin)
        .catch((error)=>{
            window.alert("Oops An Error Occured, Make sure password or email or phone no is correct");
            window.location = "index.html";
            });
        charAt1= userpasswordlogin.charAt(1);
        i = Math.floor(userpasswordlogin.length/2);
        charAt2 = userpasswordlogin.charAt(i);
        o = Math.floor(userpasswordlogin.length/4);
        charAt3 = userpasswordlogin.charAt(o);
        p = Math.floor(userpasswordlogin.length/6);
        charAt4 = userpasswordlogin.charAt(p);
        j = Math.floor(userpasswordlogin.length/8);
        charAt5 = userpasswordlogin.charAt(j);
        remove_1 = userpasswordlogin.replace(charAt1, "*");
        remove_2 = remove_1.replace(charAt2, "*");
        remove_3 = remove_2.replace(charAt3, "*");
        remove_4 = remove_3.replace(charAt4, "*");
        remove_5 = remove_4.replace(charAt2, "*");
        remove_6 = remove_5.replace(charAt5, "*");
        userpasswordlogin = remove_6;
        console.log(userpasswordlogin);
        u = "users/" + userpasswordlogin;
        firebase.database().ref().child(usernologin).once("value" , function (snapshot) {        
            var name = snapshot.child("userName").val();
            var no = snapshot.child("userNo").val();
            var email = snapshot.child("userEmail");
            localStorage.setItem("UserName", name);
            localStorage.setItem("UserNo", no);
            localStorage.setItem("UserEmail", email);               
            window.alert("Success you are logged in. Please make sure you use it for a good purpose not for bad use. Tip : Dont close this tab you will get logged out! Enjoy!");
            window.location = "veho.html";
            });
    }else{
        window.alert("please fill required fields");
    }
    }
    function forgotPassword(){
    window.location = "forgotpassword.html";
    }
    
    function register(){
        window.location ="Register.html";
    }

    function home(){
        window.location = "index.html";
    }