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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let headerToken = req.get('Authorization');
    if (headerToken) {
        const bearerToken = headerToken.split(' ')[1];
        if (!bearerToken) {
            return res.status(401).json({ status: 'No has enviado un token' });
        }
        ;
        try {
            let tokenValido = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET);
            req.body.email = tokenValido.email;
            console.log(tokenValido);
            next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
                return res.status(403).json({ status: 'Token expirado' });
            }
            else if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(403).json({ status: 'Token inválido' });
            }
            else {
                return res.status(500).json({ status: 'Error interno del servidor' });
            }
        }
    }
    else {
        res.status(403).json({ status: 'Acceso denegado: Header requerido' });
    }
});
exports.default = validateToken;
