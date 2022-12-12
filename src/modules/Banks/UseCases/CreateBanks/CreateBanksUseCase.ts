import { prisma } from "../../../../database/prismaClient";

interface ICreateBank {
    name:string;
    bankPictureUrl:string;
}

export class CreateBanksUseCase {
    async execute({ name, bankPictureUrl }: ICreateBank){
        
        if(!name || typeof name !== "string"){
            throw new Error("O nome do banco é obrigatório e precisa ser uma string.")
        } 
        if(!bankPictureUrl || typeof bankPictureUrl !== "string"){
            throw new Error("A foto do banco é obrigatória e precisa ser uma url.")
        }
        
        const bankIsAlreadyRegistered = await prisma.banks.findFirst({
            where:{
                name
            }
        })

        if(bankIsAlreadyRegistered){
            throw new Error("Este banco já está registrado.")
        }


        const bank = await prisma.banks.create({
            data:{
                name,
                bankPictureUrl
            }
         })

         
 
        return bank;
    }   
}