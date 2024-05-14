"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hacerPedidoController_1 = __importDefault(require("../controllers/hacerPedidoController"));
const validateToken_1 = __importDefault(require("../middleware/validateToken"));
const router = express_1.default.Router();
router.post('/', validateToken_1.default, hacerPedidoController_1.default);
exports.default = router;
