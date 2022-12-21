import nodemailer, { Transport } from 'nodemailer'

interface ISendEmailUseCase {
    mailer:string,
    text:string,
    name:string,
    language:string
}

export class SendEmailUseCase {
    execute({ mailer, text, name, language }: ISendEmailUseCase){
        const user = process.env.USER as unknown as string
        const pass = process.env.PASSWORD as unknown as string

        
        if(!mailer  || !text  || !name ){
            throw new Error("Por favor preencha todos os campos obrigatórios.")
        }
        
        const transporter = nodemailer.createTransport({
            host:"smtp.hostinger.com",
            secure:true,
            port:465,
            auth:{user , pass}
        })

        transporter.sendMail({
            from:user,
            to:user,
            subject:name,
            text
        }).then(res => {
            console.log(res)
            return res
        }).catch(err => {
            throw new Error(err)
        })
    }
}