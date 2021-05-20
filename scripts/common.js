document.getElementById("payNow").disabled = true;
function check(){
    var user = document.myform.username.value;
    var pass = document.myform.password.value;

    if(user == "admin" && pass == "admin")
    {
    alert("successfully loggedin")
    document.getElementById("buttonlogin").innerHTML = "Logout";
    document.getElementById("payNow").disabled = false;
}else{
    alert("Error Password or Username")
    }
}