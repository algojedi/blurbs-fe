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

export type Hashtag = {
  id: number;
  name: string;
}



export type AppUser = {
  id: number;
  name: string;
}


// Theme Types

export type Theme = {
    backgroundColor: string;
    color: string;
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

export const IS_DARK = 'isDark';