import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function SelfEmployedPersons() {
  return (
    <>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Overview</h5>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <p className="text-sm text-black/60 text-left">
                IMP program has LMIA exemption that goes with the name “C11”.
                Exemption code C11 lets entrepreneurs and self-employed
                individuals apply for a work permit that does not require LMIA.
              </p>
              <p className="text-sm text-black/60 text-left">
                The C11 work permit is granted if you are business owner or
                self-employed person with good business plan and can prove the
                significant bềnits to Canadians from the business.
              </p>
              <p className="text-sm text-black/60 text-left">
                Ownership of the business Aplicant should own at least 51% of
                the business. If you have less than it, you must apply for a
                Worker Visa as an employee (LMIA needed).
              </p>
              <p className="text-sm text-black/60 text-left">
                Prove the significant benefits to Canada (support the economy,
                job creation, development of a region.. etc; advance Canadian
                industries with technologies, services....)
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col gap-4 px-10 py-10">
          <Title
            subtitle="FEDERAL SELF-EMPLOYEE WORKER"
            title={"What can we help you?"}
            description="GreenTech Resource Worldwide Canada can assist with Federal immigration by providing a range of valuable services to applicants looking to immigrate to Canada as self-employee workers in the fields of culture, arts, and athletics"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>

      <CTADefault
        title="If you intend to live in Quebec"
        image={"/toronto.jpg"}
      />
    </>
  );
}

const features = [
  {
    id: 1,
    title: "Guidance on Federal Requirements",
    description:
      "Our Business Immigration experts evaluate your eligibility, ensuring you meet program requirements.",
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
