import { categoryEntity } from "../../entity/category/category.entity";
import { ICategory } from "../../interface/category/category.interface";

export  const saveCategory = async ( data:ICategory )=>{

    try {
        
        const newCategory =  new categoryEntity();
        newCategory.name_category = data.name_category;
      return await newCategory.save();

    } catch (error) {
        console.error(error,{message:"error when inserting category"})
        return error;
    }


}

export const getCategoryService = async ( data?:string )=>{

    try {
        if(data) {
         return await categoryEntity.findOne({
                where:{ name_category:data }
            });
        }else{
           return await categoryEntity.find();
        }
        
    } catch (error) {
        console.error(error,{message:"No data found"})
    }
}

export const updateCategory = async (data:{ id:number } & ICategory) => {

    try {
        const updateCategoryS = await categoryEntity.findOne({ where:{ id:data['id'] }});
        if(!updateCategoryS) return {message:"category is not found"};
        if(data['name_category']) updateCategoryS['name_category'] = data['name_category']

        return await updateCategoryS.save();

    } catch (error) {
        console.error(error,{message:"No data found"});
    }
}

export const deleteCategory = async (data:number)=>{

    const deleteCategoryS = await categoryEntity.findOne({ where:{id:data}});
    if(!deleteCategoryS) return { message:"category is not found" }
    return await deleteCategoryS.remove();
}