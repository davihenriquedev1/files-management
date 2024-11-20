const baseURL = '/database/data';

export const getImages = async () => {
    const response = await fetch(`${baseURL}/images.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
};