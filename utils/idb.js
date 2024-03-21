import { openDB } from "idb";

const DB_NAME = "form-data-db";
const STORE_NAME = "form-data-store";

// Open the IndexedDB database
export const openDatabase = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      // Create an object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

// Store form data in IndexedDB
export const storeFormData = async (formData) => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.add(formData);
};

// Retrieve all stored form data from IndexedDB
export const getAllFormData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return await store.getAll();
};

// Clear all stored form data from IndexedDB
export const clearAllFormData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.clear();
};
