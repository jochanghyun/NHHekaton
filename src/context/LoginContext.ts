import {createContext} from 'react';



export default createContext({
  setIsLogin: (value: React.SetStateAction<boolean>): void => {},
});