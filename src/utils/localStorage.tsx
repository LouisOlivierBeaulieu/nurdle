export function saveToLocalStorage(key: string, data: any) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

export function loadFromLocalStorage(key: string) {
  try {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
}
