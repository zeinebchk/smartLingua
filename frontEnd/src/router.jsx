
import { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './componenets/DefaultLayout';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

const router=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
    },
    
    {
        path:'/notFound',
        element:<NotFound/>
    }

])
export default router;