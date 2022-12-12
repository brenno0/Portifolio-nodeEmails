import { Router } from 'express'
import { CreateCategoryController } from '../modules/Categories/useCases/CreateCategories/CreateCategoryController';

const categoryRouter = Router();

const createCategoryController = new CreateCategoryController()

categoryRouter.post('/',createCategoryController.handle)

export  { categoryRouter }