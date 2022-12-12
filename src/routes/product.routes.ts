import { Router } from 'express'
import { CreateProductsController } from '../modules/Products/useCases/CreateProducts/CreateProductsController';
import { ListProductsController } from '../modules/Products/useCases/ListProducts/ListProductsController';

const productRoutes = Router();

const createProductsController = new CreateProductsController()
const listProductsController = new ListProductsController()

productRoutes.post('/',async (request,response) => {
    await createProductsController.handle(request, response)
})

productRoutes.get('/', async (request,response) => {
    await listProductsController.handle(request, response)
})

export  { productRoutes }