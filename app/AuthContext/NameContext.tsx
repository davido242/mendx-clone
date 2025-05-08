import { createContext } from 'react';

type NameContextProps = {
  name?: string;
  setName?: (name: string) => void;
}

export const NameContext = createContext<NameContextProps | undefined>(undefined);