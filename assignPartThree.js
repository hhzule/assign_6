

// 1. Create a signup form and display form data in your web


function submitfunc() {
  var emailiinp = document.getElementById("emailinput").value;
  var passwordinp = document.getElementById("passwordinput").value;
  var repeatpassinp = document.getElementById("repeatpassinput").value;
  var firstname = document.getElementById("firstnameinput").value;
  var lastname = document.getElementById("lastnameinput").value;
  
  if (passwordinp !== repeatpassinp) {
    alert("Your Passwords Do Not Match.");
  }else{
    document.write("First Name: " + firstname + "<br><br>");
    document.write("Last Name: " + lastname + "<br><br>");
    document.write("Fullname: " + firstname + " " + lastname + "<br><br>");
    document.write("Email: " + emailiinp + "<br><br>")
    document.write("Password: " + passwordinp + "<br><br>")
  }

}


// 2. Suppose in your webpage there is content area in which


function parg(e){
    var edittext = "Lorem ipsum dolor sit amet dolor ilet lorime aop hos hyteo sjaloe";
    document.getElementById("parg").innerHTML = edittext;
}


// 3. In previous assignment you have created a tabular data

function del(a){
    var row = a.parentNode.parentNode;
    row.parentNode.removeChild(row)
 
 }
 


 var name1 = prompt("name1");
 var name2 = prompt("name2");
 var name3 = prompt("name3");
 var name4 = prompt("name4");
 
 function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var edittexter = prompt("Enter value", val);
    e.getElementsByTagName("p").nodeValue = edittexter;
    
}


