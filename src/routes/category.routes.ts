import { Router } from 'express'
import { CreateCategoryController } from '../modules/Categories/useCases/CreateCategories/CreateCategoryController';
import { ListCategoriesController } from '../modules/Categories/useCases/ListCategories/ListCategoriesController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication'
const categoryRouter = Router();

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

categoryRouter.post('/',ensureAuthentication, createCategoryController.handle)

categoryRouter.get('/',ensureAuthentication, listCategoriesController.handle)


export  { categoryRouter }