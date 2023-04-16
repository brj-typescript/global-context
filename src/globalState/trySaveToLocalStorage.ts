import { appLocalStorageKey, StoreData } from './globalAppState';

export const trySaveToLocalStorage = (storeData: Partial<StoreData>) => {
  if (typeof localStorage === 'undefined') {
    console.error('Local storage is not available for store local context.');
    return;
  }
  localStorage.setItem(appLocalStorageKey, JSON.stringify(storeData));
};
