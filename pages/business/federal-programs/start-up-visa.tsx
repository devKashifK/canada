import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { FAQ } from "@/components/ui/faq";
import { FeatureSection } from "@/components/ui/feature";
import HoverCard from "@/components/ui/hover-card";
import { truncateTextHeading } from "@/components/ui/newsCard";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { umask } from "process";

export default function StartUpVisa() {
  return (
    <Container className="flex flex-col gap-10">
      <Title
        title={"Benefits of SUV Program"}
        description={
          "The Start-Up Visa (SUV) program in Canada offers several benefits to entrepreneurs and innovative start-ups looking to establish themselves in Canada with key benefits"
        }
      />
      <div className="flex gap-6 ">
        <HoverCard
          title={"DIRECT PATH TO PERMANENT RESIDENCE (PR CanADA)"}
          color="bg-yellow-400"
          icon={"iconamoon:delivery-free-light"}
          description={
            "Up to 5 families can live, study and work while PR in process with 1 single business"
          }
        />
        <HoverCard
          color="bg-green-400"
          title={"Hassle-free Path"}
          icon={"arcticons:netbenefits"}
          description={
            "No minimum investment required No exploratory trip required No requirement to invest your own money in the business No net worth verification"
          }
        />
        <HoverCard
          color="bg-sky-400"
          title={"A SECURE CHOICE"}
          icon={"material-symbols:lock-reset"}
          description={
            "Retain permanent residency status even in the event of business failure"
          }
        />
      </div>

      <Glass className="px-8 flex flex-col gap-8">
        <Title
          title={"Benefits for your family"}
          description={
            "Your entire family, including your spouse and children under 22 years of age (at the time of submitting the provincial nomination application), will receive a Permanent Resident Card in Canada and enjoy most of the benefits like Canadian citizens."
          }
        />

        <div className="px-6 py-4 rounded-md flex flex-col gap-4">
          <Title
            subtitle="Work"
            title={
              <p className="text-4xl text-black/50 w-full text-left pt-3">
                While waiting for permanent residency, your family can apply to
                come, work and study in Canada
              </p>
            }
          />
          <p className="text-sm text-black/60 text-left">
            With provincial nomination, your entire family, including your
            spouse and children under 22 years of age (at the time of submitting
            the provincial nomination application), can submit for Canada
            Permanent Resident to enjoy most of the benefits like Canadian
            citizen
          </p>
          <p className="text-sm text-black/60 text-left ">
            During the wait for permanent residency, your family can apply to
            come, work and study in Canada
            <ul className="pl-6 list-disc">
              <li>Free access to elementary and highschool</li>
              <li>Legal protection under Canadian laws</li>
            </ul>
          </p>
          <p className="text-sm text-black/60 text-left ">
            When you become Canada Permanent Resident
            <ul className="pl-6 list-disc">
              <li>
                Freedom to live, study, and work across the entire Canadian
                territor
              </li>
              <li>Access to social welfare</li>
              <li>
                Eligibility to apply for Canadian citizenship after the waiting
                period. Qualify to apply forCanadian citizenship, own the 6th
                strongest passport globally, enjoy visa-free or direct ETA
                access to 185 countries
              </li>
              <li>
                With PR, university tuition fees are only one-third of what
                international students pay, with no restrictions on schools and
                programs
              </li>
            </ul>
          </p>
        </div>
      </Glass>

      <Title
        title={"Eligibility"}
        description={
          "Meeting the program's eligibility criteria and demonstrating the potential for business success in Canada are key factors in the selection process"
        }
      />
      <div className="flex flex-col gap-2">
        {startUpFAQ.map((item) => (
          <FAQ description={item.description()} title={item.question} />
        ))}
      </div>

      <div>
        <FeatureSection title="SUV ROADMAP" subtitle="RoadMap">
          {features.map((item, index) => (
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                {item.icon}
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">{item.title}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {truncateTextHeading(item.description, 14)}
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex bg-green-400 px-4 rounded-full font-light items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          ))}
        </FeatureSection>
      </div>
      <div>
        <Title
          title={"List of Designated Organization"}
          description={
            "The list is subjected to be updated without prior notification. Please contact us for consultant."
          }
        />

        <div className="flex flex-col gap-2">
          {visaFAQ.map((item) => (
            <FAQ description={item.description()} title={item.question} />
          ))}
        </div>
      </div>
      <div className="">
        <Title
          title={"What can we help you?"}
          subtitle="START-UP VISA PROGRAM"
          description="It’s important to choose a reputable and licensed immigration agent or consultant who is knowledgeable about the Start-Up Visa business immigration programs to ensure that applicants receive accurate and up-to-date information and guidance throughout the process. "
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {featuresBottom.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

const featuresBottom = [
  {
    id: 1,
    title: "Eligibility Assessment",
    description:
      "Our experts evaluate your eligibility, ensuring you meet program requirements.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Business Plan Development",
    description:
      "Our experts in Business Immigration Team can assist in developing a strong and comprehensive business plan. A well-prepared business plan is a crucial component for the success of Start Up Visa program. We assist you in crafting a strong business plan and provide presentation coaching to help applicants perform well during the pitching with the incubator.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title:
      "Connecting with Designed Organization and providing guidance on Start Up Visa Program",
    description:
      "We connect you with organizations that can support your business We can provide guidance on how to fulfill these requirements, refine presentation deck and interview coaching to increase the chance of receiving Letter of Support",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Application Completion",
    description:
      "Our RCIC can help applicants navigate the application process, ensuring that all required documentation is correctly completed and submitted. We also provide ongoing support and guidance throughout the application process, ensuring that applicants are well-prepared and informed at every stage",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];

const features = [
  {
    id: 1,
    title: "Assessment & Intake",
    description:
      "Conduct an initial assessment based on the intake criteria with Business Immigration experts of GreenTech Resources Worldwide Canada",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Business Concept & Incubator selection",
    description:
      "Develop and refine the innovative business concepts. Select suitable incubator and prepare Pitch deck",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Designated Institution Pitch",
    description:
      "Present and obtain a commitment – Letter of Support from a designated Canadian organization.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Apply TR and PR",
    description:
      "Meet eligibility requirements to submit SUV program application for temporarily residency (TR) and permanent residency (PR)",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
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

const visaFAQ = [
  {
    id: 1,
    question: "Venture Capital Funds",
    description: () => (
      <ul className="list-disc px-6">
        <li>7 Gate Ventures</li>
        <li>BCF Ventures</li>
        <li>BDC Venture Capital</li>
        <li>Celtic House Venture Partners</li>
        <li>Celtic House Venture Partners</li>
        <li>Golden Venture Partners Fund, LP</li>
        <li>Impression Ventures</li>
        <li>Innovation Platform Capital International LP</li>
        <li>iNovia Capital Inc.</li>
        <li>Lumira Ventures</li>
        <li>Nova Scotia Innovation Corporation (o/a Innovacorp)</li>
      </ul>
    ),
  },
  {
    id: 2,
    question: "Angel Investor Groups",
    description: () => (
      <ul className="list-disc px-6">
        <li>Canadian International Angel Investors</li>
        <li>Ekagrata Inc.</li>
        <li>Golden Triangle Angel Network</li>
        <li> Golden Triangle Angel Network</li>
        <li> Keiretsu Forum Canada</li>
        <li>Oak Mason Investments Inc.</li>
        <li> Southeastern Ontario Angel Network</li>
        <li> TenX Angel Investors Inc.</li>
        <li> VANTEC Angel Network Inc.</li>
        <li>York Angel Investors Inc.</li>
      </ul>
    ),
  },
  {
    id: 3,
    question: "Business Incubators",
    description: () => (
      <ul className="list-disc px-6">
        <li>Alacrity Foundation</li>
        <li>Alberta Agriculture and Forestry</li>
        <li>Agrivalue Processing Business Incubator</li>
        <li>Food Processing Development Centre</li>
        <li>
          Biomedical Commercialization Canada Inc. (operating as Manitoba
          Technology Accelerator)
        </li>
        <li>Creative Destruction Lab</li>
        <li>Empowered Startups Ltd.</li>
        <li>Extreme Innovations</li>
        <li>Genesis Centre</li>
        <li>Highline BETA Inc.</li>
        <li>Innovacorp</li>
        <li>Interactive Niagara Media Cluster o/a Innovate Niagara</li>
        <li>Invest Ottawa</li>
        <li>Knowledge Park o/a Planet Hatch</li>
        <li>LatAm Startups</li>
      </ul>
    ),
  },
];

const startUpFAQ = [
  {
    id: 1,
    question: "Qualifying Business",
    description: () => (
      <ul className="list-disc px-6">
        <li>When committing: Each applicant owns 10%+ voting rights.</li>
        <li>
          When granted permanent residence: Actively manage business in Canada,
          essential operations and incorporated in Canada.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    question: "Letter of Support",
    description: () => (
      <p>
        Obtain a support letter from designated organization: Start-up
        Incubators, Angel Investor Group or Venture Capital Funds
      </p>
    ),
  },
  {
    id: 3,
    question: "Language Proficiency",
    description: () => (
      <p>
        Meet the minimum CLB 5 in either English or French in all 4 skills
        listening,reading,writing and speaking
      </p>
    ),
  },
];
