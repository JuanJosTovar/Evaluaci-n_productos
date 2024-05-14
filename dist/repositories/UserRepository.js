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
const config_db_1 = __importDefault(require("../config/config-db"));
class UserRepository {
    static add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO users(email, nombres,  apellidos, telefono, password) VALUES (?,?,?,?,?)';
            const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password];
            return config_db_1.default.execute(sql, values);
        });
    }
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT password FROM users WHERE email=?';
            const values = [auth.email];
            return config_db_1.default.execute(sql, values);
        });
    }
    static addPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO pedido(idProducto, direccion, nombreUsuario, emailUsuario) VALUES (?,?,?,?)';
            const values = [pedido.idProducto, pedido.direccion, pedido.nombreUsuario, pedido.email];
            return config_db_1.default.execute(sql, values);
        });
    }
    static verPedidos(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM pedido WHERE emailUsuario =?';
            const values = [email];
            return config_db_1.default.execute(sql, values);
        });
    }
    static verificar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM pedido WHERE idPedido =?';
            const values = [id];
            return config_db_1.default.execute(sql, values);
        });
    }
    static update(estado, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'UPDATE pedido SET estado = ? WHERE idPedido =?';
            const values = [estado, id];
            return config_db_1.default.execute(sql, values);
        });
    }
    static verEstado(idPedido) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT estado FROM pedido WHERE idPedido = ?';
            const values = [idPedido];
            return config_db_1.default.execute(sql, values);
        });
    }
}
exports.default = UserRepository;
