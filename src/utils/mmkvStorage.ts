import { MMKV } from 'react-native-mmkv';

const mmkvStorage = new MMKV();

/**
 *  Adds new key, value to local storage
 *
 *  Note: values are stored as JSON strings
 */
function setItemToStorage<T>(key: string, value: T): void {
  const valueToStore = JSON.stringify(value);
  mmkvStorage.set(key, valueToStore);
}

/**
 * Gets value for specific key from storage
 *
 * Note: values are stored as JSON strings
 */
function getItemFromStorage<T>(key: string, defaultValue: T): T {
  const storedValue = mmkvStorage.getString(key);
  if (storedValue) {
    return JSON.parse(storedValue) as T;
  }
  return defaultValue;
}

/** Remove specific key from storage */
function removeItemFromStorage(key: string): void {
  mmkvStorage.delete(key);
}

/** Remove all keys from local storage */
function clearStorage(): void {
  mmkvStorage.clearAll();
}

/** gets all keys */
function getAllInstances() {
  return mmkvStorage.getAllKeys();
}

/** Check if a certain key is added to local storage */
function checkStorageKey(key: string) {
  return mmkvStorage.contains(key);
}

export {
  removeItemFromStorage,
  clearStorage,
  setItemToStorage,
  getItemFromStorage,
  getAllInstances,
  checkStorageKey,
};

export default mmkvStorage;
