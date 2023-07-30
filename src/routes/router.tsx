import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../components/pages/about/about-page";
import AddPostPage from "../components/pages/add-post/add-post-page";
import ErrorPage from "../components/pages/error/error-page";
import HomePage from "../components/pages/home-page/home-page";
import MainLayout from "../components/pages/main/main-layout";
import PostDetailPage from "../components/pages/post/post-detail-page";
import PostsListPage from "../components/pages/post/posts-list-page";
import ProfilePage from "../components/pages/profile/profile-page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'posts',
        children: [
          { index: true, element: <PostsListPage /> },
          {
            path: 'create',
            element: <AddPostPage />,
          },
          {
            path: ':postId',
            element: <PostDetailPage />,
          },
        ],
      },
    ],
  },
]);