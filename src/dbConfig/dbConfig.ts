import mongoose from "mongoose";

const dbConfig = ()=>{
   try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
    })
    connection.on('error',(err)=>{
        console.log('MongoDB connection error: ',err);
        process.exit();
    })
   } catch (error) {
    console.log("Error connecting to MongoDB: ",error);
    console.log("Error in dbConfig.ts");
   }

}

export default dbConfig;
