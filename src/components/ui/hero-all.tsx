import Navbar from "./navbar";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";
export default function HeroDefault({
  img,
  text,
  path,
}: {
  img?: string;
  text?: string;
  path?: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 mx-auto rounded-2xl bg-center relative bg-cover w-[97%] h-[85vh]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl h-full absolute top-0 left-0 w-full"></div>
      <div className="relative z-10 rounded-2xl">
        <Navbar defaultStyle={true} />
        <div className="flex justify-center items-center w-full h-full mt-10">
          <div
            className="text-6xl font-primary tracking-widest text-white"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
      <div className="absolute bottom-8 px-12 z-10 flex justify-start items-center gap-2 cursor-pointer">
        <Link
          to={"/"}
          className="text-white/60 uppercase font-primary tracking-widest"
        >
          Home
        </Link>
        <Icon
          icon={"zondicons:cheveron-right"}
          className="text-white/60 -mt-1"
        />
        <span className="text-white font-bold uppercase font-primary tracking-widest">
          {path}
        </span>
      </div>
      {/* </div> */}
    </div>
  );
}
