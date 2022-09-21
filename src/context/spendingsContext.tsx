import React, { createContext, useState } from "react";
import { SpendingType } from "../types/spenging.type";

const initialState: SpendingType[] = [];

export interface SpendingContextType {
  spendings: SpendingType[];
  setSpendings: (spendings: SpendingType[]) => void;
}

export const SpendingContext = createContext<SpendingContextType>({
  spendings: initialState,
  setSpendings: () => {},
});

const SpendingProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [spendings, setSpendings] = useState<SpendingType[]>(initialState);

  return (
    <SpendingContext.Provider value={{ spendings, setSpendings }}>
      {children}
    </SpendingContext.Provider>
  );
};

export default SpendingProvider;
