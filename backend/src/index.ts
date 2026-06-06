import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("hotel/api/test", async (req: express.Request, res: express.Response) => {
    res.json({"message": "okay"});
});

const port = process.env.PORT || 8080;

app.listen(port, (err: any) => {
    if(err)
        throw err;
    console.log("Server started on port", port);
});