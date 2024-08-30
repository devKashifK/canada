import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { CardDemo } from "@/components/ui/animated-card";
import { Icon } from "@iconify/react/dist/iconify.js";
import HoverCard from "@/components/ui/hover-card";
import { color } from "framer-motion";

export default function InDemandJobs() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">
                  GREENTECH RESOURCES WORLDWIDECANADA
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                We are hiring - JAL/LMIA available
              </h3>

              <p className="text-sm text-black/60 text-left">
                GreenTech Resources Worldwide Canada's partners currently have a
                demand for hiring foreign workers for the following positions.
                Please contact us to submit your application and arrange for
                interviews
              </p>
              <div className="grid grid-cols-3 gap-4   h-max justify-center items-center">
                {data.map((item, index) => (
                  <CardDemo>
                    <div className="flex flex-col gap-0 w-full px-6 relative z-10">
                      <h5 className="text-4xl text-left text-highlight">
                        {item.title}
                      </h5>
                      {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
                    </div>
                    <div className="flex gap-1.5 flex-col justify-start items-start w-full px-6 relative z-10">
                      {item.list.map((item, index) => (
                        <li className="list-none flex gap-1 justify-start items-start text-left text-black/60">
                          <div className="w-6 mt-2">
                            <Icon
                              icon={
                                "material-symbols:bookmark-check-outline-rounded"
                              }
                            />
                          </div>
                          <div className=" flex justify-start">
                            {item.title}
                          </div>
                        </li>
                      ))}
                    </div>
                  </CardDemo>
                ))}
              </div>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        {" "}
        <Title subtitle="Jobs in high demand in Canada" />
        <div className="grid lg:grid-cols-3 justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
          {jobsConfig.map((item, index) => (
            <HoverCard
              className="h-80"
              color={item.color}
              icon={
                "streamline:entertainment-control-button-record-3-button-television-buttons-movies-record-tv-video-controls"
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
      <Container>
        {/* <Title
          subtitle="Student direct stream (SDS"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              What can we help you?
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          Immigration policies can change over time, so it’s essential to stay
          updated with us for the latest information from the respective
          provincial or territorial immigration authorities.
        </p>
        <p className="text-sm text-black/60 text-left">
          Consult GreenTech Resources Worldwide Canada experts to understand
          specific requirements and eligibility for these pathways based on your
          circumstances
        </p> */}
        <CTADefault
          title="CIC Canada Jobs Bank
"
          subtitle={
            <p className="text-xl text-white/90">
              Finding a job in Canada as a foreign national can be a challenging
              but it is rewarding process. Surf for your dream job at CIC Canada
              Job Bank
            </p>
          }
          image={"/service.jpg"}
        />
      </Container>
    </>
  );
}

const data = [
  {
    id: 1,
    title: " Saskatchewan",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Pharmacy technical assistant",
      },
      {
        id: 2,
        title: "Retail store supervisor",
      },
      {
        id: 3,
        title: "Retail store stocker",
      },
      {
        id: 4,
        title: "Admin assistant",
      },
      {
        id: 5,
        title: "Book keeper",
      },
      {
        id: 6,
        title: "Cooks and chefs",
      },
      {
        id: 7,
        title: "Food service supervisor",
      },
      {
        id: 8,
        title: "Restaurant manager",
      },
      {
        id: 9,
        title: "Shipper receiver",
      },
      {
        id: 10,
        title: "Sales professionals",
      },
    ],
  },
  {
    id: 2,
    title: " LMIA",
    image: "/aaa.jpg",

    list: [
      {
        id: 1,
        title: "Post office clerk",
      },
      {
        id: 2,
        title: "Beauty products sale professional",
      },
      {
        id: 3,
        title: "Cashiers",
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    image: "/aaa.jpg",

    list: [
      {
        id: 1,
        title: "Truck drivers",
      },
      {
        id: 2,
        title: "Meat cutters",
      },
      {
        id: 3,
        title: "Meat processing plant worker",
      },
      {
        id: 4,
        title: "Welders",
      },
      {
        id: 5,
        title: "Construction helper",
      },
    ],
  },
];
const jobsConfig = [
  {
    id: 1,
    color: "bg-sky-400",
    title: "Hospitality and Tourism",
    description:
      "Chefs and Cooks, Hotel staffs, Tour guides, Travel agents and Event planners",
  },
  {
    id: 2,
    color: "bg-yellow-400",
    title: "Transportation and Logistics",
    description: "Truck drivers, Logistic staffs and Warehouse workers",
  },
  {
    id: 3,
    color: "bg-red-400",
    title: "Business and Management",
    description:
      "Business analysts, Management consultants, Project managers and Marketing specialist",
  },
  {
    id: 4,
    color: "bg-green-400",
    title: "Healthcare",
    description:
      "Doctors, Nurses, Pharmacists, Healthcare technicians and Medical laboratory technologists",
  },
  {
    id: 5,
    color: "bg-sky-400",
    title: "IT ",

    description:
      "Software developers, Data analysts, Cybersecurity experts, IT managers and Network engineers, ",
  },
  {
    id: 6,
    color: "bg-yellow-400",
    title: "Skilled Trades",
    description:
      "Electricians, Plumbers, Carpenters, Welders and Construction workers",
  },
  {
    id: 7,
    color: "bg-red-400",
    title: "Engineering",
    description:
      "Civil engineers, Mechanical engineers, Electrical engineers and Environmental engineers",
  },
  {
    id: 8,
    color: "bg-green-400",
    title: "Agriculture/ Agri-food",
    description:
      "Farm workers, Food processors, Agricultural inspectors and Farm managers",
  },
  {
    id: 9,
    color: "bg-sky-400",
    title: "Education",
    description:
      "Teachers, Professors, Educational administrators and School education professionals ",
  },
];
