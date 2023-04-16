import { resolveDefaultTheme } from '../theme/resolveDefaultTheme';

export const createDefaultStore = () => ({ theme: resolveDefaultTheme() });
