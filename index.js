/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

import App from './App';
import {name as appName} from './app.json';
import { stringifyPretty } from './src/utils/common';

import './src/theme/unistyles';

function handleJSErrorForSetJSExceptionHandler(error) {
    // Show error locally on DEBUG mode
    console.log('JsExceptionHandler: ', stringifyPretty(error));
    // Send error to Sentry
    // const sentryId = Sentry.captureException(error);
    // Display error to the user
    // Bonus: you might also want to get more information from the user
    // showErrorDialogWithFeedback(error, sentryId);
  }

  function exceptionHandler(exceptionString) {
    // Show error locally on DEBUG mode
    console.log('NativeExceptionHandler: ', stringifyPretty(exceptionString));
  }

  setNativeExceptionHandler(exceptionHandler, false);
  setJSExceptionHandler((error) => {
    handleJSErrorForSetJSExceptionHandler(error);
  }, true);


AppRegistry.registerComponent(appName, () => App);
