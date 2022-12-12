import { Router } from 'express'
import { CreateBanksController } from '../modules/Banks/UseCases/CreateBanks/CreateBanksController';

const bankRoutes = Router();

const createBanksController = new CreateBanksController()

bankRoutes.post('/',async (request,response) => {
    await createBanksController.handle(request, response)
})

export  { bankRoutes }