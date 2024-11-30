import {IProduct, ProductWithoutId} from "./types";
import {promises as fs} from "fs"
import crypto from "crypto";


const fileName =  "./db.json";
let data: IProduct[] = [];

const fileDb = {
    async init(){
        try{
            const fileContent = await fs.readFile(fileName);
            data = await JSON.parse(fileContent.toString());
        }catch(err){
            console.error(err)
        }
    },

    async getItems(){
        return data
    },

    async addItem(item:ProductWithoutId){
        const id = crypto.randomUUID()
        const product = {
            id,
            ...item
        }
        data.push(product);
        await this.save();
        return product;
    },

    async save(){
        return await fs.writeFile(fileName, JSON.stringify(data))
    }
}

export default fileDb