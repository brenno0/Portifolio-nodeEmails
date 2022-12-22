import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendMailUseCase";

export class SendMailController {
    handle(request:Request,response:Response){
        const { mailer, text, name } = request.body
        
        const sendEmailUseCase = new SendEmailUseCase()
        
        const data = sendEmailUseCase.execute({
            mailer, 
            text, 
            name,
        })

        return response.status(200).send(data)
    }
}