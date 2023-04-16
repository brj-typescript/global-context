import { StoreData } from './globalAppState';
import { trySaveToLocalStorage } from './trySaveToLocalStorage';
import { createDefaultStore } from './createDefaultStore';
import { getLocalStorage } from './getLocalStorage';

export const loadInitStorage = (): StoreData => {
  type StoreHaystack = Record<string, unknown>;
  const defaultValues: StoreHaystack = createDefaultStore();
  const localStorage = getLocalStorage();

  const merged: StoreHaystack = Object.fromEntries(
    Object.entries({ ...defaultValues, ...localStorage }).map(([key, value]) => [key, value || defaultValues[key]])
  );

  const sortObject = (unordered: StoreHaystack): StoreHaystack =>
    Object.keys(unordered)
      .sort()
      .reduce((obj, key) => ({ ...obj, [key]: unordered[key] }), {});

  if (JSON.stringify(sortObject(localStorage)) !== JSON.stringify(sortObject(merged))) {
    trySaveToLocalStorage(merged);
  }

  return merged;
};
