import { AsyncStorage } from 'react-native';

const KEY = '@CHANGETHISKEY';
const APP_DATA_STORAGE_KEY = `${KEY}Storage:appData`;
const API_DATA_STORAGE_KEY = `${KEY}Storage:apiData`;

export const appData = {
  async getData() {
    const jsonData = await AsyncStorage.getItem(APP_DATA_STORAGE_KEY);
    const currentData = jsonData ? JSON.parse(jsonData) : {};

    return currentData;
  },
  async setData(data) {
    await AsyncStorage.setItem(APP_DATA_STORAGE_KEY, JSON.stringify(data));
  },
  async clearData() {
    await AsyncStorage.removeItem(APP_DATA_STORAGE_KEY);
  },
};

export const apiData = {
  async getLastUpdate() {
    const lastUpdate = await AsyncStorage.getItem(API_DATA_STORAGE_KEY);
    await AsyncStorage.setItem(API_DATA_STORAGE_KEY, new Date().toString());
    return lastUpdate;
  },
};
