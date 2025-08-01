import { Databases, ID } from 'appwrite';
import { appwriteClient } from './client';

const databases = new Databases(appwriteClient);

export const createDocument = (databaseId: string, collectionId: string, data: object) => {
  return databases.createDocument(databaseId, collectionId, ID.unique(), data);
};

export const getDocument = (databaseId: string, collectionId: string, documentId: string) => {
  return databases.getDocument(databaseId, collectionId, documentId);
};

export const listDocuments = (databaseId: string, collectionId: string) => {
  return databases.listDocuments(databaseId, collectionId);
};

export const updateDocument = (databaseId: string, collectionId: string, documentId: string, data: object) => {
  return databases.updateDocument(databaseId, collectionId, documentId, data);
};

export const deleteDocument = (databaseId: string, collectionId: string, documentId: string) => {
  return databases.deleteDocument(databaseId, collectionId, documentId);
};
