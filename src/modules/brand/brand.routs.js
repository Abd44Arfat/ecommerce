
import { Router } from "express";
import { 

    addBrand,
    allBrands,
    getBrand,
    updateBrand,
    deleteBrand

} from "./brand.controller.js";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";

const BrandRouter=Router()

BrandRouter.route('/')
.post(uploadSinleFile("logo", 'Brands'),addBrand)
.get(allBrands)

BrandRouter.route('/:id')
.get(getBrand)
.put(uploadSinleFile("logo", 'Brands'),updateBrand)
.delete(deleteBrand)


export default BrandRouter