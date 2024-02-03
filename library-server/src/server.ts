import cors from 'cors';
import express, {Express, Request, Response} from 'express';
import { config } from 'dotenv';


// all routes

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.get("/auth", (request:Request, response:Response)=> {
    response.status(200).send({
        msg: "Hello World"
    })
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})