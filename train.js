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
function search(){
    var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var  ruc_random = Math.floor(Math.random()*9);
  var  ruc_random = Math.floor(Math.random()*9);
   var ruc1 = ruc_array[ruc_random];
   var  ruc_random = Math.floor(Math.random()*9);
   var ruc2 = ruc_array[ruc_random];
   var  ruc_random = Math.floor(Math.random()*9);
   var ruc3 = ruc_array[ruc_random];
   var  ruc_random = Math.floor(Math.random()*9);
   var  ruc4 = ruc_array[ruc_random];
   var  ruc_random = Math.floor(Math.random()*9);
   var ruc5 = ruc_array[ruc_random];
  var  ruc_random = Math.floor(Math.random()*9);
   var ruc6 = ruc_array[ruc_random];
  var  ruc_random = Math.floor(Math.random()*9);
   var ruc7 = ruc_array[ruc_random];
   var  ruc_random = Math.floor(Math.random()*9);
   var ruc8 = ruc_array[ruc_random];
 var  ruc_random = Math.floor(Math.random()*9);
   var ruc9 = ruc_array[ruc_random];
  var  ruc_random = Math.floor(Math.random()*9);
   var ruc10 = ruc_array[ruc_random];
   var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

   console.log(nametrainrandom);
   var date = document.getElementById("date").value;
   var starttime_random = Math.floor(Math.random()*12);
   var stations = Math.floor(Math.random()*70);
   var starttime = document.getElementById("time").value;
   if(stations >= 30){
    var days_random = Math.floor(Math.random()*5);
    var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
    var days = days_array[days_random];
   }else{
    var days_random = Math.floor(Math.random()*5);
    var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
    var days = days_array[days_random];
   }
   from = document.getElementById("from").value;
   to = document.getElementById("to").value;
   if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
var div_name = "<br><h5 class='point-imp'>Some Results From Your Search:</h5><br><div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = result;
firebase.database().ref("train").child(pnr).update({
    nameoftrain : name_of_train,
    pnr : pnr,
    date : date,
    starttime : starttime,
    cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
var  ruc_array  = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc_random = Math.floor(Math.random()*9);
var ruc1 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc2 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc3 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var  ruc4 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc5 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc6 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc7 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc8 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc9 = ruc_array[ruc_random];
var  ruc_random = Math.floor(Math.random()*9);
var ruc10 = ruc_array[ruc_random];
var pnr = ruc1 + ruc2 + ruc3 + ruc4 + ruc5 + ruc6 + ruc7 + ruc8 + ruc9 + ruc10;

console.log(nametrainrandom);
var date = document.getElementById("date").value;
var starttime_random = Math.floor(Math.random()*12);
var stations = Math.floor(Math.random()*70);
var starttime_array = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
var starttime = starttime_array[starttime_random];
if(stations >= 30){
var days_random = Math.floor(Math.random()*5);
var days_array = ["3 days", "3.5 days", "3.8 days", "4 days", "5 days"];
var days = days_array[days_random];
}else{
var days_random = Math.floor(Math.random()*5);
var days_array = ["1 days", "1.5 days", "1.8 days", "1.9 days", "2.3 days"];
var days = days_array[days_random];
}
from = document.getElementById("from").value;
to = document.getElementById("to").value;
var nametrain = ["Rajdhani Express", "Sampark Kranti", "Shatabdi Express", "Duronto Express", "Humsafar Express", "Jan Shatabdi Express", "Garib Rath Express", "Kavi Guru Express", "Vande Bharat Express", "Tejas Express", "Gatiman Express", "Vivek Express"];
var nametrainrandom = Math.floor(Math.random()*12);
var name_of_train = nametrain[nametrainrandom];
if(name_of_train = "Rajdhani Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹3200/person", "₹2400/person", "₹2400/person", "₹3600/person", "₹2400/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    if(name_of_train = "Shatabdi Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2400/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹1850/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Duronto Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹2400/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random)
    }else{
    if(name_of_train = "Humsafar Express"){
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹1850/person", "₹3650/person", "₹2400/person", "₹2400/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);    console.log(cost_array);
    console.log(cost_random)
    }else{
    var cost_random = Math.floor(Math.random()*5);
    var cost_array = ["₹2550/person", "₹1850/person", "₹2400/person", "₹1850/person", "₹3200/person"];
    var cost = cost_array[cost_random];
    console.log(cost);
    console.log(cost_array);
    console.log(cost_random);
    }
    }
    }
    }
var div_name = "<div class='result form-control' onclick ='navigate()'><div style='display: inline; padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;'>Name: "+ name_of_train +"</div>";
var div_place = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From:&nbsp;&nbsp;"+ from +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;" + to +"</div>";
var div_pnr = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Pnr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pnr+"</div>";    
var div_date = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>From Date :&nbsp;&nbsp; "+date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
var div_starttime = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Starting&nbsp;Time: &nbsp;&nbsp;"+starttime+"</div>";
var div_cost = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Cost-"+cost+"</div></div><hr>";
var div_days = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>Journey- "+days+"</div>";
var div_stations = "<div style='display: inline;padding-top: 8px;padding-bottom: 8px; padding-left: 5px;padding-right: 5px;border-left: 2px solid #e35700;'>No.Of.Stations- "+stations+"</div>";
var result = div_name + div_place + div_pnr + div_date + div_days + div_starttime + div_stations + div_cost;
var already = document.getElementById("output").innerHTML;
document.getElementById("output").innerHTML = already + result;
firebase.database().ref("train").child(pnr).update({
nameoftrain : name_of_train,
pnr : pnr,
date : date,
starttime : starttime,
cost : cost
});
}

function navigate(){
    window.location = "page.html";
}