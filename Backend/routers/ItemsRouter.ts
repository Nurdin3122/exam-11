import express from "express";
import auth, {RequestWithUser} from "../middleWare/auth";
import Item from "../models/Items";
import {imagesUpload} from "../multer";

export const itemsRouter = express.Router();

itemsRouter.post("/",auth,imagesUpload.single('image'),async (req,res) => {
    if (!req.body.title || !req.body.price || !req.body.description) {
        return res.status(400).send({error: 'All fields are required'});
    }
    const user = (req as RequestWithUser).user;

    if (!user) {
        return res.status(401).send({ error: 'User not found' });
    }


    const item = new Item({
        title:req.body.title,
        description:req.body.description,
        image:req.file ? req.file.filename : null,
        seller:user,
        category:req.body.category,
        price:parseFloat(req.body.price),
    });

    try {
        await item.save();
        console.log(item)
        return res.status(201).send(item);
    } catch (error) {
        return res.status(400).send(error);
    }

});

export default itemsRouter;