import { Store, StoreData } from './globalAppState';
import { trySaveToLocalStorage } from './trySaveToLocalStorage';

export const createStore = (localCache: StoreData, setLocalCache: (context: Partial<StoreData>) => void): Store => ({
  getContext: () => localCache,
  setContext: (storeData) => {
    const finalValue = { ...localCache, ...storeData };
    setLocalCache && setLocalCache(finalValue);
    trySaveToLocalStorage(finalValue);
  },
});
