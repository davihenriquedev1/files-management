const baseURL = '/data';

export const getAlbums = async () => {
    const response = await fetch(`${baseURL}/albums.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
};

export const getImages = async () => {
  const response = await fetch(`${baseURL}/images.json`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};