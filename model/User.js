import mongoose  from "mongoose";


const UserS = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})


// model 

const User=mongoose.model('user',UserS);


export default User;





// 4 string 
// _id 