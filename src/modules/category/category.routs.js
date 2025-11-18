
import { Router } from "express";
import { addCategory, getCategory,allCategories, updateCategory,deleteCategory} from "./category.controller.js";

const categoryRouter=Router()

categoryRouter.route('/')
.post(addCategory)
.get(allCategories)

categoryRouter.route('/:id')
.get(getCategory)
.put(updateCategory)
.delete(deleteCategory)


export default categoryRouter