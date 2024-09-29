import { Dimensions } from 'react-native';

const stringifyPretty = <T>(item: T) => JSON.stringify(item, null, 4);

const isEmpty = (obj: any) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export { stringifyPretty, SCREEN_WIDTH, SCREEN_HEIGHT, isEmpty };
