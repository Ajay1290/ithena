import AsyncStorage from '@react-native-async-storage/async-storage';

const MODEL = {
  theme: 'THEME',
  products: 'PRODUCTS',
};

const db = {
  MODEL,
  get: async key => {
    key = MODEL[key] ? MODEL[key] : key;
    const data = await AsyncStorage.getItem(key);
    return data;
  },
  set: async (key, val) => {
    const data = await AsyncStorage.setItem(key, val);
    return data;
  },
  remove: async key => await AsyncStorage.removeItem(key),
  clear: async () => {
    await AsyncStorage.removeItem('darkMode');
    await AsyncStorage.multiRemove(Object.values(MODEL));
  },
};

export default db;
