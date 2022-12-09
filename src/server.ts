import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express()

app.use(express.json())
app.use(routes);
app.use(cors()) // Passar config "origin com o endereço de prod"

app.listen(3333)


