import { Client } from 'appwrite';

// You should set these from environment variables or config
const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'http://localhost/v1';
const APPWRITE_PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || '';

export const appwriteClient = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);
