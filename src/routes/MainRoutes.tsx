import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SlugImages } from "../pages/SlugImages";
import { ImagesFolder } from "../pages/ImagesFolder";

// eslint-disable-next-line react-refresh/only-export-components
export const routesArray = [
    {path:'/', element: <Home/>},
    {path:'/images', element:<ImagesFolder/>},
    {path:'/images/:slug', element:<SlugImages/>},
    {path:"*", element:<NotFound/>}
]

export const MainRoutes = () => {
    return useRoutes(routesArray)
}