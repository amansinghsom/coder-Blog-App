import mongoose from 'mongoose';

export default (async()=>{
    const {connection}=await mongoose.connect('mongodb://localhost:27017/graphDb');
    if(connection.readyState==1){
        console.log('db is connected');
    }else{
        console.log('db is connection')
    }
})()



