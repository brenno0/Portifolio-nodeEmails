"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailUseCase = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmailUseCase {
    execute({ mailer, text, name }) {
        const user = process.env.USER;
        const pass = process.env.PASSWORD;
        if (!mailer || !text || !name) {
            throw new Error("Por favor preencha todos os campos obrigatórios.");
        }
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.hostinger.com",
            secure: true,
            port: 465,
            auth: { user, pass }
        });
        transporter.sendMail({
            from: user,
            to: user,
            subject: name,
            text
        }).then(res => {
            console.log(res);
            return res;
        }).catch(err => {
            throw new Error(err);
        });
    }
}
exports.SendEmailUseCase = SendEmailUseCase;
