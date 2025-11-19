import { AppError } from "../../utils/appError.js"
import { catchError } from "../../middleware/catchError.js"
import slugify from "slugify";
import { deleteOne } from "../../utils/handlers/handelrs.js";
import { ApiFeature } from "../../utils/apiFeature.js";
import { Brand } from "../../../database/models/brand.model.js";


const addBrand = catchError(async (req, res, next) => {

    req.body.logo = req.file.filename;
    req.body.slug = slugify(req.body.name);
 
    let brand = new Brand(req.body);
    await brand.save();
    res.json({ message: "success", brand });
});



const allBrands =catchError(async (req,res,next)=>{

let apiFeatures=new ApiFeature(Brand.find(),req.query).pagination().fields().filter().sort().search()


    let brands=await apiFeatures.mongooseQuery
    
    res.json({message:"success", page: apiFeatures.pageNumber, brands })
    
    })

const getBrand = catchError(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);

  if (!Brand) {
    return next(new AppError("Brand not found", 404));
  }

  return res.json({ message: "success", brand });
});

   const updateBrand = catchError(async (req, res, next) => {
  if (req.body.slug) req.body.slug = slugify(req.body.name);
  if (req.file) req.body.logo = req.file.filename;

  const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!Brand) {
    return next(new AppError("Brand not found", 404));
  }

  return res.json({ message: "success", brand });
});

            
        const deleteBrand =deleteOne(Brand,"Brand");
            
            
    

export {

    addBrand,
    allBrands,
    getBrand,
    updateBrand,
    deleteBrand

}