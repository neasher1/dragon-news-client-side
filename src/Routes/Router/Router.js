import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Register from "../../Pages/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://dragon-news-server-six-nu.vercel.app/news'),
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`https://dragon-news-server-six-nu.vercel.app/category/${params.id}`);
                },
                element: <PrivateRouter><Category></Category></PrivateRouter>
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({ params }) => fetch(`https://dragon-news-server-six-nu.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'terms',
                element: <TermsAndCondition></TermsAndCondition>,
            },
        ]
    },
    { path: "*", element: <div className="text-center text-danger"><h2>404: Not Found</h2></div> }
]);