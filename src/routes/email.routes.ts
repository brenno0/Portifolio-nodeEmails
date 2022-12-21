import { Router } from "express";
import { SendMailController } from "../modules/useCases/Email/sendMail/sendMailController";

const emailRoutes = Router()


const sendEmailController = new SendMailController()

emailRoutes.post("/send", sendEmailController.handle)



export { emailRoutes };