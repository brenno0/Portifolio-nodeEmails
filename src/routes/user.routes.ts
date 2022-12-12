import { Router } from 'express'
import { CreateUserController } from '../modules/Users/useCases/CreateUser/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController()

userRoutes.post('/signUp',createUserController.handle)

export  { userRoutes }