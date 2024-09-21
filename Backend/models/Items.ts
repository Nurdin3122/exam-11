import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const ItemsSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    image: {
        type:String,
    },
    seller:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    price:{
            type: Number,
            required: true,
    }
});

const Item = mongoose.model("Item",ItemsSchema);

export default Item