// StateContext.js
import React, { createContext, useState, useEffect, ReactNode } from 'react';

type contextProps = {
  name: string,
  setName: (newName: string) => void
}

export const StateContext = createContext<contextProps>({name: "", setName: () => {}});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const setNameAndPersist = (newName: string) => {
    setName(newName);
    localStorage.setItem('name', newName);
  };

  return (
    <StateContext.Provider value={{ name, setName: setNameAndPersist }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;