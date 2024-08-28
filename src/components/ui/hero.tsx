import React from "react";
import Navbar from "./navbar";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 h-[500px] shadow-2xl rounded-2xl mx-auto flex justify-start items-start flex-col overflow-visible">
        <Navbar />
        <div className="flex w-full h-full">
          <div className="px-20 py-10 flex-1 flex gap-8 flex-col">
            <div className="flex gap-1 flex-col relative ">
              <p className="text-4xl text-left text-black/50">
                Achieve your family Canada <br />
                <strong className="text-black/70"> dreams with us</strong>
                <br />
              </p>

              <div className="absolute left-0 -bottom-8 w-64 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 252 16"
                  fill="none"
                >
                  <path
                    d="M1.3606 6.99989C21.2036 4.49991 189.869 -0.362312 249.002 6.99999C218.307 6.99999 178.315 5.24446 152.565 13"
                    stroke="#b33d3d"
                    stroke-width="6"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-left">
              We support companies in their digital transformation by <br />
              creating internal tools and providing software <br /> development
              consulting.
            </p>
            <Button
              className="py-3 w-[190px]"
              icon={
                <div className="flex gap-2 text-[10px] justify-center items-center">
                  <Icon icon={"mdi:phone"} />
                  <span>+1855 477 9797</span>
                </div>
              }
            >
              <span className="text-[10px] relative flex gap-1 justify-start items-center">
                <Icon
                  icon={"teenyicons:appointments-outline"}
                  className="-mt-0.5"
                />
                BOOK AN APPOINTMENT
              </span>
            </Button>
          </div>
          <div className="flex-1 h-full justify-center flex items-center">
            <div className="w-44 h-48 rounded-xl">
              <img
                src="/aaa.jpg"
                alt=""
                className="w-full rounded-xl h-full object-cover"
              />
            </div>
            <div className="rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-28 backdrop-blur-md border-4 border-white right-6 w-[400px] h-[200px] rounded-2xl bg-white/80 shadow-2xl">
        {" "}
        asjkdhkhas
      </div> */}

      {/* <div className="rounded-2xl w-full h-[200px]  bg-white after:bg-green after:w-10 after:h-10 ">
        <div className="py-6  flex gap-4">
          <div className="rounded-md w-[100px] h-[50px]">ggwe</div>
          <div className="rounded-md w-[100px] h-[50px]">ds</div>
          <div className="rounded-md w-[100px] h-[50px]">eafc</div>
        </div>
      </div> */}
    </div>
  );
}
