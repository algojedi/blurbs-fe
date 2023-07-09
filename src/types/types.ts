export type Post = {
  id: number;
  // title: string;
  quillContent: string;
  htmlContent: string;
  creationDate: string;
  averageRating?: number;
  appUser: AppUser;
  hashtags?: Hashtag[];
}

export type PostRequest = {
  userId: number;
  quillContent: string;
  htmlContent: string;
}

export type Hashtag = {
  id: number;
  name: string;
}

export type AppUser = {
  id: number;
  name: string;
}


// Theme Types

export enum ThemeName {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export type Theme = {
    name: ThemeName;
    backgroundColor: {
      primary: string;
      secondary: string;
    }
    text : { 
      color: {
        primary: string;
        secondary: string;
      } 
    }
}

export type Themes = {
  dark: Theme;
  light: Theme;
};

export type ThemeContextProps = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

export const IS_DARK = 'IS_DARK';