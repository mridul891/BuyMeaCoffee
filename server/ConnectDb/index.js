import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Wait Connecting to the server");
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_STRING}`
    );
    console.log(
      `\n MongoDb Connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb Connection error", error);
    process.exit(1);
  }
};

export default connectDb;
