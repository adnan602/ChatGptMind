import React from "react";
import { useAppContext } from "context/app.context";
export const Header = () => {
  const { state, dispatch } = useAppContext();
  return (
    <>
      <div className="sticky top-0 z-10 bg-white backdrop-blur">
        <div className="flex lg:hidden absolute left-1 top-0 bottom-0 items-center justify-center">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            fdprocessedid="93pvp"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0">
          <div className="font-semibold truncate w-full text-center px-12">
            {state?.activeChat?.title || "New Chat"}
          </div>
          {!state?.activeChat?.title ? (
            <div className="text-xs text-gray-400">Start a new chat</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
