import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export class AuthService {
  async createUser(username, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      //   For settingUp the username in firbase
      await updateProfile(user, {
        displayName: username,
      });

      //   return user with updating displayName
      return user;
    } catch (error) {
      return new Error(`Error while creating user ${error.message}`);
    }
  }

  async loginUser(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return new Error(`Error while loging existing user ${error.message}`);
    }
  }

  async logoutUser() {
    try {
      return signOut(auth);
    } catch (error) {
      return new Error(`Error while logOut user ${error.message}`);
    }
  }
}

const authService = new AuthService();
export default authService;
