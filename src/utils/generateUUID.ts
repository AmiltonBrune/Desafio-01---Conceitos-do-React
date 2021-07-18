const uuidV4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (callback) => {
    const result = (Math.random() * 16) | 0;
    const value = callback == 'x' ? result : (result & 0x3) | 0x8;
    return value.toString(16);
  });
};

export default uuidV4;
