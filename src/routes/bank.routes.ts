import { Router } from 'express'
import { CreateBanksController } from '../modules/Banks/UseCases/CreateBanks/CreateBanksController';
import { ListBanksController } from '../modules/Banks/UseCases/ListBanks/ListBanksController';

const bankRoutes = Router();

const createBanksController = new CreateBanksController()
const listBanksController = new ListBanksController();
bankRoutes.post('/',async (request,response) => {
    await createBanksController.handle(request, response)
})

bankRoutes.get('/',async (request,response) => {
    await listBanksController.handle(request, response)
})

export  { bankRoutes }