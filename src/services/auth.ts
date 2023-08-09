import firebase from '../utils/firebase';
import { User } from '../types/user';

export const signup = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return {
      uid: response.user?.uid,
      email: response.user?.email,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    return {
      uid: response.user?.uid,
      email: response.user?.email,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = (): User | null => {
  const user = firebase.auth().currentUser;
  return user ? { uid: user.uid, email: user.email } : null;
};