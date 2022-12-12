"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBanksUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class CreateBanksUseCase {
    execute({ name, bankPictureUrl }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || typeof name !== "string") {
                throw new Error("O nome do banco é obrigatório e precisa ser uma string.");
            }
            if (!bankPictureUrl || typeof bankPictureUrl !== "string") {
                throw new Error("A foto do banco é obrigatória e precisa ser uma url.");
            }
            const bankIsAlreadyRegistered = yield prismaClient_1.prisma.banks.findFirst({
                where: {
                    name
                }
            });
            if (bankIsAlreadyRegistered) {
                throw new Error("Este banco já está registrado.");
            }
            const bank = yield prismaClient_1.prisma.banks.create({
                data: {
                    name,
                    bankPictureUrl
                }
            });
            return bank;
        });
    }
}
exports.CreateBanksUseCase = CreateBanksUseCase;
