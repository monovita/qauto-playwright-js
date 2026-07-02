export class Credentials {
    constructor() {
        this._firstName = "UserFirstName";
        this._lastName = "UserLastName";
        this._userEmail = "pw_user_email@mail.com";
        this._userPassword = "UserPassword123";
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get userEmail() {
        return this._userEmail;
    }

    get userPassword() {
        return this._userPassword;
    }
}