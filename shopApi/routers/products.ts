import express from 'express';
import fileDb from "../fileDb";
import {ProductWithoutId} from "../types";

const productsRouter = express.Router();

productsRouter.get("/", async (req, res)=>{
    const products = await fileDb.getItems();

    res.send(products);
})

productsRouter.get('/:id', async (req, res)=>{
    const products = await fileDb.getItems();
    const productFindById = products.find((product) => product.id === req.params.id);
    res.send(productFindById);
})

productsRouter.post('/', async(req, res)=>{
    const product:ProductWithoutId = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
    };

    const saveProduct = await fileDb.addItem(product);
    res.send(saveProduct);
});


export default productsRouter;
