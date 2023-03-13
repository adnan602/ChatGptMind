import * as React from "react";
import types from "constants/type";
import { v4 as uuidv4 } from "uuid";
export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [state, setState] = React.useState({
    initSystemPrompt:
      "You are ChatGPT, a large language model trained by OpenAI.",

    model: "gpt-3.5-turbo",
    api_key: window.localStorage.getItem("API_KEY"),
    chatList: JSON.parse(window.localStorage.getItem("userChatHistory")) || [],
    newChat: true,
    chatId: uuidv4(),
    activeChat: {
      title: null,
      messages: [],
    },
    isThinking: false,
  });

  const dispatch = (actionType, payload) => {
    switch (actionType) {
      case types.SET_API_KEY:
        setState((pre) => {
          return { ...pre, api_key: payload };
        });
        break;
      case types.SET_CHAT_LIST:
        setState((pre) => {
          return { ...pre, chatList: payload };
        });
        break;
      case types.SET_NEW_CHAT:
        setState((pre) => {
          return {
            ...pre,
            chatId: uuidv4(),
            activeChat: {
              title: null,
              messages: [],
            },
            isThinking: false,
          };
        });
        break;
      case types.SET_ACTIVE_CHAT:
        setState((pre) => {
          return { ...pre, activeChat: { ...pre.activeChat, ...payload } };
        });
        break;
      case types.SET_ACTIVE_CHAT_MESSAGE:
        setState((pre) => {
          return {
            ...pre,
            activeChat: {
              ...pre.activeChat,
              messages: [...pre.activeChat.messages, payload],
            },
          };
        });
        break;
      case types.SET_THINKING:
        setState((pre) => {
          return { ...pre, isThinking: payload };
        });
        break;
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
