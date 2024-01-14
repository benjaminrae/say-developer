import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResults';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search/:term',
        element: <SearchResultsPage />,
      },
    ],
  },
]);
