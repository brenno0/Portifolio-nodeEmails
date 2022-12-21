"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRoutes = void 0;
const express_1 = require("express");
const sendMailController_1 = require("../modules/useCases/Email/sendMail/sendMailController");
const emailRoutes = (0, express_1.Router)();
exports.emailRoutes = emailRoutes;
const sendEmailController = new sendMailController_1.SendMailController();
emailRoutes.post("/send", sendEmailController.handle);
