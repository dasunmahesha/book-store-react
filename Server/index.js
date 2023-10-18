import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURL } from "./config.js";
import booksrout from './routes/bookroutes.js'
import cors from 'cors';

const app = express();


app.use(express.json());

app.use(
  cors()
);

// allowing costom origin to acces

// app.use(
//   cors({
//     origin: 'http://localhost:3000/',
//     methods:['GET','POST','PUT','DELETE'] ,
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/',(request,response )=>{
    console.log(request);
    return response.status(234).send("working fine");
})//make http requestuset

app.use("/books", booksrout);

mongoose
  .connect(MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connectded to mongodb");
    app.listen(PORT, () => {
      console.log(`working fine port number : ${PORT}`);
    }); //set port
  })
  .catch((error) => {
    console.log(error);
  });