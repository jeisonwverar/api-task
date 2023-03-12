import {Schema,model} from "mongoose";

const taskSchema= new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    complete:{
        type:Boolean
    },
    createAt:{
        type:Date,
        default:Date.now
    }
}, 
{
    timestamps:true
}

);

export default model('task',taskSchema);
