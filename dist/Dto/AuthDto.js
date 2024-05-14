"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    //getters
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    //setters
    set email(email) {
        this._email = email;
    }
    set password(password) {
        this._password = password;
    }
}
exports.default = Auth;
