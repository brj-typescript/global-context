import { UserIdentity } from './types';
import { Locale } from '../locale';
import { Theme } from '../theme/types';
import { createContext } from 'react';

export type StoreData = {
  theme?: Theme;
  locale?: Locale;
  identity?: UserIdentity;
};

export type Store = {
  getContext: () => StoreData;
  setContext: (context: Partial<StoreData>) => void;
  setLocalCache?: (context: Partial<StoreData>) => void;
};

export const appLocalStorageKey = 'brj-app__storage';

export const GlobalAppState = createContext<Store>({
  getContext: () => ({}),
  setContext: (c) => {},
});
