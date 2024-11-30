import {promises as fs} from "fs";


const fileName = './test.json'

interface IFileContext {
    message:string
}

const run = async()=>{
    try{
        const fileContents = await fs.readFile(fileName);
        const result = JSON.parse(fileContents.toString()) as IFileContext;
        console.log("message is", result.message);
    }catch(err){
        console.error(err)
    }
}

run().catch(error=>{
    console.log(error)
})