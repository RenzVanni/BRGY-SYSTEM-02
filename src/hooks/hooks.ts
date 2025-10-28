import { ContextTheme } from '@/config/config_context';
import { useContext } from 'react';

export function useContextTheme() {
  return useContext(ContextTheme);
}
