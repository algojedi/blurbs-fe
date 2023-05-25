import { useState } from 'react'
import './App.css'
import AuthProvider from './context/auth-provider';
import MainComponent from './pages/main';
import ThemeProvider from './context/theme-provider';

function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
      <MainComponent />
      </ThemeProvider>
    </AuthProvider>
  );

}

export default App
