import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally add other options like:
            // useCreateIndex: true, 
            // useFindAndModify: false
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Optionally add retry logic here
    }
};

export default connectDB;
