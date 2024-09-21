import express from "express";
import Category from "../models/Category";
const categoriesRouter = express.Router();



categoriesRouter.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        return res.send(categories);
    } catch(e) {
        return res.sendStatus(500);
    }
});



categoriesRouter.post("/", async (req, res) => {
    const categoryData = {
        title: req.body.title,
        description: req.body.description,
    };

    const category = new Category(categoryData);
    try {
        await category.save();
        return res.send(category);
    } catch(e) {
        return res.status(400).send(e);
    }
});
export default categoriesRouter;