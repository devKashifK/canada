import React from "react";
import Container from "./container";
import Glass from "@/lib/helpers";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function WhyChooseUs() {
  return (
    <Container>
      <Glass className="flex gap-2 px-10 py-10">
        <div className="flex-1 flex flex-col gap-2">
          <div className="relative w-max">
            <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
            <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

            <div className="px-3 py-1.5">
              <h5 className="tracking-widest text-xl"> Why Choose Us</h5>
            </div>

            <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
            <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
          </div>
          <div className="flex flex-col justify-start gap-6">
            <h3 className="tracking-wide text-left text-2xl text-black/70">
              We Always Ready To Make Your Canada Dream Come True
            </h3>
            <p className="text-sm text-black/60 text-left">
              At GreenTech Resource Worldwide Canada, we specialize in easing
              your immigration journey.
            </p>
            <p className="text-sm text-black/60 text-left">
              Our team of experienced professionals is dedicated to your
              success, offering personalized guidance, up-to-date expertise, and
              unwavering support throughout your immigration process. With our
              proven track record, we ensure a smooth, stress-free, and
              successful transition to your new life in Canana
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-center items-center">
          <ul className="flex gap-6 flex-wrap justify-center cursor-pointer">
            <li className="text-center flex gap-1 justify-center bg-sky-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-2xl font-primary tracking-widest px-8  w-[200px]  flex-col items-center text-white/90 py-3">
              <Icon icon={"iconamoon:profile-light"} className="text-4xl" />
              Professional consulting team
            </li>
            <li className="text-center flex gap-1 justify-center bg-yellow-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-2xl font-primary tracking-widest px-8 py-3 w-[200px]  flex-col items-center text-black/90">
              <Icon icon={"hugeicons:absolute"} className="text-4xl" />
              Personalized solutions
            </li>
            <li className="text-center flex gap-1 justify-center bg-highlight bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-2xl font-primary tracking-widest px-8 py-3 w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"solar:hand-money-linear"} className="text-4xl" />
              Affordable cost
            </li>
            <li className="text-center flex gap-1 justify-center bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 rounded-2xl font-primary tracking-widest px-8 py-3 w-[200px]  flex-col items-center text-white/90">
              <Icon icon={"ph:chalkboard-teacher-bold"} className="text-4xl" />
              10+ years experience
            </li>
          </ul>
        </div>
      </Glass>
    </Container>
  );
}
