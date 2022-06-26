import { useContext, useState, createContext } from "react";

interface StateContextType {
  magnification: number;
  setMagnification: React.Dispatch<React.SetStateAction<number>>;
}
const StateContext = createContext({} as StateContextType);
export const StateProvider = ({ children }: any) => {
  const [magnification, setMagnification] = useState(1);

  return (
    <StateContext.Provider value={{ magnification, setMagnification }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = (): StateContextType => useContext(StateContext);
