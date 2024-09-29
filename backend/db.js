// {
//     title:string,
//     description:string,
//     completed: boolean
// }
const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://shivanigiri36:Shivani%4021@cluster0.wylfoft.mongodb.net/?appName=Cluster0");
const Todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todo= mongoose.model('todos', Todoschema);
module.exports={
    todo
}


