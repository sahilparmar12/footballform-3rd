var usernamejson;
var firstnamejson;
var lastnamejson;
var codejson;
var phonejson;
var emailjson;
var teamjson;
var positjson;
var addressjson;
var pinjson;
var countryjson;
var statejson;
var cityjson;
var agejson;
var updatebtn;
//function to Fetch and repopulate data
function callAjax(){
	var flag=true;
httpRequest = new XMLHttpRequest();
if(!httpRequest){
	console.log("unable to create xmlhttp instance");
	return false;
}

var curUserName = document.getElementById("username").value;
if(curUserName == ''){
	document.getElementById("user_name_err").innerHTML="Enter username."
	return false;
}


httpRequest.open('GET',`add?uname=${curUserName}`);
httpRequest.send();

httpRequest.onreadystatechange= function(){
	document.getElementById("username").readOnly = true;
	document.getElementById("togglebtn").checked=true;
	document.getElementById("email").disabled= false;
	
	if(httpRequest.readyState === XMLHttpRequest.DONE ){		
		if (httpRequest.status === 200){			
			console.log(httpRequest.response);
			var a = JSON.parse(httpRequest.response);
			if(a[0].value == "true"){
			document.getElementById("submitbtn").style.visibility="hidden";
			document.getElementById("update").style.display = "block";
			document.getElementById("user_name_err").innerHTML=""
			if(document.getElementById("username").readOnly == true){
				document.getElementById("update").formAction="Doupdate";
			}
			
			
			usernamejson = a[0].uname;
			firstnamejson = a[0].fname
			lastnamejson = a[0].lname;
			codejson = a[0].code;
			phonejson = a[0].phone;
			emailjson = a[0].email;
			teamjson = a[0].team;
			positjson = a[0].position.split(",");
			
			addressjson = a[0].address;
			pinjson = a[0].pin;
			countryjson = a[0].country;
			statejson = a[0].state;
			cityjson = a[0].city;
			agejson = a[0].age;
			
			document.getElementById("firstName").value = a[0].fname;
			document.getElementById("lname").value = a[0].lname;
			document.getElementById("username").value = a[0].uname;
			document.getElementById("pno").value = a[0].phone;
			document.getElementById("email").value = a[0].email;
			document.getElementById("addresstextbox").value = a[0].address;
			document.getElementById("pin").value = a[0].pin;
			document.getElementById("agelist").value = a[0].age;
			
			
			document.getElementById("country").value = a[0].country;
			document.getElementById("state").disabled=false;
			$("#state").append("<option value='"+a[0].state+"'>"+a[0].state+"</option>");
			document.getElementById("state").value = a[0].state;
			document.getElementById("city").disabled=false;
			$("#city").append("<option value='"+a[0].city+"'>"+a[0].city+"</option>");
			document.getElementById("city").value = a[0].city;
			
			document.getElementById("ccode").value = a[0].code;
			
			
			let rates = document.getElementsByName('desiredteam');
			for(i=0;i<rates.length;i++){
				if(rates[i].value == a[0].team){
					rates[i].checked = true;
				}
			}
			
			var s = a[0].position.split(",");
			let pos = document.getElementsByName('pos');
			
			for(i=0;i<s.length-1;i++){
				for(j=0;j<pos.length;j++){
					if(pos[j].value == s[i]){
						pos[j].checked = true;
					}
			}
			}
			
			console.log(document.getElementById("firstName").value);
			}
			else{
				document.getElementById("user_name_err").innerHTML="Enter a valid username.";
				document.getElementById("username").readOnly = false;
				document.getElementById("togglebtn").checked=false;
				document.getElementById("email").disabled= true;
				document.getElementById("submitbtn").style.visibility="visible";
				document.getElementById("update").style.display = "none";
			}
			}
		}
		else{
			console.log("error");
		}
			
					
		}
		
		document.getElementById("firstName").oninput= function() {
				var regName = /^[a-zA-Z]+$/;
                var fname = document.getElementById('firstName').value;
                if(fname ===""){
                    document.getElementById("first_name_err").innerHTML="This field cant be left empty";
                    document.getElementById("firstName").style.borderColor="red";
                    firstname = false;
                    updatebtn=false;
                    canUpdate();
                    
                }else if(!regName.test(fname)){
                    document.getElementById("first_name_err").innerHTML="First name can't have spaces or numbers";
                    document.getElementById("firstName").style.borderColor="red";
                    firstname = false;
                    updatebtn=false;
						canUpdate();
                }else if(fname == firstnamejson){
						updatebtn=false;
						canUpdate();
					}
                
                else{
                    firstname = true;
                    updatebtn=true;
                    canSubmit();
                    canUpdate();
                    document.getElementById("first_name_err").innerHTML="";
                    document.getElementById("firstName").style.border="1px solid grey";
                    console.log(firstname);
                }
				
		}
		
		document.getElementById("lname").oninput= function() {
                var regName = /^[a-zA-Z\s]*$/;
                var lname = document.getElementById('lname').value;
                if(lname ===""){
                    document.getElementById("last_name_err").innerHTML="This field cant be left empty";
                    document.getElementById("lname").style.borderColor="red";
                    lastname = false;
                    updatebtn=false;
                    canUpdate();
                    
                }

                else if(!regName.test(lname)){
                    document.getElementById("last_name_err").innerHTML="Last name can't have numeric value";
                    document.getElementById("lname").style.borderColor="red";
                    lastname = false;
                    updatebtn=false;
                    canUpdate();
                    
                }
                else if(lname == lastnamejson){
						updatebtn=false;
						canUpdate();}
                else{
                    canSubmit();
                    updatebtn=true;
                    canUpdate();
                    document.getElementById("last_name_err").innerHTML="";
                    document.getElementById("lname").style.border="1px solid grey";
                    lastname = true;
                    console.log(lastname);
                }
            }
            
            document.getElementById("pno").oninput= function() {
                var regName = /^\d{10}$/;
                var no = document.getElementById('pno').value;
                if(no ===""){
                    document.getElementById("pno_err").innerHTML="This field cant be left empty";
                    document.getElementById("pno").style.borderColor="red";
                    phoneno = false;
                    updatebtn=false;
						canUpdate();
                    
                }
                else if(!regName.test(no)){
                    document.getElementById("pno_err").innerHTML="Phone No. must be a 10 digit numeric value";
                    document.getElementById("pno").style.borderColor="red";
                    phoneno = false;
                    updatebtn=false;
						canUpdate();
                    
                }
                else if(no == phonejson){
						updatebtn=false;
						canUpdate();
						document.getElementById("pno_err").innerHTML="";
                    	document.getElementById("pno").style.border="1px solid grey";
						}
                else{
					document.getElementById("pno_err").innerHTML="";
                    document.getElementById("pno").style.border="1px solid grey";
                    canSubmit();
                    updatebtn=true;
                    canUpdate();
                    
                    phoneno = true;
                    console.log(phoneno);
                }
            }
            
            
            document.getElementById("email").oninput= function() {
                var x = document.myform.email.value;
                var atpos = x.indexOf("@");
                var dotpos = x.lastIndexOf(".");
                if(x ===""){
                    document.getElementById("email_err").innerHTML="This field cant be left empty";
                    document.getElementById("email").style.borderColor="red";
                    emailid = false;
                    updatebtn=false;
						canUpdate();
                    
                }
                else if(atpos<1 || dotpos<atpos+2 || dotpos+2>= x.length){
                    document.getElementById("email_err").innerHTML="Enter a valid Email ID";
                    document.getElementById("email").style.borderColor="red";
                    emailid = false;
                    updatebtn=false;
						canUpdate();
                    
                }
                 else if(x == emailjson){
						updatebtn=false;
						canUpdate();}
                else{
                    canSubmit();
                    updatebtn=true;
                    canUpdate();
                    document.getElementById("email_err").innerHTML="";
                    document.getElementById("email").style.border="1px solid grey";
                    emailid = true;
                    console.log(emailid);
                }
            }
            
            
            document.getElementById("pin").oninput= function() {
                var regName = /^\d{6}$/;
                var pin = document.getElementById('pin').value;
                if (pin ===""){
                    document.getElementById("pin_err").innerHTML="";
                    document.getElementById("pin").style.borderColor="grey";
                    updatebtn=false;
						canUpdate();
                }
                else if(!regName.test(pin)){
                    document.getElementById("pin_err").innerHTML="pin must be of 6 digits";
                    document.getElementById("pin").style.borderColor="red";
                    updatebtn=false;
						canUpdate();
                }
                else if(pin == pinjson){
						updatebtn=false;
						canUpdate();
						document.getElementById("pin_err").innerHTML="";
                    document.getElementById("pin").style.border="1px solid grey";}
                else{
					updatebtn=true;
                    canSubmit();
                    canUpdate();
                    document.getElementById("pin_err").innerHTML="";
                    document.getElementById("pin").style.border="1px solid grey";
                }
            }
			
			document.getElementById("agelist").oninput = function(){
                if(document.getElementById("agelist").value == agejson){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
            }
            
            document.getElementById("addresstextbox").oninput = function(){
                if(document.getElementById("addresstextbox").value == addressjson){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
            }
            
           document.getElementById("desired_team").onclick=function(){
			if(document.querySelector('input[name="desiredteam"]:checked').value == teamjson){
				updatebtn=false;
						canUpdate();
			}
			else{
				updatebtn=true;
						canUpdate();
			}
			}
           
			document.getElementById("country").oninput = function(){
                
                 if(document.getElementById("country").value == countryjson){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
            }
            document.getElementById("state").oninput = function(){
                
                 if(document.getElementById("state").value == statejson){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
            }
            document.getElementById("city").oninput = function(){
                
                 if(document.getElementById("city").value == cityjson){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
            }
            
            document.getElementById("desired_position").onclick=function(){
				var ar=[];
				let poslist = document.getElementsByName("pos");
				
				for(i=0;i<poslist.length;i++){
					if(poslist[i].checked == true){
						for(j=0;j<positjson.length-1;j++){
							if(poslist[i].value == positjson[j]){
						updatebtn=false;
						canUpdate();}
				else{
					updatebtn=true;
						canUpdate();
				}
						}
						
					}
					
				}
				
				}
				            
	};
	
	
function canUpdate(){
				console.log("json val "+firstnamejson);
				if(updatebtn){
					document.getElementById("update").disabled=false;
				}
				else{
					document.getElementById("update").disabled=true;
				}
}

// function to Send json data fro insertion.

function sendDataJson(event){
	let rates = document.getElementsByName('pos');
	var position="";
			for(i=0;i<rates.length;i++){
				if(rates[i].checked==true){
					position=position+rates[i].value+",";
				}}
					
    
    var jsondata={
        "uname":document.getElementById("username").value,
        "fname":document.getElementById("firstName").value,
        "lname":document.getElementById("lname").value,
        "code":document.getElementById("ccode").value,
        "phone":document.getElementById("pno").value,
        "email":document.getElementById("email").value,
        "age":document.getElementById("agelist").value,
        "team":document.querySelector('input[name="desiredteam"]:checked').value,
        "position":position,
        "address":document.getElementById("addresstextbox").value,
        "pin":document.getElementById("pin").value,
        "country":document.getElementById("country").value ,
        "state":document.getElementById("state").value,
        "city":document.getElementById("city").value
        
    }

    var requestsend = new XMLHttpRequest();
    requestsend.open("POST","add");
    requestsend.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    requestsend.send(JSON.stringify(jsondata));
	requestsend.onreadystatechange= function(){
		if(requestsend.readyState === XMLHttpRequest.DONE ){		
			if (requestsend.status === 200){			
			console.log(requestsend.response);
			
			var a = JSON.parse(requestsend.response);
			console.log(a);
			if(a[0].value == "true"){
				document.getElementById("user_name_err").innerHTML="Username Exists."
				event.preventDefault();
			}
			else{
				document.getElementById("user_name_err").innerHTML=""
				var form = document.getElementById("registrationForm");
				alert("Your data has been submitted.");
				
				form.reset();
			}
			}
		
}
}
}

//Function to send data in json for updation.

function sendDataJsonForUpdate(){
	let rates = document.getElementsByName('pos');
	var position="";
			for(i=0;i<rates.length;i++){
				if(rates[i].checked==true){
					position=position+rates[i].value+",";
				}}
					
    
    var jsondata={
        "uname":document.getElementById("username").value,
        "fname":document.getElementById("firstName").value,
        "lname":document.getElementById("lname").value,
        "code":document.getElementById("ccode").value,
        "phone":document.getElementById("pno").value,
        "email":document.getElementById("email").value,
        "age":document.getElementById("agelist").value,
        "team":document.querySelector('input[name="desiredteam"]:checked').value,
        "position":position,
        "address":document.getElementById("addresstextbox").value,
        "pin":document.getElementById("pin").value,
        "country":document.getElementById("country").value ,
        "state":document.getElementById("state").value,
        "city":document.getElementById("city").value
        
    }

    var requestsend = new XMLHttpRequest();
    requestsend.open("PUT","add");
    requestsend.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    requestsend.send(JSON.stringify(jsondata));
    alert("Your data is updated");
    
}