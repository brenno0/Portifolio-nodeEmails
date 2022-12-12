import { Router } from 'express';
import { bankRoutes } from './bank.routes';
import { categoryRouter } from './category.routes';
import { userRoutes } from './user.routes';

const routes = Router()


routes.use('/users',userRoutes)
routes.use('/banks',bankRoutes)
routes.use('/categories',categoryRouter)

export { routes }