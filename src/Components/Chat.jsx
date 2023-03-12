import React ,{useState}from 'react'
import { Header } from './Header'
import { Features } from "./Features"
import { ApiKeys } from './ApiKeys'
import { ChatInput } from './ChatInput'
import { useAppContext } from 'context/app.context'
import ReactMarkdown from 'react-markdown'
import types from "constants/type";

export const Chat = () => {
    const { state, dispatch } = useAppContext()
    const [chatHistory,setChatHistory]=useState([])
    
    return (
        <div>
            <div className="flex flex-1 flex-col lg:pl-80 ">
                <main className="relative e">
                    <Header />
                    <div>
                        <div className="max-w-2xl mx-auto">
                            <div className="py-8">
                                <div className="p-6 sm:p-10 flex items-center justify-center">
                                    <div>
                                        {
                                            state.api_key ? <APIKEYSET /> : <ApiKeys />
                                        }

                                    </div>
                                </div>

                               
                            </div>
                            
                        </div>
                    </div>
                    <div class="max-w-2xl mx-auto">
                    <div class="py-8">

                    <div class="px-4 rounded-lg mb-2">
                        <div class="pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-900 pb-2 pt-2 pr-2  min-h-[40px]">
                        <div class="absolute top-2 left-2">
                            <button class="w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all group active:bg-gray-200 overflow-hidden">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-5 h-5 inline-block group-hover:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5 hidden group-hover:inline-block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
                            </svg>
                            </button>
                        </div>

                        <div class="w-full">
                            <div>
                            <div class="text-sm whitespace-pre-line space-y-2 w-fit bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline">asasas</div>
                            </div>
                        </div>

                        </div>
                    </div>
                    <div class="px-4 rounded-lg mb-2">
                        <div class="pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-900 pb-2 pt-2 pr-2  min-h-[60px]">
                        <div class="absolute top-2 left-2">
                            <img src="/favicon-192x192.png" class="w-9 h-9 rounded-md flex-none"/>
                            <div class="my-1 flex items-center justify-center">
                            <button>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="w-4 h-4 hover:text-black transition-all text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="prose prose-sm  dark:prose-invert">
                            <p>I'm sorry, but I'm not sure how to respond to "asasas". Could you please provide me with a question or topic to assist you with?</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
 
 
 <div class="my-4 text-center w-full flex items-center justify-center flex-wrap gap-2">
  <button class="inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="w-4 h-4 mr-1 group-hover:rotate-180 transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
    </svg>
    <span>Regenerate</span>
  </button>
  <button class="inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-4 h-4 mr-1 group-hover:scale-110 transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
    </svg>
    <span>Copy</span>
  </button>
  <button 
  onClick={()=>{
    dispatch(types.SET_NEW_CHAT,true)
  }}
  class="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-green-600 text-white hover:bg-green-500 transition-all active:bg-green-600 group font-semibold text-xs">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" class="w-4 h-4 mr-1 group-hover:scale-125 transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
      <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
    </svg>
    <span>New Chat</span>
  </button>
</div>
                    <ChatInput />
                </main>
            </div >
        </div >
    )
}


export const APIKEYSET = () => {
    return (
        <div>
            <div class=" mt-10 ">
                <div class="flex items-center justify-center">
                    <div class="text-green-500 text-sm font-semibold my-2">Awesome! You can start chatting now!</div>
                    <div class="confetti-explosion-container-0-2-108">

                    </div>
                </div>
            </div>
        </div>
    )
}
