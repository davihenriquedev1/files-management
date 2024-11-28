import { useRoutes } from "react-router-dom";
import { DynamicPage } from "../pages/DynamicPage";
import { NotFound } from "../pages/NotFound";

export const routesArray = [
    {path:'/', element:<DynamicPage/>},
    {path:'/*', element:<DynamicPage/>},
    {path:'*', element:<NotFound/>},
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}