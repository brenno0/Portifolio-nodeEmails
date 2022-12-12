import { prisma } from "../../../../database/prismaClient";

interface ICreateCategoryUseCase {
    name:string;
    color:string;
}

export class CreateCategoryUseCase {
    async execute({ name, color }:ICreateCategoryUseCase) {
        if(!name || typeof name !== "string"){
            throw new Error("O campo nome é obrigatório e precisa ser uma string")
        } 
        if(!color || typeof color !== "string"){
            throw new Error("O campo cor é obrigatório e precisa ser uma string")
        } 

        const categoryAlreadyExists = await prisma.category.findFirst({
            where:{
                name
            }
        })

        if(categoryAlreadyExists){
            throw new Error("Esta categoria já foi cadastrada")
        }

        const category = await prisma.category.create({
            data:{
                name,
                color
            }
        })
        
        return category;
        
    }
}