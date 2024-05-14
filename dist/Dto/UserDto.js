"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, nombres, apellidos, telefono, password) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._password = password;
    }
    //Getters
    get email() {
        return this._email;
    }
    get nombres() {
        return this._nombres;
    }
    get apellidos() {
        return this._apellidos;
    }
    get telefono() {
        return this._telefono;
    }
    get password() {
        return this._password;
    }
    //Setters
    set email(email) {
        this._email = email;
    }
    set nombres(nombres) {
        this._nombres = nombres;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    set password(password) {
        this._password = password;
    }
}
exports.default = User;
