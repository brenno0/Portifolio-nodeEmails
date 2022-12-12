import { prisma } from "../../../../database/prismaClient";

interface ProductsListParams {
    id?:string;
    name?:string;
    price?:string;
    description?:string;
    activeFlag?:number;
    userId?:string;
    categoryId?:string;
    banksId?:string;
    createdAt?:Date;
}

export class ListProductsUseCase {
    
    async execute(params?: ProductsListParams){
        
        if(params.id && typeof params.id !== "string"){
            throw new Error("Id inválido.")
        }
        
        const product = await prisma.products.findMany({
            
            orderBy:{
                created_At:'desc'
            },
            
            where:{
                id:params.id,
                name:params.name,
                price:params.price,
                description:params.description,
                activeFlag:Number(params.activeFlag),
                userId:params.userId,
                categoryId:params.categoryId,
                banksId:params.banksId,
                created_At:params.createdAt
            }
        })

        return product;
    }
    
}