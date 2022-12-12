import { Router } from 'express'
import { CreateUserController } from '../modules/Users/useCases/CreateUser/CreateUserController';
import { ListUsersController } from '../modules/Users/useCases/ListUser/ListUsersController';

const userRoutes = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

userRoutes.post('/signUp',createUserController.handle)

userRoutes.get('/',listUsersController.handle)


export  { userRoutes }