function login(){
    var name=document.log.uname.value;
    var password=document.log.pwd.value;
    var confirm_password=document.log.cpwd.value;
    var letters= /^[A-Za-z]+$/;
    var pwd=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if(name==""){
        alert("enter user name");
        return false;
    }
    else if(!letters.test(name)){
        alert("user name only contain albhabets");
        return false;
    }
    else if(password==null){
        alert("enter password");
        return false;
    }
    else if(!pwd.test(password)){
        alert("password contain lowercase,uppercase,number amd special character");
        return false;
    }
    else if(confirm_password==null){
        alert("reenter password");
        return false;
    }
    else if(confirm_password!=password){
        alert("password should not match"); 
        return false;  
    }
    alert("thank you! you have login sucessfully");
    
   
}