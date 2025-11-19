
import { Router } from "express";
import {    addsubCategory,
    allSubCategories,
    getsubCategory,
    updatesubCategory,
    deletesubCategory} from "./subCategory.controller.js";

const subCategoryRouter=Router()

subCategoryRouter.route('/')
.post(addsubCategory)
.get(allSubCategories)

subCategoryRouter.route('/:id')
.get(getsubCategory)
.put(updatesubCategory)
.delete(deletesubCategory)


export default subCategoryRouter