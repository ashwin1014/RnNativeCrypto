import { useCallback, useMemo } from 'react';

import { useMMKVString } from 'react-native-mmkv';

import { STORAGE_KEYS } from '../constants';

import mmkvStorage from '../utils/mmkvStorage';

/**
 * This hook utilizes MMKV Storage to store data locally. Has same API as useState.
 *
 * Note: This encrypts the data in production mode.
 *
 * @param {STORAGE_KEYS} key - key to store data in local storage. Use STORAGE_KEYS enum only
 *
 * @see https://github.com/mrousavy/react-native-mmkv/blob/master/docs/HOOKS.md
 */
function useLocalStorage<T>(key: `${STORAGE_KEYS}`, defaultValue: T) {
  const [storedValue, setStoredValue] = useMMKVString(key, mmkvStorage);

  const value = useMemo(
    () => (storedValue ? JSON.parse(storedValue) : defaultValue),
    [storedValue, defaultValue]
  ) as T;

  const setValue = useCallback(
    (newValue: T | ((prevValue: T) => T)) => {
      setStoredValue((prevStoredValue) => {
        const prevValue = prevStoredValue ? (JSON.parse(prevStoredValue) as T) : defaultValue;
        const valueToStore =
          typeof newValue === 'function' ? (newValue as (prevValue: T) => T)(prevValue) : newValue;
        return JSON.stringify(valueToStore);
      });
    },
    [defaultValue, setStoredValue]
  );

  return [value, setValue] as const;
}

export default useLocalStorage;
