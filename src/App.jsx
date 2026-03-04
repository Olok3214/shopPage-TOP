import Layout from './Layout';
import MainPage from './pages/MainPage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import { createBrowserRouter, RouterProvider } from "react-router";

//App component, includes router provider
//header dosent change, only the content using router

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <MainPage />},
            {path: 'shop', element: <ShopPage />},
            {path: 'basket', element: <CartPage />}

        ]
    }
])

function App(){
    return <RouterProvider router={router}/>
}

export default App;