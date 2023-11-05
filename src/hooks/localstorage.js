// Write data to localStorage
export const writeToLocalStorage = (key, newData) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const updatedData = existingData.filter(item => item.id !== newData.id); // Remove existing object with the same id
    updatedData.push(newData);
    if(updatedData.length>8){
        updatedData.shift()
    } // Add the new object at the end of the array
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

// Read data from localStorage
export const readFromLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return null;
};

export const writeLocalstoragefavourites = (key, newData) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const updatedData = existingData.filter(item => item.youtubeId !== newData.youtubeId); // Remove existing object with the same id
    updatedData.push(newData);
    // Add the new object at the end of the array
    localStorage.setItem(key, JSON.stringify(updatedData));
  };
