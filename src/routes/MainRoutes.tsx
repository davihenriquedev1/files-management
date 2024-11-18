import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { AlbumItem } from "../pages/AlbumItem";
import { ImagesHome } from "../pages/ImagesHome";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
    {path:'/', element: <Home/>},
    {path:'/images', element:<ImagesHome/>},
    {path:'/images/:slug', element:<AlbumItem/>},
    {path:"*", element:<NotFound/>}
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}