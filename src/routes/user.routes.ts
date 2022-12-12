import { Router } from 'express'
import { AuthenticationController } from '../modules/Authentication/UseCases/AuthenticationController';
import { CreateUserController } from '../modules/Users/useCases/CreateUser/CreateUserController';
import { ListUsersController } from '../modules/Users/useCases/ListUser/ListUsersController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication'

const userRoutes = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const authenticationController = new AuthenticationController()

userRoutes.post('/signUp',createUserController.handle)

userRoutes.post('/signIn',authenticationController.handle)

userRoutes.get('/',ensureAuthentication, listUsersController.handle)


export  { userRoutes }