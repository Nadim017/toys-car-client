import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Component/Home/Home';
import Error from '../Component/Error/Error';
import Blog from '../Component/Blog/Blog';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import AllToys from '../Component/AllToys/AllToys';

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
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
]);
export default router;
