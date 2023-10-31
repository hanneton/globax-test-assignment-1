const URL = 'http://localhost:3000/';
class Api {
    constructor(url) {
        this.url = url;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

    getUsers(req) {
        return fetch(`${this.url}?term=${req}`, {
            method: 'GET'
        })
            .then(this._checkResponse);
    }
}

const api = new Api(URL);
export default api;