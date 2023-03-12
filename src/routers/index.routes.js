import  Express, { json }  from "express";
import task from "../models/task.model.js"

const taskRrouter=Express.Router();
taskRrouter.use(Express.json('application/json'));
taskRrouter.use(Express.urlencoded({extended:false}));


taskRrouter.get('/task',async (req,res)=>{
    
    const Tasks = await task.find().sort({
        createAt:'desc'})
    
     res.status(200).send(Tasks)
})
taskRrouter.post('/task',(req,res)=>{
 //post:crear utilizamos los requerimientos
 try {
    let newTask = new task({
        title:req.body.title,
        description:req.body.description,
        complete:undefined||false,
    
     })
    
         newTask.save()
          .then(data=>res.json(data))
          .catch(err=>res.json({message:err}))
 } catch (error) {
    console.log(error)
 }
 
});
taskRrouter.get('/task/:id',async(req,res)=>{
    const Tasks =await task.findOne()
    res.status(200).send(Tasks)

    res
});
taskRrouter.put('/task/:id',async (req,res)=>{
    //capturar el id
    const {id}= req.body;
    //nuevos datos
    const {title,description,complete}=req.body;
    //metodo cambiar
    //primer objeto captura del id
    //segundo obejeto $set con para metros del objeto
    await task.updateOne({},{$set:{title,description,complete}})
    .then(data=>json(data))
    .catch(err=>res.json({message:err}))
    

   
});
taskRrouter.delete('/task/:id', (req,res)=>{
    //capturar el id
   try {
        const {id}=req.params; 
         task.deleteOne({_id:id})
        .then(data=>res.json(data))
        .catch((err)=>console.log(err))
   } catch (error) {
       console.log({message:error})
   }
    
    
       
});





export default taskRrouter;