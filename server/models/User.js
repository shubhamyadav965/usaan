import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        
        accountType:{
            type:String,
            required:true,
            enum:["doctor","health-officer","patient","admin"],
        },
       
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        
        image:{
            type:String,
            required:true,
        },
        
       
    },
	{ 
        timestamps: true 
    }
);


const User = mongoose.model("User",userSchema);

export default User;