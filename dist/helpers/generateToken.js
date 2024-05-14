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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jwt = require('jsonwebtoken');
function generateToken(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: '1h' });
            return token;
        }
        catch (error) {
            console.error('Error al generar el token:', error);
            throw new Error('Error al generar el token');
        }
    });
}
exports.generateToken = generateToken;
