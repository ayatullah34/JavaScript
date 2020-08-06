var users = [
    {email:"abc@gmail.com",password:"12345"},
    {email:"def@gmail.com",password:"12345"}
]

var twits= [
    {email:"abc@gmail.com",twit:"hava güneşli"},
    {email:"abc@gmail.com",twit:"hava güneşli 2"},
    {email:"def@gmail.com",twit:"hava kapalı "}
]

var email=prompt("email?")

var password=prompt("password?")

function haveUsers(email,password){
    for(i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
        
            return true;
        }     
    }
    return false
}


function login(){
    if( haveUsers(email,password))  {
        
        console.log(twits);

    }
    else{
        console.log("wrong email or password!!");
    }
}

login(email,password);

twits.forEach(function(t){
    console.log(t);
})