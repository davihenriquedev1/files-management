import { useParams } from "react-router-dom";
import { useImages } from "../hooks/useImages";

export const AlbumItem = () => {
    const { albums } = useImages();
    const params = useParams();
    const slug = params.slug;

    if (!slug) return;

    const album = albums?.find((item)=> {
        if(slug && item.title === slug) {
            return item;
        }
    })

    if (album?.photos.length === 0) {
        return <p className="text-center text-lg">No files to show.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/*
                {album?.photos.map((item)=> item.url.map((item, index) => (
                
            ))})

            <li key={index} className="group relative cursor-pointer">
                    <img
                    src={item}
                    alt={`photo-${item}`}
                    className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 rounded-lg group-hover:scale-105 flex items-center justify-center transition-transform">
                        <span className="text-white text-lg font-semibold">View Image</span>
                    </div>
                </li>
            
            */}
            
        </ul>
        </div>
  );
};
