"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verCatalogoController_1 = __importDefault(require("../controllers/verCatalogoController"));
const router = express_1.default.Router();
router.get('/', verCatalogoController_1.default);
exports.default = router;
