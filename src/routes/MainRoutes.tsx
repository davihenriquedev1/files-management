import { useRoutes } from "react-router-dom";
import { DynamicPage } from "../pages/DynamicPage";
import { NotFound } from "../pages/NotFound";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
    {path:'/', element:<DynamicPage/>},
    {path:'/*', element:<DynamicPage/>},
    {path:'*', element:<NotFound/>},
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}