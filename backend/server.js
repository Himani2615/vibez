import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToDb from "./db/connectToMongoDB.js";

const app =express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res) => {
//   res.send("Hello ");
// })

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.listen(PORT,() => {
  connectToDb();
  console.log(`Server is listening on port ${PORT}`)
  });