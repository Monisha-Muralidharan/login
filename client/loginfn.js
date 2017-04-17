function loginFunction()
{
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;	
if(username && password) 
{
	var xhttp = new XMLHttpRequest();
	var link="http://localhost:9001/returnval/";
	var info = "username="+username+"&password="+password;
	xhttp.open("POST",link,true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function() {
	if(xhttp.readyState === 4 && xhttp.status === 200) {
		string = xhttp.responseText;
		console.log(string);
		document.getElementById('userdetails').innerText=string;
	}
	}
	xhttp.send(info);
}
else {
	alert('Please enter correct information');
	}
}