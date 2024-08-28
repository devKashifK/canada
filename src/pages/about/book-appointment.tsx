import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function BookAppointment() {
  return (
    <>
      <Container>
        <Glass
          className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(/immigration.png)`,
          }}
        >
          <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>

          <div className="flex z-10 gap-20 justify-start items-start">
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"mdi:checkbox-marked-outline"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">100 +</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                successful visas in 2023
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"icon-park-outline:message-success"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">14</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                Success Start Up Visa
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"cil:happy"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">95 %</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                happy clients
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"game-icons:trophy-cup"}
                className="text-5xl cursor-pointer rounded-full py-2 px-2"
              />
              <span className="text-4xl">Top 1</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                Consultants in Saskatchewan
              </span>
            </div>
          </div>
        </Glass>
      </Container>
    </>
  );
}

export const appointment = [
  {
    id: 1,
    title: "Government of Canada Licensed",
    description:
      "We are authorized to legally represent our clients' files, working directly with the Immigration Department of Canada and the Government of Canada. Our RCIC experts ensure that our clients' files are processed accurately, legally, and securely.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Proven High Success Rate",
    description:
      "This is achieved through a personalized strategy for each of our clients. Each file is analyzed specifically, identifying strengths and weaknesses that need to be addressed. Our wealth of experience helps us anticipate and provide proactive solutions to shorten processing times and ensure success.",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Years Of Experience",
    description:
      "GreenTech Resource Worldwide Canada is a Canada-based company led by Immigration Expert Mr. Manoj Goswami, the founder and CEO of the company. With an educational background and over 20 years of working experience in Canada, he and his team have a deep understanding of the labor market, culture, and a profound knowledge of Canadian Immigration and Citizenship laws.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Reasonable cost guaranteed quality",
    description:
      "At GreenTech Resource Worldwide Canada, we offer high-quality immigration services at affordable rates, ensuring your journey towards a new beginning is both accessible and excellent. We have transparent refund policy, emphasizing our commitment to your satisfaction. Your dreams of a new life are well within your reach with GreenTech Resource Worldwide Canada by your side.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];
