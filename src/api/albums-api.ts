export const getAlbums = async () => {
    const response = await fetch('/imagesAlbum.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
};