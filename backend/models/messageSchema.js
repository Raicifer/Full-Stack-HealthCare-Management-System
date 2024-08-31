import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minLength:[3,"First name must contain at least 3 Characters!"],
  },
  lastName:{
    type:String,
    required:true,
    minLength:[3,"Last name must contain at least 3 Characters!"],
  },
  email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"Please Provide A Valid Email!"],
  },
  phone:{
    type:String,
    required:true,
    minLength:[11,"Phone Number Must Contain 11 Digit!"],
    maxLength:[11,"Phone Number Must Contain 11 Digit!"],
  },
  message:{
    type:String,
    required:true,
    minLength:[10,"Message Must Contain 10 Characters!"],
  },
});

export const Message=mongoose.model("Message",messageSchema);