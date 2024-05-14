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
const AuthDto_1 = __importDefault(require("../Dto/AuthDto"));
const generateToken_1 = require("../helpers/generateToken");
const UserService_1 = __importDefault(require("../services/UserService"));
let auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const login = yield UserService_1.default.auth(new AuthDto_1.default(email, password));
        if (login.logged) {
            return res.status(200).json({
                status: login.status,
                token: yield (0, generateToken_1.generateToken)(email)
            });
        }
        return res.status(401).json({
            status: 'Incorrect username or password'
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = auth;
