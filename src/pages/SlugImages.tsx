import { useParams } from "react-router-dom";
import { useImages } from "../hooks/useImages";
import { ImageItem } from "../components/ImageItem";

export const SlugImages = () => {
    const { albums, imagesNoFolder } = useImages();
    const params = useParams();
    const slug = params.slug;

    if (!slug) return;

    const album = albums?.find((album)=> {
        if(slug && album.title.toLowerCase() === slug) {
            return album;
        }
    })

    const image = imagesNoFolder?.find((image)=> {
        if(slug && image.name.toLowerCase() === slug) {
            return image;
        }
    })

    if (album?.photos.length === 0) {
        return <p className="text-center text-lg">No files to show.</p>;
    }

    return (
        <div className="w-full">
            <ul className="flex flex-wrap gap-6">
                {album?.photos.map((item) => (
                    <ImageItem item={item}/>
                ))}
                {image &&
                    <ImageItem item={image}/>
                }
            </ul>
        </div>
    );
};
