"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className="relative flex items-center justify-between py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
        <a href="" className="">
          <Image
            src="/Logo.webp"
            alt="Company Logo"
            className=""
            width={150}
            height={150}
            priority
          />
        </a>
        <ul className="flex text-lg gap-x-10 max-lg:hidden ">
          <a href="#">
            <li>Female</li>
          </a>
          <a href="#">
            <li>Male</li>
          </a>
          <a href="#">
            <li>Kids</li>
          </a>
          <a href="#">
            <li>All Products</li>
          </a>
        </ul>
        <div className="w-1/3 max-w-md flex items-center border rounded-md font-light overflow-hidden pl-2 max-lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
              ></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow placeholder-black text-[0.80rem] leading-none px-1 py-1.5"
          />
          {/* <input className="grow placeholder-black text-[0.80rem] leading-none px-1 py-1.5" type="search" placeholder="What you looking for">  */}
        </div>
        <div className="flex items-center gap-4">
          <div className="max-lg:hidden">
            <button className="border text-sm px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300">
              Sign in
            </button>
          </div>
          <a
            className="bg-slate-200 relative rounded-full p-3 max-lg:hidden"
            href="/cart"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
              0
            </span>
          </a>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="block lg:hidden"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
          </g>
        </svg>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 15 15"
          className="hidden lg:hidden"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="h-0 overflow-hidden bg-white lg:hidden absolute z-10 top-16 left-0 right-0 transition-all duration-300">
          <ul className="flex flex-col items-center text-lg gap-y-6 py-6 lg:hidden">
            <div className="flex items-center gap-4">
              <div className="lg:hidden">
                <button className="border text-sm px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300">
                  Sign in
                </button>
              </div>
              <a
                className="bg-slate-200 relative rounded-full p-3 lg:hidden"
                href="/cart"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
                  0
                </span>
              </a>
            </div>
            <li>
              <a href="/Female"> Female</a>
            </li>
            <li>
              <a href="/Male">Male </a>
            </li>
            <li>
              <a href="/kids"> Kids </a>
            </li>
            <li>
              <a href="/products">All Products </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
