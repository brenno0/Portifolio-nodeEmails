import { Router } from 'express'
import { CreateProductsController } from '../modules/Products/useCases/CreateProducts/CreateProductsController';

const productRoutes = Router();

const createProductsController = new CreateProductsController()

productRoutes.post('/',async (request,response) => {
    await createProductsController.handle(request, response)
})

export  { productRoutes }