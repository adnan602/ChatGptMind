import React from 'react'

export const LeftSidebar = () => {
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
                        <div
                            className="jsx-7078ffb922cb3c38 flex flex-col items-center justify-center p-4 border border-dashed border-2 border-gray-500 rounded-lg"
                        >
                            <div className="jsx-7078ffb922cb3c38 text-gray-500 text-center">
                                <p className="jsx-7078ffb922cb3c38 text-sm">No Chats Yet</p>
                                <p className="jsx-7078ffb922cb3c38 text-xs">
                                    Click the button above to start a new chat
                                </p>
                            </div>
                        </div>
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
