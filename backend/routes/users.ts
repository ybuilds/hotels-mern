import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.ts";

const router = express.Router();

router.post("/register", async (req: express.Request, res: express.Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email
    });

    if(user)
      res.status(400).json({"message": "user already exists"});

    user = new User(req.body);
    await user.save();

    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn: "1d"});
    
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400*1000
    });

    res.sendStatus(201);
  } catch(err) {
    console.log(err);
    res.status(500).json({message: "something went wrong"});
  }
});

export default router;