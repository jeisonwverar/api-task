import  Express  from "express";
import   Morgan  from "morgan";

import setupDB from "./utils/database.js";
import router from "./routers/index.js";
//setup
const port= process.env.PORT||4040;
const app = Express();

//middleware
app.use(Morgan('dev'))
app.use('/api',router);


//routes


//conection mongo db
setupDB();



//server
app.listen(port,()=>{
    console.log( `listened from port: ${port}`)
  })
