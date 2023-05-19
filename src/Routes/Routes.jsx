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
        element: <AddAToy></AddAToy>,
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>,
      },
      // {
      //   path:'/toy/:id',
      //   element: <SingleToy></SingleToy>,
      //   loader:({params})=>fetch(``)
      // }
    ],
  },
  {
    path: '*',
    element: <Error></Error>,
  },
]);
export default router;
