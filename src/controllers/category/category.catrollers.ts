import { ICategory } from "../../interface/category/category.interface";
import { saveCategory } from "../../services/category/category.service";
import { Body } from 'tsoa'

 class CategoryController{

    async save(@Body() data:ICategory){

       return saveCategory(data)
    }

}

export default new CategoryController();