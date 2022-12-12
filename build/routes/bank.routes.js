"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankRoutes = void 0;
const express_1 = require("express");
const CreateBanksController_1 = require("../modules/Banks/UseCases/CreateBanks/CreateBanksController");
const bankRoutes = (0, express_1.Router)();
exports.bankRoutes = bankRoutes;
const createBanksController = new CreateBanksController_1.CreateBanksController();
bankRoutes.post('/', createBanksController.handle);
