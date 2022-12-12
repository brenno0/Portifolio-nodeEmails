import { prisma } from "../../../../database/prismaClient";

interface ListUsersParams {
    id?:string;
    name?:string;
    email?:string;
    isAdmin?: number;
    createdAt?:Date;
}

export class ListUserUseCase {
    async execute(params?:ListUsersParams){

        
        if(params.id && typeof params.id !== "string"){
            throw new Error("Id inválido.")
        }
        
        const users = await prisma.user.findMany({
            orderBy:{
                created_At:'desc',
            },
            where:{
                id:params.id,
                name:params.name,
                email:params.email,
                isAdmin:Number(params.isAdmin),
                created_At:params.createdAt,
            }
        })

        return users;
    }
}