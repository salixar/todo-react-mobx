import { createContext, useContext } from 'react';
import RootStore from './RootStore';

const StoreContext = createContext('store');

const createStore = () => {
  const store = new RootStore();

  return ({ children }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
// custom hook to collect values and use methods from multiple stores
const useStore = () => useContext(StoreContext);

export { createStore, useStore };
