
import { Router } from "express";
import { addCategory, getCategory,allCategories, updateCategory,deleteCategory} from "./category.controller.js";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";

const categoryRouter=Router()

categoryRouter.route('/')
.post(uploadSinleFile("image", 'Categories'),addCategory)
.get(allCategories)

categoryRouter.route('/:id')
.get(getCategory)
.put(uploadSinleFile("image", 'Categories'),updateCategory)
.delete(deleteCategory)


export default categoryRouter