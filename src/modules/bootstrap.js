
import categoryRouter from "./category/category.routs.js";

export const bootstrap=(app)=>{



app.use('/api/categories',categoryRouter)










}