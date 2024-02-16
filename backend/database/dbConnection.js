
import mongoose from 'mongoose';

export const dbConnection= ()=> {
    mongoose.connect(process.env.MONGO_URI,{
        dbName :"RESTAURANT"
    }).then(()=>{
        console.log("Connected to database suceesfully!!!");
    }).catch((err)=>{
        console.log(`Some error occured while connedting ot database! ${err}`);
    })

}

// export default dbConnection;