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

function login(){
    if(  (email == users[0].email && password == users[0].password)   ||  (email == users[1].email && password == users[1].password)  ){
        
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