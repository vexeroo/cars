import { Account, ID } from 'appwrite';
import { appwriteClient } from './client';

const account = new Account(appwriteClient);

export const createAccount = (email: string, password: string, name?: string) => {
  return account.create(ID.unique(), email, password, name);
};

export const login = (email: string, password: string) => {
  return account.createSession(email, password);
};

export const getCurrentUser = () => {
  return account.get();
};

export const logout = () => {
  return account.deleteSession('current');
};
