"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailController = void 0;
const SendMailUseCase_1 = require("./SendMailUseCase");
class SendMailController {
    handle(request, response) {
        const { mailer, text, name } = request.body;
        const sendEmailUseCase = new SendMailUseCase_1.SendEmailUseCase();
        const data = sendEmailUseCase.execute({
            mailer,
            text,
            name,
        });
        return response.status(200).send(data);
    }
}
exports.SendMailController = SendMailController;
