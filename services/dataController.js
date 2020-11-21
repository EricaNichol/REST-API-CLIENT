var fetch = require("node-fetch");
const url = 'http://127.0.0.1:5000/users';
const idUrl = 'http://127.0.0.1:5000/id';

export default class DataController {
  getUniqueId() {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    return fetch(idUrl, options)
      .then((res) => {
        console.log('id', res);
        return res.json().then(data => data);
      });
  }

  getAllUsers() {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    return fetch(url, options)
      .then((res) => {
        return res.json().then(data => data);
      });
  }

  createUser(id) {
    console.log('creating user wtih:', id);
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({ "id": id }),
    };

    return fetch(url, options)
      .then((res) => {
        // callback
      });
  }
}
