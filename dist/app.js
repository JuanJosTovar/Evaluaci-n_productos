"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const registerController_1 = __importDefault(require("./controllers/registerController"));
const authController_1 = __importDefault(require("./controllers/authController"));
const verCatalogo_1 = __importDefault(require("./routes/verCatalogo"));
const hacerPedido_1 = __importDefault(require("./routes/hacerPedido"));
const misPedidos_1 = __importDefault(require("./routes/misPedidos"));
const actualizarPedido_1 = __importDefault(require("./routes/actualizarPedido"));
const consultarPedido_1 = __importDefault(require("./routes/consultarPedido"));
const app = (0, express_1.default)().use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/register', registerController_1.default);
app.use('/auth', authController_1.default);
app.use('/verCatalogo', verCatalogo_1.default);
app.use('/hacerPedido', hacerPedido_1.default);
app.use('/misPedidos', misPedidos_1.default);
app.use('/actualizarPedido', actualizarPedido_1.default);
app.use('/consultarPedido', consultarPedido_1.default);
const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log("Servidor ejecutandose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
