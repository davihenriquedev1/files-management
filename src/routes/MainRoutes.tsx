import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ImagesItem } from "../pages/ImagesItem";
import { Images } from "../pages/Images";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <Home/>},
        {path:'/images', element:<Images/>},
        {path:'/images/:slug', element:<ImagesItem/>},
        {path:"*", element:<NotFound/>}
    ])
}