
import { AppError } from "../../utils/appError.js"
import { catchError } from "../../middleware/catchError.js"
import slugify from "slugify";
import { deleteOne } from "../../utils/handlers/handelrs.js";
import { ApiFeature } from "../../utils/apiFeature.js";
import { SubCategory } from "../../../database/models/subCategory.model.js";


const addsubCategory = catchError(async (req, res, next) => {

    req.body.image = req.file.filename;
    req.body.slug = slugify(req.body.name);
 
    let subcategory = new SubCategory(req.body);
    await subcategory.save();
    res.json({ message: "success", subcategory });
});



const allSubCategories =catchError(async (req,res,next)=>{

let apiFeatures=new ApiFeature(SubCategory.find(),req.query).pagination().fields().filter().sort().search()


    let categories=await apiFeatures.mongooseQuery
    
    res.json({message:"success", page: apiFeatures.pageNumber, categories })
    
    })

const getsubCategory = catchError(async (req, res, next) => {
  const subcategory = await SubCategory.findById(req.params.id);

  if (!subcategory) {
    return next(new AppError("subcategory not found", 404));
  }

  return res.json({ message: "success", subcategory });
});

   const updatesubCategory = catchError(async (req, res, next) => {
  if (req.body.slug) req.body.slug = slugify(req.body.name);
  if (req.file) req.body.image = req.file.filename;

  const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!subcategory) {
    return next(new AppError("subcategory not found", 404));
  }

  return res.json({ message: "success", subcategory });
});

            
        const deletesubCategory =deleteOne(SubCategory,"Category");
            
            
    

export {

    addsubCategory,
    allSubCategories,
    getsubCategory,
    updatesubCategory,
    deletesubCategory

}