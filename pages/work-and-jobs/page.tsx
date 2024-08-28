import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import Jobs from "@/components/ui/jobs";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function WorkAndJobs() {
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
                Work In Canada
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canada with strong economy, quality of life, and inclusive
                society make it an appealing destination for those seeking
                career growth and a high standard of living for their family.
                However, navigating the immigration process and meeting language
                requirements are essential aspects.
              </p>

              <p className="text-sm text-black/60 text-left">
                Canada's job market is diverse, covering various industries such
                as technology, healthcare, finance, natural resources, and more.
                This diversity allows individuals to find employment that
                matches their skills and qualifications.
              </p>
              <Title subtitle="Route from employment in Canada to achieve Permanent Residency in Canada" />
              <p className="text-sm text-black/60 text-left">
                Canada offers several immigration pathways for skilled workers
                from around the world, such as the Express Entry system and
                Provincial Nominee Programs.
                <ul className="pl-6 list-disc">
                  <li>Express Entry</li>
                  <li>Provincial Nominee Programs</li>
                </ul>
              </p>

              <Title subtitle="Work Permits" />

              <p className="text-sm text-black/60 text-left">
                Working in Canada typically requires foreign nationals to obtain
                a work permit. There are several different types of work permits
                available in Canada. Here are some common types
                <ul className="pl-6 list-disc">
                  <li>Open Work Permit</li>
                  <li>Closed Work Permit</li>
                  <li>Intra-company work permit</li>
                  <li>Post-graduated Work permit</li>
                </ul>
              </p>
              <p className="text-sm text-black/60 text-left">
                GreenTech Resources Worldwide Canada can assist you in
                navigating the correct application process for the specific type
                of work permit you are interested in and ensure that you meet
                the necessary requirements.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <CTADefault
        title="Find a Job in Canada
"
        subtitle={
          <p className="text-xl text-white/90">
            Finding a job in Canada as a foreign national can be a challenging
            but it is rewarding process. View available
            <br />
            jobs of GreenTech Resources Worldwide Canada
          </p>
        }
        image={"/about.png"}
      />
      <Container>
        <Title subtitle="Work Permits" />
        <p className="text-sm text-black/60 text-left">
          Ensure you're eligible to work in Canada with the required work permit
          or immigration status. Explore immigration options as Express Entry or
          Provincial nominee programs
        </p>
        <Title subtitle="Resume and Cover Letter" />
        <p className="text-sm text-black/60 text-left">
          Create a tailored resume and cover letter which highlighting your
          relevant skills and experience in Canadian style
        </p>
        <Title subtitle="Online Job Boards" />
        <p className="text-sm text-black/60 text-left">
          Use websites like Indeed, LinkedIn ... to search for job openings. You
          should also try CIC Canada Jobs Bank which contains thousands of real
          jobs for foreigners.
        </p>
        <Title subtitle="Apply for Jobs" />
        <p className="text-sm text-black/60 text-left">
          Start applying to positions that match your qualifications and be
          ready to discuss your skills and experiences during job interviews. Do
          not forget to politely follow up after applying or interviewing to
          express your interest and keep updated on immigration policies and
          Canada job market trends to adapt your job search strategy
        </p>
      </Container>
      <Container>
        <Glass className="flex flex-col px-8 py-6">
          <Title subtitle="Benefits for Foreign Workers in Canada" />
          <p className="text-sm text-black/60 text-left">
            The benefits available to foreign workers in Canada can vary, but
            some common benefits and considerations for them include below. The
            specific benefits and eligibility criteria for foreign workers can
            vary based on factors such as the type of work permit, the province
            or territory in which you work, and your individual circumstances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {featureswork.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="For Employers"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              Are you looking for LMIA/PNP applicants?
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          Hiring foreign workers adds fresh skills and perspectives, enhancing
          business innovation and diversity.{" "}
        </p>
        <p className="text-sm text-black/60 text-left">
          GreenTech Resources Worldwide Canada provides FREE CONSULTANT and
          comprehensive support for employers
          <ul className="pl-6 list-disc">
            <li>Assessing your hiring requirements</li>
            <li>Ensure of PNP/LMIA registration for employers</li>
            <li>Planning, searching, and screening suitable candidates</li>
            <li>Streamlining the interview process</li>
            <li>Assisting with employment offers</li>
            <li>Handling PNP/LMIA and work permit procedures for candidates</li>
            <li>Guiding candidates through settlement processes</li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title
          subtitle="Work and Jobs"
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
        </p>
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
      <Jobs />
    </>
  );
}

const featureswork = [
  {
    id: 1,
    title: "Public Heathcare",
    description:
      "Foreign workers in Canada can access the public healthcare system, offering comprehensive coverage for essential medical services, including doctor visits, hospital care, prescription medications, and mental health support. The system also provides preventive care, maternity and pediatric services, and immediate access to emergency medical services. This coverage extends to family members in many provinces.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Family Sponsorship",
    description:
      "Foreign workers in Canada can sponsor their families to come, work, and study in Canada. The children of foreign workers have the right to use Canada's public education system (elementary and high school tuition is free",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Employment standards",
    description:
      "Foreign workers in Canada have the right to be ensured employment standards and workplace safety protections similar to Canadian citizens. This includes minimum wage, maximum working hours, overtime pay, and safe working conditions",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "PR eligibility",
    description:
      "After a period of work and meeting the necessary conditions, foreign workers can apply for permanent residency in Canada.This is often done through Provincial or Territorial Nominee Programs (PNPs) or Express Entry (CEC)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];
