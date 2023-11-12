import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Details } from '../components/Details/Details';
import { RouterError } from '../components/RouterError/RouterError';
import { detailsLoader } from '../components/Details/Details';
import { App } from '../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <RouterError />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            path: 'details/:detailsId',
            element: <Details />,
            loader: detailsLoader,
          },
        ],
      },
    ],
  },
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
]);