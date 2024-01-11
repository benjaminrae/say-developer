import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { HomePage } from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
