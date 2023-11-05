import './App.css';
import AuthProvider from './context/auth-provider';
import ThemeProvider from './context/theme-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </ThemeProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App;
