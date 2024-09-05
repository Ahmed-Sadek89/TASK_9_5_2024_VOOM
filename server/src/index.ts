import express, { Request, Response } from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import main_route from './main.routes';


dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: 200,
        message: "Welcome in TASK_VOOM server"
    })
});

app.use('/api', main_route)

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS WORKED ON PORT ${process.env.PORT}`)
})