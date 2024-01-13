import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConfig = async ():Promise<void>  => {

   try {
      let conn:typeof mongoose = await mongoose.connect(`${process.env.DB_CLUSTER}`);

   if(conn) {
      console.log('db is connected');
   }else {
      process.exit(1);
   }
   } catch (error) {
      console.log(error);
   }

}

export default dbConfig;