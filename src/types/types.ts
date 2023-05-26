export type Post = {
  id: number;
  title: string;
  content: string;
  creationDate: string;
  averageRating?: number;
  appUser: AppUser;
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