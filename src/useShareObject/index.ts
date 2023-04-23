import { useContext } from 'react';
import { GlobalAppState } from '../globalState/globalAppState';
import { UserIdentity } from '../globalState/types';
import { Theme } from '../theme/types';

export const useShareObject = () => {
  const { getContext, setContext } = useContext(GlobalAppState);

  const getStorage = <T>(key: string, initialState: T): T => (getContext() as Record<string, T>)[key] ?? initialState;

  const setStorage = <T>(key: string, value: T) =>
    setContext({
      ...((getContext() as Record<string, T>)[key] ?? {}),
      [key]: value,
    });

  const isKey = (key: string): boolean => Boolean(getStorage(key, false));

  const getTheme = (): Theme => getContext().theme || Theme.Light;

  const getUserIdentity = (): UserIdentity => ({ isLoggedIn: false });

  const isLoggedIn = (): boolean => getUserIdentity().isLoggedIn;

  return { getContext, setContext, getStorage, setStorage, isKey, getTheme, getUserIdentity, isLoggedIn };
};
