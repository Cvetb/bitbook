
import { SERVER_KEY } from '../shared/constants';
class Auth {
  login(user, pass) {
    return fetch("http://bitbookapi.azurewebsites.net/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY
      },
      body: JSON.stringify({
        "username": user,
        "password": pass
      })
    })
      .then(response => {
        return response.json();
      })
  }

  register(username, password, name, email) {
    return fetch("http://bitbookapi.azurewebsites.net/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Key": SERVER_KEY,
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "name": name,
        "email": email
      })
    }).then(response => {
      return response.json();
    });
  }

  logout = () => {
    sessionStorage.removeItem('userInfo');
  }
}

export const authService = new Auth();
