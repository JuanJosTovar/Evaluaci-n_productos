"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(idProducto, direccion, nombreUsuario, email, estado) {
        this._idProducto = idProducto;
        this._direccion = direccion;
        this._nombreUsuario = nombreUsuario;
        this._email = email;
        this._estado = estado;
    }
    //getters 
    get idProducto() {
        return this._idProducto;
    }
    get direccion() {
        return this._direccion;
    }
    get nombreUsuario() {
        return this._nombreUsuario;
    }
    get email() {
        return this._email;
    }
    get estado() {
        return this._estado;
    }
    //setters
    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set nombreUsuario(nombreUsuario) {
        this._nombreUsuario = nombreUsuario;
    }
    set email(email) {
        this._email = email;
    }
    set estado(estado) {
        this._estado = estado;
    }
}
exports.default = Pedido;
