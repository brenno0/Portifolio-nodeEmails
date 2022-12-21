"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
dotenv_1.default.config();
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            "errorMessage": err.message
        });
    }
    else {
        return response.status(500).json({
            status: "Error",
            message: "Erro interno no servidor"
        });
    }
});
app.listen(3333);
