import { Themes } from "../types/types";

const darkBackgroundColor = 'rgba(22, 22, 23, 0.8)';
const lightBackgroundColor = '#f5f5f7';
const lightTextColor = 'lightgray'
const darkTextColor = 'black'

export const themes: Themes = {
  dark: {
    backgroundColor: darkBackgroundColor,
    color: lightTextColor
  },
  light: {
    backgroundColor: lightBackgroundColor,
    color: darkTextColor
  },
};
