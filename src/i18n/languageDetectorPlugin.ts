import { STORAGE_KEYS } from '../constants';

import { setItemToStorage, getItemFromStorage } from '../utils/mmkvStorage';

/**
 * Custom plugin to detect the preferred language of the user
 * @see https://www.i18next.com/misc/creating-own-plugins#languagedetector
 */
const languageDetectorPlugin = {
  async: true,

  cacheUserLanguage(language: string) {
    try {
      // save a user's language choice in Async storage
      setItemToStorage(STORAGE_KEYS.LANGUAGE, language.toLowerCase());
    } catch (error) {
      console.error('i18n:', 'Error setting language');
    }
  },

  detect(callback: (lang: string) => void) {
    try {
      const language = getItemFromStorage(STORAGE_KEYS.LANGUAGE, 'en') as string;
      if (language) {
        // if language was stored before, use this language in the app
        return callback(language.toLowerCase());
      }
      // if language was not stored yet, use "en"
      return callback('en');
    } catch (error) {
      console.error('i18n:', 'Error reading language');
    }
  },

  init: () => {},
  type: 'languageDetector',
};

module.exports = { languageDetectorPlugin };
