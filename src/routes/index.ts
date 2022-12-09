import { userRoutes } from "../routes/user";
import { Router } from 'express';

const routes = Router()


routes.use('/users',userRoutes)

export { routes }