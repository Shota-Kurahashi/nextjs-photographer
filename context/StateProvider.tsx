import { useContext, useState, createContext } from "react";

interface StateContextType {
  magnification: number;
  setMagnification: React.Dispatch<React.SetStateAction<number>>;
  vertical: number;
  setVertical: React.Dispatch<React.SetStateAction<number>>;
  beside: number;
  setBeside: React.Dispatch<React.SetStateAction<number>>;
}
const StateContext = createContext({} as StateContextType);
export const StateProvider = ({ children }: any) => {
  const [magnification, setMagnification] = useState(1);
  const [vertical, setVertical] = useState(0);
  const [beside, setBeside] = useState(0);

  return (
    <StateContext.Provider
      value={{
        magnification,
        setMagnification,
        vertical,
        setVertical,
        beside,
        setBeside,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = (): StateContextType => useContext(StateContext);
