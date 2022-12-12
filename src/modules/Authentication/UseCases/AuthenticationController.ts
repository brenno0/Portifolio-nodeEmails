import { Request, Response } from 'express'
import { AuthenticationUseCase } from "./AuthenticationUseCase"


export class AuthenticationController {
    async handle(request:Request, response:Response){
        const { email, password } = request.body
        
        const authenticationUseCase = new AuthenticationUseCase()

        const data = await authenticationUseCase.execute({ email, password })

        return response.status(200).json(data);
        
    }
}