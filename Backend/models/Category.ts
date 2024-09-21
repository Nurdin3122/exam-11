import mongoose from 'mongoose';
const Schema = mongoose.Schema



const CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: String,
});



const Category = mongoose.model('Category', CategorySchema);

export default Category;