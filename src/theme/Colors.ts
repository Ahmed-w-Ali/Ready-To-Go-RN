import {darkColors} from './darkColors';
import {lightColors} from './lightColors';

type TColors = {
  light: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    barStyle: string;
    backgroundColor: string;
    settingButton: string;
    inputBackground: string;
  };
  dark: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    barStyle: string;
    backgroundColor: string;
    settingButton: string;
    inputBackground: string;
  };
};

const Colors: TColors = {
  light: lightColors,
  dark: darkColors,
};

export default Colors;
