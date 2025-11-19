
import BrandRouter from "./brand/brand.routs.js";
import categoryRouter from "./category/category.routs.js";
import productRouter from "./product/product.routes.js";
import subCategoryRouter from "./subCategory/subCategory.routs.js";

export const bootstrap=(app)=>{



app.use('/api/categories',categoryRouter)
app.use('/api/subcategories',subCategoryRouter)
app.use('/api/brands',BrandRouter)
app.use('/api/products',productRouter)










}