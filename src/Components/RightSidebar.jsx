import React from 'react'
import * as te from 'tw-elements';
import { Features } from './Features'


export const RightSidebar = () => {


    return (

        <div className="hidden lg:fixed lg:inset-y-0 lg:right-0 lg:flex lg:w-80 lg:flex-col shadow-left">
            <div className="jsx-7078ffb922cb3c38 flex min-h-0 flex-1 flex-col ">
                <div
                    id="navbar"
                    className="jsx-7078ffb922cb3c38 flex flex-1 flex-col overflow-y-auto pt-2  pb-4"
                >
                    <div className="jsx-7078ffb922cb3c38 relative">
                        <Features />
                        <div id="accordionExample" style={{
                            display: 'none'
                        }}>
                            <h2 class="mb-0" id="headingOne">

                                <button

                                    type="button"
                                    data-te-collapse-init
                                    data-te-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"

                                    class="inline-flex  text-end items-center mt-4 w-full py-2 border border-transparent text-base font-medium  shadow-sm text-white bg-purple-900 hover:bg-purple-900 focus:outline-none  disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1" fdprocessedid="ka5yps">

                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 mx-1"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"
                                        ></path></svg
                                    >
                                    <span class="ml-32">Enter Your OpenAI API Key</span></button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="!visible"
                                data-te-collapse-item
                                data-te-collapse-show
                                aria-labelledby="headingOne"
                                data-te-parent="#accordionExample">
                                <div class="inline-block w-full align-bottom bg-gray-700  px-4  pb-4 text-left shadow-xl transform transition-all  sm:align-middle sm:p-6 overflow-hidden sm:max-w-sm opacity-100 translate-y-0 sm:scale-100">
                                    <div>
                                        <div class=" text-white text-left text-sm">

                                            <div class="my-4">
                                                <input type="text" placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="w-full px-3 py-2 text-black  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" autocomplete="off" fdprocessedid="dxuz0n" tabindex="0" />
                                            </div>
                                            <div class="my-2 text-center space-x-2 flex items-center justify-end">
                                                <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400" fdprocessedid="ul7vup">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                                    <span>Save</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 class="mb-0" id="headingtwo">

                                <button

                                    type="button"
                                    data-te-collapse-init
                                    data-te-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"

                                    class="inline-flex  text-end items-center mt-4 w-full py-2 border border-transparent text-base font-medium  shadow-sm text-white bg-purple-900 hover:bg-purple-900 focus:outline-none  disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1" fdprocessedid="ka5yps">

                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 mx-1"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"
                                        ></path></svg
                                    >
                                    <span class="ml-32">Model Settings</span></button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="!visible"
                                data-te-collapse-item
                                data-te-collapse-show
                                aria-labelledby="headingtwo"
                                data-te-parent="#accordionExample">
                                <div class="space-y-4 mt-4">
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label class="block text-sm font-medium leading-6 text-gray-900"
                                            >Initial System Instruction
                                                <button
                                                    class="text-blue-500 hover:underline text-xs"
                                                    fdprocessedid="5jl9j"
                                                    tabindex="0"
                                                >
                                                    (Reset to default)
                                                </button></label
                                            ><a
                                                class="text-xs hover:underline text-blue-500"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                href="https://platform.openai.com/docs/guides/chat/instructing-chat-models"
                                            >Learn more →</a
                                            >
                                        </div>
                                        <textarea
                                            placeholder="You are ChatGPT, a large language model trained by OpenAI."
                                            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                                            style={{ "height": "63.25px !important" }}
                                        >
                                            You are ChatGPT, a large language model trained by OpenAI.</textarea
                                        >
                                    </div>
                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label class="block text-sm font-medium leading-6 text-gray-900"
                                            >Model</label
                                            ><a
                                                class="text-xs hover:underline text-blue-500"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                href="https://platform.openai.com/docs/guides/chat"
                                            >Learn more →</a
                                            >
                                        </div>
                                        <select
                                            id="model"
                                            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                                            fdprocessedid="6a1vh6"
                                        >
                                            <option value="gpt-3.5-turbo">
                                                gpt-3.5-turbo (Default ChatGPT)
                                            </option>
                                            <option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="flex items-center justify-start"
                                        ><button
                                            class="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                            id="headlessui-switch-:r8:"
                                            role="switch"
                                            type="button"
                                            tabindex="0"
                                            aria-checked="true"
                                            data-headlessui-state="checked"
                                            fdprocessedid="jh8q5"
                                        >
                                                <span
                                                    aria-hidden="true"
                                                    class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                                ></span>
                                            </button>
                                            <div>
                                                <div class="ml-2">Remember settings for all future chats</div>
                                                <div class="ml-2 text-gray-500 text-xs"></div></div
                                            ></label>
                                    </div>
                                    <div>
                                        <label class="flex items-center justify-start"
                                        ><button
                                            class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                            id="headlessui-switch-:r9:"
                                            role="switch"
                                            type="button"
                                            tabindex="0"
                                            aria-checked="false"
                                            data-headlessui-state=""
                                            fdprocessedid="geop1j"
                                        >
                                                <span
                                                    aria-hidden="true"
                                                    class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                                ></span>
                                            </button>
                                            <div>
                                                <div class="ml-2">Stream AI responses word by word</div>
                                                <div class="ml-2 text-gray-500 text-xs">
                                                    (Not recommended) This is usually slower to show the whole
                                                    answer.
                                                </div>
                                            </div></label
                                        >
                                    </div>
                                    <div class="text-center space-x-2">
                                        <button
                                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1"
                                            fdprocessedid="09gk8u"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 1024 1024"
                                                class="w-4 h-4"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                                                ></path></svg
                                            ><span>Apply</span></button
                                        ><button
                                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1"
                                            fdprocessedid="zuudtg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
