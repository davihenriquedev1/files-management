import { useRoutes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
//import { Slug } from "../pages/Slug";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
   // {path:'/', element: <Slug/>},
   // {path:'/:slug', element:<Slug/>},
    {path:"*", element:<NotFound/>}
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}