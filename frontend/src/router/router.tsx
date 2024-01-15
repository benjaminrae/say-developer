import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { HomePage } from '../pages/HomePage';
import { NewTermPage } from '../pages/NewTermPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchResultsPage />,
      },
      {
        path: '/new-term',
        element: <NewTermPage />,
      },
    ],
  },
]);
