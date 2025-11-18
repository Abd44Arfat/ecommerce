import { connect } from "mongoose";

export const dbConnection =connect("mongodb://localhost:27017/ecommerce2").then(() => {
    console.log("Database connected");
})