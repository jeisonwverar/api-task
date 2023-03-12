import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const setupDB= async()=>{
try {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('conection to Mongo db'))
    .catch((err)=>console.log(`Error mongo db ${err}`))
} catch (error) {
    console.log(error);
    
}
}

export default setupDB;