import React from 'react'
import { useAppContext } from 'context/app.context'
export const LeftSidebar = () => {
    const {state,dispatch} = useAppContext();

    return (

        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col ">
            <div className="jsx-7078ffb922cb3c38 flex min-h-0 flex-1 flex-col bg-gray-800">
                <div
                    id="navbar"
                    className="jsx-7078ffb922cb3c38 flex flex-1 flex-col overflow-y-auto pt-5 pb-4"
                >
                    <div
                        className="jsx-7078ffb922cb3c38 flex items-center justify-between"
                    >
                        <div
                            className="jsx-7078ffb922cb3c38 flex flex-shrink-0 items-center px-4"
                        >
                            <img
                                src="/favicon-192x192.png"

                                className="jsx-7078ffb922cb3c38 h-8 w-auto"
                            />
                        </div>

                    </div>
                    <nav className="jsx-7078ffb922cb3c38 mt-5 flex-1 space-y-2 px-2">
                        <button
                            className="jsx-7078ffb922cb3c38 bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all"
                            fdprocessedid="9214d"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="text-gray-300 mr-2 h-6 w-6 flex-shrink-0"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd"
                                ></path></svg
                            >New Chat
                        </button>
                        <div className="jsx-7078ffb922cb3c38 relative">
                            <input
                                type="text"
                                placeholder="Search chats..."
                                className="jsx-7078ffb922cb3c38 bg-gray-700 text-white px-2 py-1 rounded-md w-full"
                                value=""
                                fdprocessedid="z9e9gp"
                            />
                        </div>
                        {
                            !state.chatList.length ? 
                        
                        <div className="jsx-7078ffb922cb3c38 flex flex-col items-center justify-center p-4 border border-dashed border-2 border-gray-500 rounded-lg">
                            <div className="jsx-7078ffb922cb3c38 text-gray-500 text-center">
                                <p className="jsx-7078ffb922cb3c38 text-sm">No Chats Yet</p>
                                <p className="jsx-7078ffb922cb3c38 text-xs">
                                    Click the button above to start a new chat
                                </p>
                            </div>
                        </div> : state.chatList.map(item=>{
                                return      <div class="bg-gray-900 text-white group flex items-center text-sm font-medium 
                                w-full space-x-2 justify-between overflow-hidden">
                                    <button class="flex items-center justify-start space-x-2 min-w-0 w-full px-2 py-2 text-sm">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                                         aria-hidden="true" class="text-gray-300 h-6 w-6 flex-shrink-0" height="1em" width="1em" 
                                         xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
                                            </svg>
                                            <div class="space-y-1 text-left w-full min-w-0">
                                                <div class="text-gray-100 truncate w-full">{item.title}</div>
                                                <div class="text-xs text-gray-400 font-normal truncate  w-full">
                                                    {item.preview}
                                                    </div>
                                                </div>
                                                </button>
                                                <div class="pr-2">
                                                    <div class="flex items-center justify-center space-x-2">
                                                        <button class="text-gray-500 hover:text-white transiton-all"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-6 h-6 sm:w-4 sm:h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path></svg></button><button class="text-gray-500 hover:text-white transiton-all"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-6 h-6 sm:w-4 sm:h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path></svg></button>
                                                        </div>
                                                        </div>
                                                        </div>
                  
                            })
                        }
                    </nav>
                </div>
                <div
                    className="jsx-7078ffb922cb3c38 flex flex-col flex-shrink-0 bg-gray-700 p-4 justify-center space-y-1"
                >
                    <div
                        className="jsx-7078ffb922cb3c38 text-xs text-gray-400 font-semibold text-center"
                    >
                        <a href="#" className="jsx-7078ffb922cb3c38"
                        >Typing.com</a
                        >
                        © 2023
                    </div>


                </div>
            </div>
        </div>
    )
}
