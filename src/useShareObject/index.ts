import { useContext } from 'react';
import { GlobalAppState } from '../globalState/globalAppState';
import { UserIdentity } from '../globalState/types';
import { Theme } from '../theme/types';

export const useShareObject = () => {
  const { getContext, setContext } = useContext(GlobalAppState);

  const getTheme = (): Theme => getContext().theme || Theme.Light;

  const getUserIdentity = (): UserIdentity => ({ isLoggedIn: false });

  const isLoggedIn = (): boolean => getUserIdentity().isLoggedIn;

  return { getContext, setContext, getTheme, getUserIdentity, isLoggedIn };
};
