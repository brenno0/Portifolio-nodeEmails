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
exports.CreateUserUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const bcrypt_1 = require("bcrypt");
class CreateUserUseCase {
    execute({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || typeof name !== "string") {
                throw new Error("O Campo nome é obrigatório e precisa ser uma string");
            }
            if (!email || typeof email !== "string") {
                throw new Error("O Campo email é obrigatório e precisa ser uma string");
            }
            if (!password || typeof password !== "string") {
                throw new Error("O Campo senha é obrigatório e precisa ser uma string");
            }
            const userAlreadyExists = yield prismaClient_1.prisma.user.findFirst({
                where: {
                    email
                }
            });
            if (userAlreadyExists) {
                throw new Error("O usuário já foi cadastrado");
            }
            const hashPassword = yield (0, bcrypt_1.hash)(password, 10);
            const user = yield prismaClient_1.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword
                }
            });
            return user;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
