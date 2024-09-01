import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/cta";
import { Button } from "@/components/ui/custom";
import { FAQ } from "@/components/ui/faq";
import { FeatureSection } from "@/components/ui/feature";
import HoverCard from "@/components/ui/hover-card";
import { ServicesCard } from "@/components/ui/services-card";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function SelfEmployed() {
  return (
    <Container className="flex flex-col gap-10">
      <div className="flex flex-col py-10 gap-4 text-left text-black/60 px-8">
        <p className="">
          The Québec Self-Employed Program is an attractive option for
          individuals with experience in cultural, artistic, or athletic fields
          who wish to pursue their self-employed career in Québec. It provides a
          pathway to Canadian permanent residency and the opportunity to
          contribute to Québec's vibrant cultural and artistic communities.
        </p>
      </div>
      <FeatureSection
        title={
          "To immigrate to Québec as a self-employed worker, you must meet the following conditions."
        }
        description={
          "With the Québec Entrepreneur Program, you can develop your project either alone or with up to three other people applying to this program for the same project."
        }
        subtitle={"Eligibility"}
        childClass="lg:grid-cols-1"
        className="py-8"
      >
        <div className="flex w-full flex-col gap-4 justify-start items-start ">
          <p className="text-left">List of conditions to be honoured:.</p>
          {quebecFAQ.map((item) => (
            <FAQ description={item.answer} title={item.question} />
          ))}
        </div>
      </FeatureSection>

      <div className="flex flex-col gap-6">
        <Title
          title={"Supporting Organizations"}
          description="To establish and run an innovative business in Québec, you are required to collaborate with a support organization, which could be a business accelerator, business incubator, or a university entrepreneurship center"
        />
        <div className="flex gap-4">
          {points.map((item) => (
            <ServicesCard
              title={item.title}
              description={truncateTextHeading(item.description, 22)}
            />
          ))}
        </div>
      </div>

      <Title
        title={"Process"}
        description={
          "Here are the steps for applying for permanent selection under Québec Entrepreneur Program"
        }
      />

      <div className="flex gap-4">
        <HoverCard
          color="bg-sky-400"
          icon="fa6-brands:wpforms"
          title="Preparing and completing the required forms and documents"
          cta="Learn More"
          //   description="Feeling uncertain"
        />
        <HoverCard
          color="bg-yellow-400"
          icon="material-symbols:mail-rounded"
          title="Preparing and completing the required forms and documents"
          cta="Learn More"
          description="The fees are adjusted on January 1 of each year.
Principal applicant: $1,176
Wife or husband, spouse or common-law partner: $186
Each dependent child: $186"
        />
        <HoverCard
          color="bg-highlight"
          icon="material-symbols:attach-money-rounded"
          title="Send your complete application by mail, in one envelope "
          cta="Learn More"
          description="Direction du regroupement familial et de l’enregistrement Ministère de l’Immigration, de la Francisation et de l’Intégration 
285, rue Notre-Dame Ouest, 4e étage Montréal (Québec) 
H2Y 1T8 CANADA"
        />
      </div>

      <Glass className=" flex flex-col gap-10 px-10">
        <div className="flex-1 flex flex-col gap-2 pt-8 justify-center items-center">
          <Title
            subtitle="Québec Entrepreneur Program"
            title="What can we help you?    "
            description="It’s important to choose a reputable and licensed immigration agent or consultant who is knowledgeable about the Québec immigration programs to ensure that applicants receive accurate and up-to-date information and guidance throughout the process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>

          <Title
            className="justify-center items-center mt-4"
            title={
              <p className="text-2xl text-black/50 w-full text">
                Take the first step towards your family's Canadian dream
              </p>
            }
            description={
              <p className="text-center  text-black/50 w-[70%]">
                For personalized assistance and expert guidance, contact
                GreenTech Resources Worldwide Canada so our experts can help you
                navigate the work permit application process and ensure a smooth
                transition to working in Canada
              </p>
            }
          />
          <Button
            className="py-3 px-6 mt-3"
            icon={
              <div className="flex gap-2 justify-center items-center text-xs ">
                <Icon icon={"mdi:phone"} />
                <span>+1855 477 9797</span>
              </div>
            }
          >
            <span className="text-sm">Book An Appointment</span>
          </Button>
        </div>
      </Glass>
    </Container>
  );
}

const quebecFAQ = [
  {
    id: 1,
    question: "Settle in Québec to work here",
    answer:
      "You must practise your profession or business activities in Québec, alone or with others, with or without paid help.",
  },
  {
    id: 2,
    question: "Have a minimum net worth",
    answer:
      "You must have a net worth of at least CDN$100,000. You can share this net worth with your spouse or common-law partner who is accompanying you to Québec. You must be able to demonstrate the legal origin and accumulation of your net worth.",
  },
  {
    id: 3,
    question: "Make a start-up deposit",
    answer:
      "You will need to make a start-up deposit with a financial institution located in the area where you plan to practise your trade or profession:   ",
  },
  {
    id: 4,
    question: "Obtain enough points in the program’s selection grid",
    answer:
      "You are awarded points for each factor as education, age language .. and criterion on the grid. You must score at least 41 out of 85 points on the grid to meet the cut-off for factors.",
  },
  {
    id: 5,
    question: "Obtain an attestation of learning about democratic values",
    answer:
      "You must obtain your attestation within a maximum of 60 days after receiving this request",
  },
  {
    id: 6,
    question:
      "Obtain the legal right to practise if you are self-employed in a regulated profession",
    answer:
      "If you wish to practise a regulated profession or trade in Québec, you must obtain the legal right to practise, even if you have obtained a degree or license outside of Québec",
  },
];

const points = [
  {
    id: 1,
    title: "Business Accelerator",
    description:
      "An organization with an establishment in Québec that offers support services to individuals whose business projects are designed to grow innovative businesses. In particular, it must provide a service for seeking financing​",
  },
  {
    id: 2,
    title: "Business Incobator",
    description:
      "An organization with an establishment in Québec that offers coaching services to people whose business projects are designed to start innovative businesses",
  },
  {
    id: 3,
    title: "University Entrepreneurship Center",
    description:
      "An organization managed by an institution of higher learning incorporated under the laws of Québec or another province of Canada. It may also be an organization affiliated with such an institution that offers coaching services to entrepreneurs",
  },
];

const features = [
  {
    id: 1,
    title: "Obtain legal right to practice",
    description:
      "We can help you understand the program requirements and eligibility criteria specific to the culture, arts, and athletics fields, guide you on how to access the resources and get the legal right to practise in Québec.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Guidance on Provincial Requirements",
    description:
      "Québec has specific immigration requirements, and we can provide guidance on how to fulfill these requirements, including the completion of a Québec Selection Certificate (CSQ) application. We assist in calculating the applicant's points under the Québec immigration system, helping to ensure that you meets the minimum required points for eligibility",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. This includes assistance in preparing and organizing the necessary forms and supporting materials.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Follow-Up and Communication and Ongoing Support",
    description:
      "We provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];
