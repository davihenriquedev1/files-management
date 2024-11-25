import { useRoutes } from "react-router-dom";
import { DynamicPage } from "../pages/DynamicPage";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
    {path:'*', element:<DynamicPage/>},
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}