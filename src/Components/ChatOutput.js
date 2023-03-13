import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypehighlight from "rehype-highlight";
import showdown from "showdown";
const Converter = new showdown.Converter();
export const ChatOutput = React.memo(({ message }) => {
  return (
    <>
      <div class="px-4 rounded-lg mb-2">
        {message.role === "user" ? (
          <div class="pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50  pb-2 pt-2 pr-2  min-h-[40px]">
            <div class="absolute top-2 left-2">
              <button class="w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all group active:bg-gray-200 overflow-hidden">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="w-5 h-5 inline-block group-hover:hidden"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="w-5 h-5 hidden group-hover:inline-block"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
                </svg>
              </button>
            </div>

            <div class="w-full">
              <div>
                <div class="text-sm whitespace-pre-line space-y-2 w-fit bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline">
                  {message.content}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50  pb-2 pt-2 pr-2  min-h-[60px]">
            <div class="absolute top-2 left-2">
              <img
                src="/favicon-192x192.png"
                class="w-9 h-9 rounded-md flex-none"
              />
              <div class="my-1 flex items-center justify-center">
                <button>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="w-4 h-4 hover:text-black transition-all text-gray-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full">
              <div class="prose prose-sm  dark:prose-invert">
                <ReactMarkdown
                  remarkPlugins={remarkGfm}
                  children={message?.content}
                ></ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
});
