import { prisma } from "../../../../database/prismaClient";

interface IListBanksParams {
    id?:string;
    name?:string;
    createdAt?:Date
}

export class ListBanksUseCase {
    async execute(params?: IListBanksParams){
        const banks = await prisma.banks.findMany({
            orderBy:{
                created_At:'desc'
            },
            
            where:{
                id:params.id,
                name:params.name,
                created_At:params.createdAt
            }
        })

        return banks;
    }
}