import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";


export class ListProductsController {
    async handle(request:Request,response:Response){
        
        const listProductsUseCase = new ListProductsUseCase();

            const { userId } = request;

            
            const data = await listProductsUseCase.execute(userId,request.query)
           

            return response.status(200).json(data)
     
    }
}