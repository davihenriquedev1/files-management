import { useRoutes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { DynamicPage } from "../pages/DynamicPage";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
    {path:'/', element: <DynamicPage/>},
    {path:'/:slug', element:<DynamicPage/>},
    {path:"*", element:<NotFound/>}
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}