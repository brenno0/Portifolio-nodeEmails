import { prisma } from "../../../../database/prismaClient";
import { hash } from 'bcrypt'


interface ICreateUser {
    name:string;
    password:string;
    email:string;
}

export class CreateUserUseCase {

    async execute({ name, email, password }: ICreateUser) {

        if(!name || typeof name !== "string"){
            throw new Error("O Campo nome é obrigatório e precisa ser uma string")
        } 
        if(!email || typeof email !== "string"){
            throw new Error("O Campo email é obrigatório e precisa ser uma string")
        } 
        if(!password || typeof password !== "string"){
            throw new Error("O Campo senha é obrigatório e precisa ser uma string")
        }
        
        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                email
            }
        })

        if(userAlreadyExists){
            throw new Error("O usuário já foi cadastrado")
        }
        
        const hashPassword = await hash(password, 10)

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashPassword
            }
        })
        
        return user;
    }
}