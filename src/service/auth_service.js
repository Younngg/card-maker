import firebase from 'firebase';
import app from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return app.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
