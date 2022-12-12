import { Router } from 'express';
import { bankRoutes } from './bank.routes';
import { userRoutes } from './user.routes';

const routes = Router()


routes.use('/users',userRoutes)
routes.use('/banks',bankRoutes)

export { routes }