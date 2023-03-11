import React from 'react'
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Button, Drawer } from 'antd';
import { IsAPIKeyValid, } from "api/openai.api"
import types from "constants/type";
import { useAppContext } from 'context/app.context';
export const ApiKeys = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [btndis, setBtndis] = useState(false);
    const [open, setOpen] = useState(false);
    const [apiKey, setAPIKey] = useState("");
    const { dispatch } = useAppContext();
    const onSave = async () => {
        setIsVisible(!isVisible);
        setBtndis(true);
        try {
            window.localStorage.setItem("API_KEY", apiKey)
            const isValid = await IsAPIKeyValid();
            console.log(isValid)

            if (!isValid) {

                window.localStorage.removeItem("API_KEY")
            }
            else {
                dispatch(types.SET_API_KEy, apiKey)
            }
        } catch (error) {
            console.log(error)
            window.localStorage.removeItem("API_KEY")
        }

    }



    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="mt-10 pt-10">
                <div className="text-sm mt-10 text-center space-y-4">
                    <div>
                        To get started, enter your OpenAI API key below.
                    </div>
                    <div>
                        <button className="inline-flex items-center 
                            justify-center  px-4 py-3 text-sm 
                            shadow-md bg-purple-600 text-white hover:bg-purple-700
                               group font-semibold text-sm  space-x-2"
                            fdprocessedid="kmgzi6" type="primary" onClick={showDrawer}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="w-5 h-5"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"
                                ></path></svg
                            ><span>Enter API Key</span>
                        </button>
                        <Drawer title="Enter Your OpenAI API Key" placement="right" onClose={onClose} open={open}>
                            <div class="inline-block w-full align-bottom bg-white dark:bg-zinc-900 pt-0   pb-4 text-left  transform transition-all  sm:align-middle p-6 overflow-hidden sm:max-w-sm opacity-100 translate-y-0 sm:scale-100">
                                <div>
                                    <div class="mt-2 text-gray-800 dark:text-white text-left text-sm">

                                        <div class="my-4">You need a working OpenAI API Key in order to use TypingMind.</div>
                                        <div class="my-4">
                                            <a class="text-blue-500 text-xs hover:underline" target="_blank" rel="noopener noreferrer" href="https://platform.openai.com/account/api-keys" tabindex="0">→ Get your API key from Open AI dashboard.</a></div>
                                        <div class="my-4">
                                            <input type="text"
                                                onChange={(e) => { setAPIKey(e.target.value) }}
                                                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700" autocomplete="off"
                                                fdprocessedid="yovm6b" />

                                        </div>
                                        <div class="text-sm text-center text-red-500">Invalid API key. Please make sure your API key is still working properly.</div>
                                        <div class="my-2 text-center space-x-2 flex items-center justify-center">
                                            <button disabled={btndis}

                                                onClick={onSave}
                                                class="inline-flex items-center bg-purple-600 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  hover:bg-purple-700  space-x-1 disabled:bg-gray-400" fdprocessedid="1oi5f6">
                                                {isVisible && (<svg

                                                    class="  w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                    </path>
                                                </svg>
                                                )}


                                                {!isVisible && (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                                    </path></svg>)}

                                                <span>Save</span></button>
                                            <button onClick={onClose} class="inline-flex items-center px-4 py-2 text-sm  border font-medium rounded-md shadow-sm text-gray-500   space-x-1" fdprocessedid="8w0icl"><span>
                                                Cancel</span></button>
                                        </div>
                                        <div class="mt-4 text-xs">The app will connect to OpenAI API server to check if your API Key is working properly.</div>
                                    </div>
                                </div></div>

                        </Drawer>
                    </div>
                    {/* <div>
                        <a
                            className="text-blue-500 text-xs hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://platform.openai.com/account/api-keys"
                        >→ Get your API key from Open AI dashboard.</a
                        >
                    </div> */}
                </div>
            </div >
        </div >
    )
}
