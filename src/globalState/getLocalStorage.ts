import { appLocalStorageKey, StoreData } from './globalAppState';

export const getLocalStorage = (): StoreData => {
  const value =
    typeof localStorage !== 'undefined' && localStorage.getItem(appLocalStorageKey)
      ? localStorage.getItem(appLocalStorageKey)
      : undefined;

  return value ? (JSON.parse(value) as StoreData) : {};
};
