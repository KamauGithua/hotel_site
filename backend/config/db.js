import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kamau:kamau99Githua@cluster0.p1rfw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}