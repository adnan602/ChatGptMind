import React, { useState } from "react";
import { useAppContext } from "context/app.context";
import { Drawer } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Features } from './Features'
import { LeftSidebar } from "./LeftSidebar";
import { LeftSidebarSm } from "./LeftSidebarSm ";
export const Header = () => {

  const [open, setOpen] = useState(false);
  const { state, dispatch } = useAppContext();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="sticky top-0 z-10 bg-white backdrop-blur header">
        <div className="flex lg:hidden absolute left-1 top-0 bottom-0 items-center justify-center">
          <button
            type="button"
            data-te-offcanvas-toggle
            data-te-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            data-te-ripple-init
            data-te-ripple-color="light"
            className=" inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            fdprocessedid="93pvp" >

            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
              </path>
            </svg>
          </button>
          <div
            class="invisible fixed bottom-0 top-0 left-0 z-[1045] flex w-76 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
            data-te-offcanvas-init>
            <div class="flex items-center justify-between">
              <LeftSidebarSm />
            </div>
          </div>

        </div>
        <div class="absolute right-2 top-0 bottom-0 flex items-center justify-center">
          <button
            onClick={showDrawer}
            type="button" class="inline-flex items-center justify-center rounded-md text-purple-700 hover:text-purple-900  py-2 px-2 space-x-2 text-2xl" fdprocessedid="syitba">
            <ExclamationCircleOutlined /></button>
          <Drawer
            title={<div className="flex items-center justify-center space-x-2 ">

              <div className="font-semibold text-4xl sm:text-5xl">
                Chat<span className="text-blue-500">WithAl</span>
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-full inline-block"
              >Beta</span >
            </div>}
            placement="right"
            onClose={onClose}
            open={open}
            class="w-72"
          >
            <Features />
          </Drawer>
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
