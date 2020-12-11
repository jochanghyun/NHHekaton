import { createContext } from 'react';

export default createContext({
  setIsLoading: (value: React.SetStateAction<boolean>): void => {},
});
