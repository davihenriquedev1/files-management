const baseURL = '/database/data';

export const getFiles = async () => {
    const response = await fetch(`${baseURL}/files.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
};