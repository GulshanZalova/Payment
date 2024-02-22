import AdminRoot from "../pages/admin/AdminRoot";
import Basket from "../pages/site/Basket/Basket";
import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Orders from "../pages/site/Orders/Orders";
import Success from "../pages/site/Success/Success"
const ROUTES = [{
    path: '',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    },
    {
        path: 'basket',
        element: <Basket />
    },
    {
        path: "/orders",
        element: <Orders />
    },
    {
        path:"success",
        element:<Success/>
    }
    ]
},
{
    path: 'admin',
    element: <AdminRoot />,
    children: [{
        path: 'products',
        element: <Products />
    }]
}
]
export default ROUTES