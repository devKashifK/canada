import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "../immigration/express-entry/federal-skilled-worker";

export default function WorkPermit() {
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
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Work Permits (WP)
              </h3>
              <Title subtitle="Types of Work Permits" />

              <p className="text-sm text-black/60 text-left">
                Working in Canada typically requires foreign nationals to obtain
                a work permit. There are several different types of work permits
                available in Canada. Here are some common types
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <Feature key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </Glass>
      </Container>
      <Container px-6>
        <Title subtitle="How to apply for a Work Permit" />

        <p className="text-sm text-black/60 text-left">
          Applying for a work permit in Canada can be a multi-step process,
          depending on your situation and the type of work permit you require.
          Here are the general steps to follow
        </p>
        <div className="flex flex-col gap-2">
          {workPermitFaq.map((item) => (
            <FAQ description={item.description()} title={item.question} />
          ))}
        </div>
      </Container>
      <CTADefault
        title="Take the first step towards your family's Canadian dream
"
        subtitle={
          <p className="text-xl text-white/90">
            Book a consultation today to explore immigration options
            <br />
            and secure your family's future in Canada.
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}
const features = [
  {
    id: 1,
    title: "Closed Work Permit",
    description:
      "Closed Work Permit requires foreign nationals to work for a specific company in Canada",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Open Work Permit",
    description:
      "Open Work Permit allows foreign nationals to work anywhere in Canada and for any employer or in any field. Open work permits are often issued to foreign nationals with family members living, studying, or working in Canada",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },

  {
    id: 3,
    title: "Intra-Company Work Permit",
    description:
      "Intra-Company Transfer is used for special cases, such as foreign employees of a parent company with a branch in Canada",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 4,
    title: "Post-Graduation Work Permit",
    description:
      "Post-Graduation Work Permit is designed for international students who have graduated from Canadian universities, colleges, or vocational schools. This permit allows them to work in Canada for a specified period after completing their studies",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

const workPermitFaq = [
  {
    id: 1,
    question: "Identify the type of work permit you need",
    description: () => (
      <>
        <p>
          Identifying the type of work permit you need is a crucial step in the
          process of working legally in a foreign country, such as Canada. The
          choice of work permit largely depends on the nature and duration of
          your intended employment. Understanding the various categories and
          requirements for work permits is essential to ensure you meet the
          specific criteria and regulations that apply to your situation.
        </p>
        <p>
          It's important to research and consult with immigration authorities as
          GTR Worldwide to determine the right work permit for your needs.
          Ensuring that you have the correct work permit is not only a legal
          requirement but also crucial for your overall work experience, your
          rights, and your ability to take advantage of other opportunities,
          such as pathways to permanent residency in Canada
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "Get a Job Offer/ Provincial Nomination",
    description: () => (
      <>
        <p>
          You'll typically need a job offer from a Canadian employer before
          applying for a work permit (LMIA/ JAL process may needed).
        </p>
        <p>
          Foreigners can apply for a work permit in Canada without a job offer
          under specific circumstances. One of the primary pathways to obtaining
          a work permit without a job offer is through Canada's Express Entry
          system and Provincial Nominee Programs (PNPs).
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "Gather the required documents and submit application",
    description: () => (
      <>
        <p>
          Collect all necessary documents to support your application. These
          documents may include:
          <ul className="pl-6 list-disc">
            <li>A valid passport.</li>
            <li>
              The job offer letter from your Canadian employer, if required.
            </li>
            <li>A Labor Market Impact Assessment (LMIA), if required.</li>
            <li>Educational credentials and qualifications.</li>
            <li>Proof of financial support.</li>
            <li>Passport-sized photos.</li>
            <li>Other supporting documents specific to your application</li>
          </ul>
        </p>
        <p>
          Once you have completed the application form and gathered all
          necessary documents, submit your application through your online
          account. Ensure that you have included all relevant information and
          supporting materials.
        </p>
        <p>
          Properly completing the application and gathering the required
          documents accurately is key to a successful work permit application in
          Canada
        </p>
      </>
    ),
  },
  {
    id: 4,
    question:
      "Pay the required fees and wait for your application to be processed",
    description: () => (
      <p>
        Processing times can vary depending on the type of work permit and your
        home country. You may be asked for an interview or additional
        documentation to support your application.
      </p>
    ),
  },
  {
    id: 5,
    question: "Receive Decision",
    description: () => (
      <p>
        You will receive a decision regarding your work permit application. If
        approved, you will receive a Port of Entry (POE) Letter of Introduction
        or a Temporary Resident Visa (TRV) in your passport, depending on your
        country of residence.
      </p>
    ),
  },
];
