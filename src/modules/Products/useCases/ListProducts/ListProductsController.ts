import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";


export class ListProductsController {
    async handle(request:Request,response:Response){
        
        const listProductsUseCase = new ListProductsUseCase();
            
            const data = await listProductsUseCase.execute(request.query)
            .catch(err => {
                return response.status(400).send({"errorMessage":err.message})
            })

            return response.status(200).json(data)
     
    }
}