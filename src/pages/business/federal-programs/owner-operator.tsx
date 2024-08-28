import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import HoverCard from "@/components/ui/hover-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { title } from "process";
import React from "react";

export default function OwnerOperator() {
  return (
    <Container className="flex flex-col gap-20">
      <Glass className="flex gap-8 flex-col py-10 px-10">
        <Title title={"What is LMIA?"} />
        <div className="flex flex-col gap-6 px- text-left">
          <p className="text-black/60 text-left">
            A Labour Market Impact Assessment (LMIA) is a document that an
            employer in Canada may need to get before hiring a foreign worker..
          </p>
          <p className="text-black/60 text-left">
            A positive LMIA will show that there is a need for a foreign worker
            to fill the job. It will also show that no Canadian worker or
            permanent resident is available to do the job. A positive LMIA is
            sometimes called a confirmation letter.
          </p>
          <p className="text-black/60">
            If the employer needs an LMIA, they must apply for one. Once an
            employer gets the LMIA, the worker can apply for a work permit. To
            apply for a work permit, a worker needs:
          </p>
          <ul className="list-disc text-left px-6 text-black/60">
            <li className="text-left">a job offer letter</li>
            <li>a contract</li>
            <li>a copy of the LMIA, and,</li>
            <li>the LMIA number.</li>
          </ul>
        </div>
      </Glass>
      <div>
        <div className="flex w-full flex-col gap-4 justify-start items-start ">
          <Title title={"Eligibility"} description={"What are the steps?"} />
          {Eligibility.map((item) => (
            <div className="text-left flex gap-2 items-start justify-center">
              <Icon
                icon={"material-symbols:library-add-check-rounded"}
                className="mt-1"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Title
        title={"Ower operator lmia"}
        subtitle="What can we help you?"
        description={
          "GreenTech Resource Worldwide Canada can help with all the resource and support during the process to help you choose the right place to settle in Canada and support you with launching or purchasing your business. Not only that, we will ensure to make a process of your immigration documents are properly filed with quality and professional manners."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Container>
  );
}

const features = [
  {
    id: 1,
    title: "Eligibility Assessment",
    description:
      "Our GTR Business Immigration experts evaluate your eligibility, ensuring you meet program requirements.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Demonstrating Significant Benefit",
    description:
      "We guide you in showing how your business activities will benefit Canada.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },

  {
    id: 3,
    title: "Job Offer Assistance/ Job offer excemption",
    description:
      "We can help you connect with employers to secure a valid job offer or make an exemption if you are entrepreneur or self-employed worker in the fields of arts, culturals or athelics.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. We also provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

export const Eligibility = [
  {
    id: 1,
    title:
      "Structure ownership relationships between the Company and Temporary Foreign Worker Submit Owner Operator",
  },
  {
    id: 2,
    title: "LMIA application to the Government of Canada",
  },
  {
    id: 3,
    title:
      "Apply for and receive Work Permit at Canada Land Border Crossing based on LMIA",
  },
  {
    id: 4,
    title: "Apply for Express Entry Federal Skilled Worker",
  },
  {
    id: 5,
    title: "Invitation to apply for Permanent Residence",
  },
  {
    id: 6,
    title: "Application for Permanent Residence",
  },
];
