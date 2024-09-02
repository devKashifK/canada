import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import HoverCard from "@/components/ui/hover-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { title } from "process";
import React from "react";

export default function BenefitToCanada() {
  return (
    <Container className="flex flex-col gap-20">
      <Glass className="flex gap-8 flex-col py-10">
        <div className="flex flex-col gap-6 px-10">
          <p className="text-black/60">
            C10 is a job-specific work permit. This indicates that individuals
            who receive this permit can work exclusively for the specified
            employer. To obtain the C10 work permit, applicants must secure a
            job offer from a Canadian employer. Alternatively, foreign
            professionals may qualify for this work permit if they are
            entrepreneurs or meet the IRCC criteria for self-employed
            individuals (in fields of culture, arts, and athletics).
          </p>
          <p className="text-black/60">
            This provision is typically used for temporary situations rather
            than permanent immigration. Foreign professionals can use the C10
            work permit to come to Canada and gain valuable work experience.
            They can then use this experience to apply for permanent residence
            through Express Entry’s Canadian Experience Class program
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full gap-3">
          <HoverCard
            color="bg-sky-400"
            icon={
              "streamline:entertainment-control-button-record-3-button-television-buttons-movies-record-tv-video-controls"
            }
            title={"Economic Contributions"}
            description={
              "Foreign artists, performers, or cultural figures who can enrich Canada's cultural landscape may be considered"
            }
          />
          <HoverCard
            color="bg-yellow-400"
            icon={"healthicons:agriculture"}
            title={"Cultural or Artistic Contributions"}
            description={
              "Individuals with skills, knowledge, or resources that can boost the Canadian economy as business investors, entrepreneurs, or highly skilled workers"
            }
          />
          <HoverCard
            color="bg-red-400"
            icon={"entypo-social:smashing"}
            title={"Humanitarian or Social Reasons"}
            description={
              "In some cases, individuals with compelling humanitarian or social reasons may be granted permits"
            }
          />
          <HoverCard
            color="bg-green-400"
            icon={"arcticons:netbenefits"}
            title={"Other Significant Benefits"}
            description={
              "The provision is flexible and can apply to various scenarios where the individual's presence in Canada would bring substantial advantages"
            }
          />
        </div>
      </Glass>
      <div>
        <div className="flex w-full flex-col gap-4 justify-start items-start ">
          <Title
            title={"Eligibility"}
            description={
              "You should also demonstrate the benefit of their activities to Canada's culture, society, and economy and show groundwork in Canada, like establishing business contacts, accommodation, and business location for self-employed individuals."
            }
          />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Container>
  );
}

const Eligibility = [
  {
    id: 1,
    title:
      "A job offer from a Canadian employer is mandatory, except for entrepreneurs and self-employed individuals",
  },
  {
    id: 2,
    title: "Have adequate language skills",
  },
  {
    id: 3,
    title: "Academic qualifications",
  },
  {
    id: 4,
    title: "Relevant work experience",
  },
  {
    id: 5,
    title:
      "Proof of significant contributions, awards, patents, academic publications, and a comprehensive business plan is crucial",
  },
];

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
    id: 4,
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
