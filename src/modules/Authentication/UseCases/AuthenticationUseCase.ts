import { prisma } from "../../../database/prismaClient";
import { compare }  from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthentication {
    email:string;
    password:string;
}

export class AuthenticationUseCase {
    async execute({ email, password }: IAuthentication){
        const user = await prisma.user.findUnique({
            where:{
                email
            },
        })

        if(!user){
            throw new Error("Email ou senha invalidos.")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email ou senha invalidos.")
        }

        const token = sign({email}, "5c40c281a65846ed71cb9bad80cdd902", {
            subject: user.id,
            expiresIn:"1d"
        })

        const authSuccessResult = {
            "authToken":token,
            "user":{
                "id":user.id,
                "name":user.name,
                "email":user.email,
                "isAdmin":user.isAdmin,
                "createdAt":user.created_At,
            }
        }

        return authSuccessResult;


    }
}