import { Router } from 'express'
import { CreateBanksController } from '../modules/Banks/UseCases/CreateBanks/CreateBanksController';
import { ListBanksController } from '../modules/Banks/UseCases/ListBanks/ListBanksController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication'

const bankRoutes = Router();

const createBanksController = new CreateBanksController()
const listBanksController = new ListBanksController();
bankRoutes.post('/',ensureAuthentication, async (request,response) => {
    await createBanksController.handle(request, response)
})

bankRoutes.get('/',ensureAuthentication, async (request,response) => {
    await listBanksController.handle(request, response)
})

export  { bankRoutes }