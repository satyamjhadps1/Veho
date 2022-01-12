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
  
    
    //Set Upped Firebase above
    var welcome = document.getElementById("hero");
    function registeruser(){
        if(!document.getElementById("user_no_register").value){
            r = "notfilled"
        }
        if(!document.getElementById("user_name_register").value){
            r = "notfilled"; 
         }else{
             if(!document.getElementById("user_email_register").value){
                 r = "notfilled";
             }else{
                 if(!document.getElementById("user_password_register").value){
                     r = "notfilled";
                 }else{
                     r = "filled"
                 }
             }
         }
    //checking if input value is null
    if(r = "filled"){
    usernoregister = document.getElementById("user_no_register").value;
    usernameregister = document.getElementById("user_name_register").value;
    userpasswordregister = document.getElementById("user_password_register").value;
    useremailregister = document.getElementById("user_email_register").value;
    firebase.auth().createUserWithEmailAndPassword(useremailregister, userpasswordregister)
    .catch((error) => {
    document.getElementById("error").innerHTML = error.message;
    window.alert("Oops An Error Occured Please Try Again");
    });
    charAt1= usernameregister.charAt(1);
    l = Math.floor(userpasswordregister.length/2);
    charAt2 = userpasswordregister.charAt(l);
    c = Math.floor(userpasswordregister.length/4);
    charAt3 = userpasswordregister.charAt(c);
    d = Math.floor(userpasswordregister.length/6);
    charAt4 = userpasswordregister.charAt(d);
    e = Math.floor(userpasswordregister.length/8);
    charAt5 = userpasswordregister.charAt(e);
    remove_1 = userpasswordregister.replace(charAt1, "*");
    remove_2 = remove_1.replace(charAt2, "*");
    remove_3 = remove_2.replace(charAt3, "*");
    remove_4 = remove_3.replace(charAt4, "*");
    remove_5 = remove_4.replace(charAt2, "*");
    remove_6 = remove_5.replace(charAt5, "*");
    userpasswordregister = remove_6;
    //sending data to firebase
    firebase.database().ref("/").child(usernoregister).update({
    userName : usernameregister,
    userPassword : userpasswordregister,
    userEmail : useremailregister,
    userNo : usernoregister
    });
    window.alert("Registered Successfully");
    }else{
        window.alert('Invalid!');
    }
    }

    function home(){
        window.location = "index.html";
    }
    function login(){
        window.location = "Login.html";
    }