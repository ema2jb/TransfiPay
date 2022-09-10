

const useLocalStorage = (value) => {
  const setUser = (value) => {
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(value, data);
  };

  const getUser = () => {
    const user = localStorage.getItem(USER_STORAGE_KEY);

    return user && JSON.parse(user);
  };

  const clearStorage = () => {
    return new Promise((resolve) => {
      localStorage.clear();
      resolve(true);
    });
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  const getItem = (key) => {
    if(typeof(window) !== 'undefined'){
      return JSON.parse(localStorage.getItem(key));
    }
  };
  
  const setItem = (key, value) => {
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, data);
  };

  return { getItem, setUser, getUser, setItem, clearStorage, removeItem };
};

export default useLocalStorage;
