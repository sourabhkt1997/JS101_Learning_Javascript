//Given stored username and password and input username and password, Print if the user can login or not.

//stored user name and password in database
let database_user_name="tiger@gmail.com";
let database_password="abc123";

//for login
let user_name="tiger@gmail.com";
let password="abc123";

if( database_user_name==user_name){
  
  if(database_password==password){
    
    console.log("log in successfull");
  }else{
    console.log("wrong password");
  }
}else{
  console.log("wrong credentials");
}


