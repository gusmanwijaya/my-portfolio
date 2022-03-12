import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  return (
    <div className="block md:hidden text-right z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-xl shadow-indigo-600/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-60 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-slate-700 ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link href="/">
                  <a className="font-medium text-indigo-600 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    Home
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/certificate">
                  <a className="font-medium text-indigo-600 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                    Certificate
                  </a>
                </Link>
              </Menu.Item>
            </div>
            <div className="p-3">
              <Menu.Item>
                <a
                  href="https://wa.me/6281312397308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn border-none bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 capitalize px-6 py-3"
                >
                  Pay Him Now
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
