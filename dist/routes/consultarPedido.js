"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consultarPedidoController_1 = __importDefault(require("../controllers/consultarPedidoController"));
const validateToken_1 = __importDefault(require("../middleware/validateToken"));
const router = express_1.default.Router();
router.get('/', validateToken_1.default, consultarPedidoController_1.default);
exports.default = router;
