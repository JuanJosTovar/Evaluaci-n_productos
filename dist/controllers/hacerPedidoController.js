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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoDto_1 = __importDefault(require("../Dto/PedidoDto"));
const UserService_1 = __importDefault(require("../services/UserService"));
let hacerpedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idProducto, direccion, nombre, email, } = req.body;
        let estado = '';
        const result = yield UserService_1.default.crearPedido(new PedidoDto_1.default(idProducto, direccion, nombre, email, estado));
        console.log(result);
        if (result.encontrado) {
            return res.status(201).json({
                status: 'Pedido exitoso'
            });
        }
        return res.status(401).json({
            status: 'Pedido fallido'
        });
    }
    catch (error) {
        return res.status(401).json({
            status: 'Debe ingresar datos'
        });
    }
});
exports.default = hacerpedido;
