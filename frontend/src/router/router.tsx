import {createBrowserRouter} from 'react-router-dom';
import {MainLayout} from '@/components/MainLayout';
import {HomePage} from '@/pages/HomePage';
import {NewTermPage} from '@/pages/NewTermPage';
import {PronounceTermPage} from '@/pages/PronounceTermPage';
import {SearchResultsPage} from '@/pages/SearchResultsPage';
import {TermPage} from '@/pages/TermPage';
import {PronouncePage} from "@/pages/PronouncePage";
import {NotFoundPage} from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/search',
        element: <SearchResultsPage/>,
      },
      {
        path: '/new-term',
        element: <NewTermPage/>,
      },
      {
        path: '/term/:term',
        element: <TermPage/>,
      },
      {
        path: '/pronounce',
        element: <PronouncePage/>,
      },
      {
        path: '/pronounce/:term',
        element: <PronounceTermPage/>,
      },
      {
        path: '*',
        element: <NotFoundPage/>,
      }
    ],
  },
]);
