import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("Please add URI for connection!");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    return await mongoose.connect("mongodb+srv://spaceusindia:Kg4ci6loASBd7srP@spaceuscluster.fvht9kt.mongodb.net/");

  } catch (error) {
    console.log(error);
  }
};