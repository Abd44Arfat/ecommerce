import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import{bootstrap} from "./src/modules/bootstrap.js";
import { globalError } from "./src/middleware/globalError.js";
import { AppError } from "./src/utils/appError.js";
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = 3000;
app.use(express.json());



bootstrap(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})