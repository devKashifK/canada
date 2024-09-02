import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "./custom";

export default function Hero() {
  const images = ["/aaa.jpg", "/hero-2.jpg", "/hero-3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlide(true);
      }, 500); // Slide animation duration
    }, 5000); // Duration between image changes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-[97%] mx-auto  h-[600px] md:h-[500px] shadow-2xl rounded-2xl flex justify-start items-start flex-col overflow-hidden relative">
        {/* Current Image */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            slide ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Next Image */}
        <div
          className={`absolute top-0 left-full w-full h-full transition-transform duration-500 ease-in-out ${
            slide ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url(${images[nextImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 rounded-xl"></div>

        <div className="flex flex-col w-full h-full relative z-[10000]">
          <Navbar type={"hero"} />
          <div className="px-20 py-10 flex-1 flex gap-8 flex-col justify-center items-center">
            <div className="flex gap-1 flex-col justify-center items-center w-full relative">
              <p className="text-4xl text-center text-black/50">
                Achieve your family Canada
                <strong className="text-black/70 ml-4">dreams with us</strong>
                <br />
              </p>

              <div className="md:block hidden absolute right-40 -bottom-8 w-64 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 252 16"
                  fill="none"
                >
                  <path
                    d="M1.3606 6.99989C21.2036 4.49991 189.869 -0.362312 249.002 6.99999C218.307 6.99999 178.315 5.24446 152.565 13"
                    stroke="#0000008c"
                    stroke-width="6"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>

            <p className="text-center w-full">
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
        </div>
      </div>
    </div>
  );
}
