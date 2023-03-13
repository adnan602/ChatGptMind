import React, { useState } from "react";
import { Header } from "./Header";
import { chatCompletion } from "api/openai.api";
import { ApiKeys } from "./ApiKeys";
import { ChatInput } from "./ChatInput";
import { useAppContext } from "context/app.context";
import types from "constants/type";
import { ChatOutput } from "./ChatOutput";
export const Chat = () => {
  const { state, dispatch } = useAppContext();
  const regenerate = async () => {
    const messages = state.activeChat.messages;
    messages.pop();
    const promptMessageList = [
      {
        role: "system",
        content: state.initSystemPrompt,
      },
      ...messages,
    ];
    dispatch(types.SET_ACTIVE_CHAT, { messages: messages });
    dispatch(types.SET_THINKING, true);

    const chatResponse = await chatCompletion({
      model: state.model,
      messages: promptMessageList,
    });
    dispatch(types.SET_ACTIVE_CHAT_MESSAGE, {
      role: "assistant",
      content: chatResponse.choices[0]?.message.content,
    });
    dispatch(types.SET_THINKING, false);
    let title = state?.activeChat?.title;
    const chat = {
      messages: [
        ...promptMessageList,
        {
          ...chatResponse.choices[0]?.message,
          usage: chatResponse.usage,
          finish: chatResponse.finish_reason,
        },
      ],
      chatTitle: title,
      model: state.model,
      systemMessage: state.initSystemPrompt,
      chatID: state.chatId,
    };
    window.localStorage.setItem(`CHAT_${state.chatId}`, JSON.stringify(chat));
  };
  return (
    <div>
      <div className="flex flex-1 flex-col lg:pl-80 ">
        <main className="relative e">
          <Header />
          <div>
            <div className="max-w-2xl mx-auto">
              <div className="py-8">
                <div className="p-6 sm:p-10 flex items-center justify-center">
                  <div>{state.api_key ? <APIKEYSET /> : <ApiKeys />}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-2xl mx-auto">
            <div class="py-8">
              {state.activeChat.messages.map((message) => {
                return <ChatOutput message={message} />;
              })}
              {state.isThinking && (
                <div class="px-4 rounded-lg mb-2">
                  <div class="text-sm text-gray-500 flex items-center space-x-2">
                    <svg
                      class="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <div>
                      <span>Assistant is thinking</span>
                      <span>.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {state.activeChat.messages.length > 0 && (
            <div class="my-4 text-center w-full flex items-center justify-center flex-wrap gap-2">
              <button
                onClick={regenerate}
                class="inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="w-4 h-4 mr-1 group-hover:rotate-180 transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Regenerate</span>
              </button>
              <button class="inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="w-4 h-4 mr-1 group-hover:scale-110 transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
                </svg>
                <span>Copy</span>
              </button>
              <button
                onClick={() => {
                  dispatch(types.SET_NEW_CHAT, true);
                }}
                class="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-green-600 text-white hover:bg-green-500 transition-all active:bg-green-600 group font-semibold text-xs"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  t="1551322312294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  class="w-4 h-4 mr-1 group-hover:scale-125 transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
                <span>New Chat</span>
              </button>
            </div>
          )}
          <ChatInput />
        </main>
      </div>
    </div>
  );
};

export const APIKEYSET = () => {
  return (
    <div>
      <div class=" mt-10 ">
        <div class="flex items-center justify-center">
          <div class="text-green-500 text-sm font-semibold my-2">
            Awesome! You can start chatting now!
          </div>
          <div class="confetti-explosion-container-0-2-108"></div>
        </div>
      </div>
    </div>
  );
};
