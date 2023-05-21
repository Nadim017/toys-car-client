import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Component/Home/Home';
import Error from '../Component/Error/Error';
import Blog from '../Component/Blog/Blog';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import AllToys from '../Component/AllToys/AllToys';
import SingleToy from '../Component/SingleToy/SingleToy';
import AddAToy from '../Component/AddAToy/AddAToy';
import MyToys from '../Component/MyToys/MyToys';
import Update from '../Component/Update/Update';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
      },
      {
        path: '/add',
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
      {
        path: '/mytoys',
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://toys-car-server-sage.vercel.app/toy/${params.id}`),
      },

      // {
      //   path: '/toy/:id',
      //   element: <SingleToy></SingleToy>,
      //   loader: ({ params }) =>
      //     fetch(`https://toys-car-server-sage.vercel.app/toy/${params.id}`),
      // },
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
]);
export default router;
