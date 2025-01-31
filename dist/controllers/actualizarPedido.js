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
const UserService_1 = __importDefault(require("../services/UserService"));
let hacerpedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idPedido, estado } = req.body;
        const result = yield UserService_1.default.actualizar(idPedido, estado);
        if (result.encontrado) {
            return res.status(201).json({
                status: 'Actualizacion exitosa'
            });
        }
        return res.status(401).json({
            status: 'Actualizacion fallida'
        });
    }
    catch (error) {
        return res.status(401).json({
            status: 'Debe ingresar datos'
        });
    }
});
exports.default = hacerpedido;
