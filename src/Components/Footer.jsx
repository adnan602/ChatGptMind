import React, { useEffect,useState } from "react";
import {chatCompletion,titleCompletion} from "api/openai.api"
import {useAppContext} from 'context/app.context'
export const Footer = () => {
    const {state,dispatch} = useAppContext()
    const [prompt,setPrompt] = useState('')
    const onSend = async()=>{
        const promptMessageList = [
            {
            role:"system",
            content:state.initSystemPrompt
         },
            {
            role:"user",
            content:prompt
        }
    ]

        const chatResponse = await chatCompletion({
            "model":"gpt-3.5-turbo",
            "messages":promptMessageList
            
        });
        const assistantMessage = {...chatResponse.choices[0]?.message}
        promptMessageList.push(assistantMessage,{role:"user",content:"What would be a short and relevant title for this chat? You must strictly answer with only the title, no other text is allowed."});
        const  titleResponse = await titleCompletion(
            {
                "model":"gpt-3.5-turbo",
                "messages":promptMessageList
                
            
        })
        const title = titleResponse.choices[0].message.content
        
    }
    
  return (
    <div className="sticky bottom-0 left-0 right-0">
      <div className="max-w-2xl mx-auto w-full">
        <hr />
        <div className="p-4 bg-white px-4">
          <div className="pb-safe">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <textarea
              onChange={(e)=>{
                setPrompt(e.target.value)
              }}
                id="chat-input-textbox"
                placeholder="Your message here..."
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none"
                style={{ height: "38px !important" }}
              ></textarea>
              <button onClick={onSend}>Send </button>
              <button
                className="rounded-full bg-gray-300 p-2 flex items-center justify-center transition-all hover:bg-gray-200 space-x-2"
                fdprocessedid="zpy02b"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 352 512"
                  className="w-4 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
