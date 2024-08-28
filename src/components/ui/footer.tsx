import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Button } from "./custom";

export default function Footer() {
  return (
    <div className="flex flex-col w-full rounded-2xl shadow-2xl">
      <div className="bg-secondary bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-t-2xl h-[500px] flex gap-10 px-12 py-16 items-center justify-center text-white">
        <div className="flex flex-col gap-10 flex-1 text-white/50 pt-10 font-extralight justify-start items-start">
          <img src="/gt-removebg.png" alt="" className="w-[70%] pl-10" />

          <div className="flex flex-col gap-2 text-stone-100 justify-start items-start w-full cursor-pointer pl-10 text-sm">
            <span className="border-b  w-[80%] text-left border-white/25 px-8 block">
              About us
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Our Services
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Why Choose Us
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Visa Success Stories
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Customer Review
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Make Appointment
            </span>
            <span className="border-b w-[80%] text-left border-white/25 px-8 block">
              Customer Review
            </span>
          </div>
          <div className="flex flex-row gap-2 text-xs text-stone-300 pb-12 px-10">
            <div className="w-[40%] text-left">
              2124 Broad St, Regina, Saskatchewan,Canada S4P 1Y5 (Registered
              office)
            </div>
            <div className="flex w-[60%] flex-col gap-1">
              <div className="flex gap-2 text-left">
                <p className="flex-1">Email</p>
                <p className="flex-1 -ml-20">info@gtrworldwide.com</p>
              </div>
              <div className="flex gap-2 text-left">
                <p className="flex-1">Phone</p>
                <p className="flex-1 -ml-20">+1-855-477-9797</p>
              </div>
              <div className="flex gap-2 text-left">
                <p className="flex-1">Timings</p>
                <p className="flex-1 -ml-20">9AM to 5PM (GMT-6)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-1 h-full text-white/50 font-extralight  justify-start items-start px-5">
          <div className="flex flex-col gap-5">
            <p className="text-sm text-left">Follow us</p>
            <div className="h-10  border-gray-400 flex flex-row">
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-linkedin"}
                  className="text-4xl cursor-pointer  border rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-facebook"}
                  className="text-4xl cursor-pointer border rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-twitter"}
                  className="text-4xl cursor-pointer border rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-instagram"}
                  className="text-4xl cursor-pointer border rounded-full py-2 px-2"
                />
              </span>
              <span className="w-14 h-14">
                <Icon
                  icon={"carbon:logo-youtube"}
                  className="text-4xl cursor-pointer border rounded-full py-2 px-2"
                />
              </span>
            </div>
            <p className="text-sm text-left w-[50%] pb-3">
              Receive resources & tools that can help you prepare for the
              future. You can cancel anytime.
            </p>

            <input
              placeholder="Email"
              className="w-[80%] bg-[#3A3A3C]  focus:border-none cursor-pointer outline-none px-4 py-3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  rounded-lg"
            />

            <div className="pt-4">
              <Button
                className="py-2 px-4 bg-red-600 text-stone-50"
                icon={
                  <div className="flex gap-2 justify-center items-center text-xs">
                    <Icon icon={"mdi:phone"} />
                    <span>+1855 477 9797</span>
                  </div>
                }
              >
                <span className="text-xs">Free Consultation</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  py-5  px-12 bg-destructive bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-b-2xl w-full text-white/65 text-xs">
        <span className="">
          © Green Tech Resources Worldwide Canada - All rights reserved
        </span>
      </div>
    </div>
  );
}
