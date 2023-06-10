import { Themes } from '../types/types';

const darkBackgroundColor = 'rgba(22, 22, 23, 0.8)';
const lightBackgroundColor = '#f5f5f7';
const lightTextColor = 'lightgray';
const darkTextColor = 'black';
const greyTextColor = 'darkgray';

export const themes: Themes = {
  dark: {
    backgroundColor: {
      primary: darkBackgroundColor,
      secondary: darkBackgroundColor, // TODO: change this
    },
    text: {
      color: {
        primary: lightTextColor,
        secondary: lightTextColor,
      }, // TODO: change this
    },
  },
  light: {
    backgroundColor: {
      primary: lightBackgroundColor,
      secondary: lightBackgroundColor, // TODO: change this
    },
    text: {
      color: {
        primary: darkTextColor,
        secondary: greyTextColor, // TODO: change this

      },
    },
  },
};
