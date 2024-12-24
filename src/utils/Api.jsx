/**
 TOKEN : 678fbd92-e6e4-4044-b047-74ce334ffd4e
 GRUPO: web_es_11
 URL : https://around.nomoreparties.co/v1/web_es_11/cards
 */

class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    };

    getHeaders() {
        return {
            'Authorization': this._token,
            'Content-Type': 'application/json'
        }
    }
    _getCheckResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    //Metodos para cargar los datos del usuario al cargar la página en este caso el usuario soy yo.
    getUserInfo() {
        return fetch(`${this._url}/users/me`, //Raliza la petición al servidor de la información del usuario
            {
                method: 'GET',
                headers: this.getHeaders()
            }
        )
            .then(this._getCheckResponse) //Convierte los datos en formato JSON
            .catch((err) => {
                console.log('Error:', err); //Si la respuesta no es correcta se imprimirá un mensaje de error
            })
    }

    //Metodos para obtener las tarjetas del servidor y cargarlas en la página
    getInitialCard() {
        return fetch(`${this._url}/cards`, //Realiza la petición al servidor de las tarjetas principales para cargarlas
            {
                method: "GET",
                headers: this.getHeaders()
            }
        )
            .then(this._getCheckResponse) //Convierte los datos recividos en formato JSON
            .catch((err) => {
                console.log('Error:', err) //Si la respuesta es incorrecta imprimirá un mensaje de error
            })
    }

    //Método para editar la información del usuario desde el servidor
    updateUser(name, about) {
        return fetch(`${this._url}/users/me`, { //Realiza una petición de cambio de datos del perfil de usuario
            method: "PATCH",
            headers: this.getHeaders(),
            body: JSON.stringify({ name, about })
        })
            .then(this._getCheckResponse) //Convierte los datos recibios en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal me mostrará un mensaje de error
            });
    }

    //Método para actualizar la foto del perfil de usuario
    updateUserPhoto(link) {
        return fetch(`${this._url}/users/me/avatar`, { //Realiza una petición de cambio de la foto de perfil de usuario
            method: 'PATCH',
            headers: this.getHeaders(),
            body: JSON.stringify({ avatar: link }),
        })
            .then(
                this._getCheckResponse) //Conviete los datos en formato JSON
            .catch(err => {
                console.log("Error: ", err) //Si se presenta un error nos mostrará un mensaje en la consola con el error
            })
    }

    //Método para añadir una nueva targeta al servidor
    addCard(name, link) {
        return fetch(`${this._url}/cards`, { //Realiza una petición para agregar una vueva tarjeta al servidor
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ name, link })
        })
            .then(this._getCheckResponse) //Convierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) // Si algo sale mal me mostrará un mensaje de error
            })

    }

    //Método para mostrar la cantidad de like de cada tarjeta dependiendo de su identidad de usuario
    linkCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, { //Se realiza una petición para agregar un like
            method: 'PUT',
            headers: this.getHeaders(),
        })
            .then(this._getCheckResponse)//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }

    //Método para eliminar una tarjeta seleccionada
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, { //Se realiza una petición para elimiar una tarjeta seleccionada
            method: 'DELETE',
            headers: this.getHeaders(),
        })
            .then(this._getCheckResponse)//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }

    //Método para eliminar un like de una tarjeta seleccionada
    deleteCardLink(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, { //Se realiza una petición para elimiar una tarjeta seleccionada
            method: 'DELETE',
            headers: this.getHeaders(),
        })
            .then(this._getCheckResponse)//Covierte los datos en formato JSON
            .catch((err) => {
                console.log("Error: ", err) //Si algo sale mal se mostrará un mensaje de error
            })
    }
}


export const api = new Api('https://around.nomoreparties.co/v1/web_es_11', "678fbd92-e6e4-4044-b047-74ce334ffd4e");