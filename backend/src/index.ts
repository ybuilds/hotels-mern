import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import userRoutes from "../routes/users.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/users", userRoutes);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log("mongodb database connected successfully");
    app.listen(port, (err: any) => {
        if(err){
            console.log("something went wrong with the server");
            return;
        }
        console.log(`server started on port ${port}`);
    });
}).catch((err: any) => {
    console.log("something went wrong with the database");
});