//write a express boilerplate code 
//also write a express.json() middleware

const express= require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const cors = require('cors');
const {todo} = require("./db")
const port  = 3000;
app.use(express.json());
app.use(cors());
app.post('/todos',  async (req,res)=>{
   const createpaylod = req.body;
   const parsepayload = createTodo.safeParse(createpaylod);
   if(!parsepayload.success){
    res.status(411).json({
        msg:" you have send the wrong inputs",
    })
    return ;
   }
   //put in into the mongodb
   await todo.create({
    title: createpaylod.title,
    description : createpaylod.description
   })
   res.json({
    msg: "Todo created"
   })

 })


 app.get('/todo', async (req, res)=>{
    const todos=  await todo.find({});  //if it is not a async function then todos gives a promise 
    res.json({
        todos
    })

 })
 app.put('/completed',async (req, res)=>{
    const updatepayload = req.body;
    const id = updateTodo.safeParse(updatepayload);
    if(!id.success){
        res.status(411).json({
            msg:" you have sent the wrong inputs",
        })
        return ;
    }
    await todo.update({
        _id : req.body.id},
        {
        completed: true
    })
    res.json({
        msg:" todo marks as completed"
    })
 })
 
 app.listen(port ,(res , req)=>{
    console.log("server started at the 3000 port");
 });
