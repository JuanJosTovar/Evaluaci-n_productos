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
const CatalogoDto_1 = require("../Dto/CatalogoDto");
const generateHash_1 = __importDefault(require("../helpers/generateHash"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const bcrypt = require("bcryptjs");
class UserService {
    static register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.password = yield (0, generateHash_1.default)(user.password);
            return yield UserRepository_1.default.add(user);
        });
    }
    static auth(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserRepository_1.default.login(auth);
            if (result[0].length > 0) {
                const isPasswordValid = yield bcrypt.compare(auth.password, result[0][0].password);
                if (isPasswordValid) {
                    return { logged: true, status: "Succesful Authentication" };
                }
                return { logged: false, status: "Incorrect username or password" };
            }
            return { logged: false, status: "Incorrect username or password" };
        });
    }
    static crearPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrarProducto = CatalogoDto_1.productos.find(producto => producto.id === pedido.idProducto);
            if (encontrarProducto) {
                const nuevoPedido = yield UserRepository_1.default.addPedido(pedido);
                if (nuevoPedido) {
                    return {
                        encontrado: true, status: 'Se encontro su producto'
                    };
                }
            }
            else {
                return {
                    encontrado: false, status: 'No pudimos encontrar su producto...'
                };
            }
        });
    }
    static verMisPedidos(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepository_1.default.verPedidos(email);
        });
    }
    static actualizar(id, estado) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserRepository_1.default.verificar(id);
            if (result[0].length > 0) {
                const update = yield UserRepository_1.default.update(estado, id);
                return {
                    encontrado: true, status: 'Su pedido si se encuentra'
                };
            }
            else {
                return {
                    encontrado: false, status: 'Su pedido no se encuentra'
                };
            }
        });
    }
    static verificarEstado(idPedido) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserRepository_1.default.verEstado(idPedido);
        });
    }
}
exports.default = UserService;
