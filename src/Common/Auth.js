class Auth {
    authenticated = false;

    login(callback) {
        this.authenticated = true;
        if (callback && typeof (callback) === 'function') {
            callback();
        }
    }

    logout(callback) {
        this.authenticated = false;
        if (callback && typeof (callback) === 'function') {
            callback();
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();