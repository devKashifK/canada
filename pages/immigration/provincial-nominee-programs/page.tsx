import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { features } from "../express-entry/page";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProvincialNomineeProgram() {
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
                  Canada Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                What is PNP?
              </h3>

              <p className="text-sm text-black/60 text-left">
                PNP stands for “Provincial Nominee Program.” It is a Canadian
                immigration program that allows individual provinces and
                territories in Canada to nominate candidates for immigration to
                their specific region.
              </p>
              <p className="text-sm text-black/60 text-left">
                Each province and territory operates its own PNP, with criteria
                and selection processes tailored to meet their unique economic
                and demographic needs. These programs enable provinces and
                territories to address specific labor market and population
                goals by selecting individuals who can contribute to their local
                communities and economies.
              </p>
              <p className="text-sm text-black/60 text-left">
                Successful candidates nominated through a PNP are typically
                eligible to apply for Canadian permanent residence through a
                streamlined process.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {countriesProgram.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="Express Entry"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                What can we help you?
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              GreenTech Resources Worldwide Canada can assist you in increasing
              your Comprehensive Ranking System (CRS) score for Express Entry in
              several ways:
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}

const countriesProgram = [
  {
    id: 1,
    title: "Sasketchewan SINP",
    description: "Saskatchewan Immigrant Nominee Program (SINP)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Ontario OINP",
    description: "Ontario Immigrant Nominee Program (OINP)",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "British Columbia BC PNP",
    description: "British Columbia Provincial Nominee Program (BC PNP)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 4,
    title: "Alberta AINP",
    description: "Alberta Advantage Immigration program (AAIP)",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 5,
    title: "Manitoba MPNP",
    description: "Manitoba Provincial Nominee Program (MPNP)",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 6,
    title: "Atlantic Immigration AIPP",
    description: "Atlantic Immigration Program(AIPP)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 7,
    title: "Prince Edward Island PEI PNP",
    description: "Prince Edward Island Provincial Nominee Program (PEI PNP)",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 8,
    title: "Nova Scotia NSNP",
    description: "Nova Scotia Nominee Program (NSNP)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
