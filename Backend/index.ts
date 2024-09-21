import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from "./config";
import usersRouter from "./routers/usersRouter";
import itemsRouter from "./routers/ItemsRouter";
import categoriesRouter from "./routers/categoriesRoute";


const app = express();
const port = 8030;


app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/users',usersRouter);
app.use("/items",itemsRouter);
app.use("/categories",categoriesRouter);


const run = async () => {
    await mongoose.connect(config.db);
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
    process.on('exit', () => {
        mongoose.disconnect();
    });
};
run().catch(console.error);