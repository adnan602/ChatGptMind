import * as React from "react";
import types from "constants/type";
export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [state, setState] = React.useState({
    initSystemPrompt:"You are ChatGPT, a large language model trained by OpenAI."
  });

  const dispatch = (actionType, payload) => {
    switch (actionType) {
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext can only be used inside AppProvider");
  }
  return context;
}
