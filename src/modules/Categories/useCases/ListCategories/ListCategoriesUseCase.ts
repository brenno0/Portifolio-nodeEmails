import { prisma } from "../../../../database/prismaClient";

interface IListCategoriesParams {
    id?:string;
    name?:string;
    createdAt?:Date;
}

export class ListCategoriesUseCase {
    async execute(params?:IListCategoriesParams) {

        if(params.id && typeof params.id !== "string"){
            throw new Error("Id inválido.")
        }
        
        const category = await prisma.category.findMany({
            orderBy:{
                name:'asc'
            },
            where:{
                id:params.id,
                name:params.name,
                created_At:params.createdAt
            },

            select:{
                id:true,
                name:true,
                Products:true,
                color:true,
                created_At:true,
                _count:true,
            }
        })
        
        return category;
        
    }
}