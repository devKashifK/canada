import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
// import { features } from "process";
import { Feature } from "@/components/ui/cards-set";
import { workersList } from "../immigration/express-entry/federal-skilled-trade";
import { ServicesCard } from "@/components/ui/services-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "../immigration/express-entry/federal-skilled-worker";

export default function StudyInCanada() {
  return (
    <>
      <Container>
        <Title
          subtitle="Study in Canada"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              Studying abroad is a lengthy journey that requires thorough
              preparation. Here are some features of studying in Canada.
            </p>
          }
        />
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-2 max-w-7xl mx-auto">
            {featuresStudy.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="Working While Studying:"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Working While Studying & Post-Graduation Work Permit (PGWP)
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          <ul>
            <li>
              On-Campus Work: As an international student, you are generally
              allowed to work on-campus without a work permit.
            </li>
            <li>
              Off-Campus Work: You may also be eligible for off-campus work
              permits, which allow you to work off-campus while studying. To
              qualify, you must have a valid study permit and be enrolled
              full-time at a designated learning institution
            </li>
            <li>
              Co-op and Internship Programs: Many Canadian institutions offer
              co-op and internship programs, which provide opportunities for
              hands-on work experience related to your field of study. These
              programs are an excellent way to gain practical skills and make
              valuable industry connections
            </li>
          </ul>
        </p>
      </Container>
      <Container>
        <Title
          subtitle="Post-Graduation Work Permit (PGWP)"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Eligibility
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          After completing a program of study at a designated learning
          institution in Canada, you may be eligible for a Post-Graduation Work
          Permit (PGWP).
        </p>
        <p className="text-sm text-black/60 text-left">
          The length of the PGWP depends on the duration of your program and can
          be valid for up to three years.
        </p>
      </Container>
      <Container>
        <Title
          subtitle="Plan your studies in Canada"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              To plan your studies in Canada, you need to prepare a series of
              important steps
            </p>
          }
        />
        <div className="py-6 ">
          {faqStudy.map((item) => {
            return (
              <FAQ
                title={item.title}
                id={item.id}
                description={item.description()}
              />
            );
          })}
        </div>
      </Container>
      <Container>
        <div className="flex-1 flex flex-col gap-4">
          <Title
            subtitle="PLAN YOUR STUDY IN CANADA"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                Let's GreenTech Resources Worldwide Canada assist you!
              </p>
            }
          />

          <div className="flex flex-col justify-start gap-6">
            <p className="text-sm text-black/60 text-left">
              Studying abroad is a lengthy journey that requires thorough
              preparation. GreenTech Resources Worldwide Canada can assist you
              with the following
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Glass>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-2 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}

const faqStudy = [
  {
    id: 1,
    title: "Set goals and choose a program",
    description: () => (
      <p>
        Define your objectives for studying in Canada. What degree do you want,
        and what do you aim to achieve after graduation? Select a program and a
        suitable school that align with your goals. Canada offers a variety of
        quality institutions and programs.
      </p>
    ),
  },
  {
    id: 2,
    title: "Financial Planning",
    description: () => (
      <p>
        Determine your sources of funding for your studies. Calculate tuition
        fees, living expenses, health insurance, and other costs. Explore
        scholarships and part-time work opportunities to support your finances
      </p>
    ),
  },
  {
    id: 3,
    title: "Gather information and apply to schools",
    description: () => (
      <p>
        Research information about schools and programs in Canada. Apply to the
        institutions you're interested in and participate in the admissions
        process
      </p>
    ),
  },
  {
    id: 4,
    title: "Apply for a study permit",
    description: () => (
      <p>
        After receiving acceptance from a Canadian school, you'll need to apply
        for a Study Permit, which allows you to study in Canada
      </p>
    ),
  },
  {
    id: 5,
    title: "Accommodation and travel planning",
    description: () => (
      <p>
        Plan your accommodation and travel arrangements. Consider options like
        dormitories, homestays, or renting an apartment. Book your flights,
        understand the immigration procedures, and establish a travel schedule
        to Canada
      </p>
    ),
  },
  {
    id: 6,
    title: "Learn about life and culture in Canada",
    description: () => (
      <p>
        Prepare yourself for life in Canada by learning about its culture,
        social norms, and local customs to help you integrate more easily when
        you arrive in the country
      </p>
    ),
  },
];

const featuresStudy = [
  {
    id: 1,
    title: "International High Quality Education",
    description:
      "Canada is known for its top-notch educational institutions. Many universities and colleges consistently rank among the best globally. Canadian degrees and diplomas are recognized and respected worldwide.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Diverse Campuses and Programs",
    description:
      "Canadian campuses are incredibly diverse, with students and faculty from all over the world. This multicultural environment enriches the academic and social experience. Canadian institutions offer a wide range of programs at various levels, from undergraduate to doctoral degrees, in fields like STEM, business, arts, and humanities",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 3,
    title: "Immigration Opportunities for Post-Graduated",
    description:
      "Canada offers various immigration pathways for international students to transition to permanent residency, making it an attractive destination for those seeking long-term opportunities.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
const features = [
  {
    id: 1,
    title: "Assessment and Program Selection",
    description:
      "We will evaluate your profile and recommend study programs that align with your skills, interests, and career objectives",
    icon: (
      <div className="w-full rounded-md flex justify-center items-center">
        <div className="w-[100px] h-[100px] relative">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-100/40 to-cyan-300/40"></div>
          <img
            src="/electric.png"
            className="rounded-full w-full h-full"
            alt=""
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Advising on regulations related to working during study",
    description:
      "We will guide and ensure that you meet all the working requirements while studying in Canada.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Provide guidance / present you to apply Student Visa Application",
    description:
      "We will guide you through the entire process of applying for a student visa, ensuring that you meet all the requirements for studying in Canada. This includes preparing your visa application, providing advice on necessary documentation, and submitting the application to the relevant authorities.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title:
      "Provide guidance / present you to apply Post-Graduation Work Permit (PGWP)",
    description:
      "After you complete your program in Canada, we'll offer guidance on obtaining a Post-Graduation Work Permit (PGWP). The PGWP allows you to work in Canada for up to three years after graduation and provides the opportunity to transition to permanent resident status",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 5,
    title: "Assistance with accommodation and adaptation",
    description:
      "We'll provide information to help you find suitable accommodation in Canada and support you in adapting to life in the country. This includes guidance on Canadian culture, healthcare services, transportation, and other essential amenities.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 6,
    title: "Ensure your family be by with you!",
    description:
      "Provide guidance / present you to apply Open Work Permits and Study Work Permits for Spouses and Dependents who accompany you while studying.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
