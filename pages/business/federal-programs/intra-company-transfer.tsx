import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function IntraCompanyTransfer() {
  return (
    <Container className=" flex flex-col gap-10">
      <Glass className="flex flex-col gap-3">
        <p>
          This program is designed to facilitate the temporary relocation of
          employees who possess specialized knowledge, skills, or expertise, and
          it's a valuable tool for global businesses to foster expertise
          exchange and streamline international operations.
        </p>
        <p>
          The Intra-company transfers stream offers an alternative route for
          foreign nationals to obtain a work permit without needing an LMIA.
        </p>
      </Glass>
      <div className="flex flex-col gap-4 px-6 justify-center items-center">
        <Title
          title={"How can we help you?"}
          subtitle="INTRA-COMPANY tRANSFER"
          description="GTR Worldwide can assist you by providing a range of valuable services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
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
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. We also provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },

  //   {
  //     id: 5,
  //     title: "Start your journey in Canada",
  //     description:
  //       "Personalize the settings as you wish with intuitive instructions & helpful guides.",
  //     icon: (
  //       <Icon
  //         icon="streamline:quality-education-solid"
  //         className="text-6xl w-[50px]"
  //       />
  //     ),
  //   },
];
