import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/pages/error/error-page.tsx';
import PostDetailPage from './components/pages/post/post-detail-page.tsx';
import PostsListPage from './components/pages/post/posts-list-page.tsx';
import AboutPage from './components/pages/about/about-page.tsx';
import ProfilePage from './components/pages/profile/profile-page.tsx';
import AddPostPage from './components/pages/add-post/add-post-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts',
        element: <PostsListPage />,
      },
      {
        path: 'posts/:postId',
        element: <PostDetailPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/posts/create',
        element: <AddPostPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
