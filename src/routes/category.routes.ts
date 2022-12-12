import { Router } from 'express'
import { CreateCategoryController } from '../modules/Categories/useCases/CreateCategories/CreateCategoryController';
import { ListCategoriesController } from '../modules/Categories/useCases/ListCategories/ListCategoriesController';

const categoryRouter = Router();

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

categoryRouter.post('/',createCategoryController.handle)

categoryRouter.get('/',listCategoriesController.handle)


export  { categoryRouter }