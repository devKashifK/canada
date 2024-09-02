import { albertaImmigrationAAIP } from "@/assets/data/alberta-immigration-aaip";
import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import { Feature } from "@/components/ui/cards-set";
import Container from "@/components/ui/container";
import { truncateTextHeading } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "../express-entry/federal-skilled-worker";

export default function Alberta() {
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
                  Canada Provincial Nomination Program
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Alberta Advantage Immigrant Program (AAIP)
              </h3>

              <p className="text-sm text-black/60 text-left">
                Starting from March 16, 2022, the Alberta Immigrant Nominee
                Program (AINP) has been renamed the Alberta Advantage
                Immigration Program (AAIP). The Alberta Advantage Immigration
                Program (AAIP) encompasses various smaller programs
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      {/* <FeatureSection
        subtitle={"Express Entry"}
        title={"How can we help you?"}
        description={
          "GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
        }
      >
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
      <FeatureSection2
        title={"How can we help you?"}
        description={
          "GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
        }
      >
        {features.map((item) => (
          <div className="space-y-3 flex justify-start items-start flex-col">
            {item.icon}
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {item.title}
            </h1>
            <p className="text-gray-500 text-left dark:text-gray-300">
              {truncateTextHeading(item.description, 18)}
            </p>
            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-highlight capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </FeatureSection2> */}
      <Container className="flex flex-col gap-5">
        <Title
          subtitle="Roadmap"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              How to participate ?
            </p>
          }
        />
        <div className="py-6 ">
          {faqAlberta.map((item) => {
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
        <Title
          subtitle="Benefits"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Benefits for your family
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          With provincial nomination, your entire family, including your spouse
          and children under 22 years of age (at the time of submitting the
          provincial nomination application), can submit for Canada Permanent
          Resident to enjoy most of the benefits like Canadian citizen
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
              strongest passport globally, enjoy visa-free or direct ETA access
              to 185 countries
            </li>
            <li>
              With PR, university tuition fees are only one-third of what
              international students pay, with no restrictions on schools and
              programs
            </li>
          </ul>
        </p>
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
            {featuresPage.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Glass>
      </Container>
    </>
  );
}

const faqAlberta = [
  {
    id: 1,
    title: "Alberta Opportunity Stream",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Alberta express entry",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Alberta Business Immigration Program for Entrepreneur",
    description: () => (
      <>
        <p>
          In general, the pathways of Alberta Business Immigration Nominee
          Programs for Entrepreneurs include the following steps:
        </p>
        <ul className="pl-6 list-disc">
          <li>
            Expression of Interest (EOI) Submission: You start by submitting
            your Expression of Interest to the program.
          </li>
          <li>
            EOI Selection and Invitation: The program officials evaluate your
            EOI based on specific criteria, and if you are selected, you receive
            an Invitation to Apply.
          </li>
          <li>
            Business Establishment: After being invited, you work on
            establishing your business in Alberta.
          </li>
          <li>
            Nomination: Once your business is established and meeting program
            requirements, you seek nomination from Alberta.
          </li>
          <li>
            Post-Nomination Application: You then submit your permanent
            residence application, and upon approval, you and your family can
            enjoy the benefits of permanent residency in Canada.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Alberta express entry",
    description: () => (
      <ul className="pl-6 list-disc">
        <li>
          Eligibility Check: Ensure you meet Alberta’s eligibility criteria,
          including work experience, language proficiency, and occupation. A
          full-time job in Alberta is mandatory.
        </li>
        <li>
          Submit Expression of Interest (EOI): Create an EOI profile online,
          detailing your qualifications.
        </li>
        <li>
          Receive Notification of Interest (NOI): If selected, you’ll receive an
          NOI from Alberta, inviting you to apply for provincial nomination.
        </li>
        <li>
          Apply for Nomination: Submit a comprehensive application to AINP, and
          if approved, you’ll receive a provincial nomination certificate.
        </li>
        <li>
          Apply for Permanent Residency: Use the certificate to apply for
          permanent residency.
        </li>
      </ul>
    ),
  },
];
export const featuresPage = [
  {
    id: 1,
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 2,
    title: "Provincial Nominee Programs (PNPs)",
    description:
      "We can advise on PNPs and help you prepare for provincial nominations, which is suitable with your experiences.",
    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[50px]"
      />
    ),
  },
  {
    id: 3,
    title: "Secure a Job Offers",
    description:
      "We can assist in searching for job in Canada. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[50px]" />,
  },
  {
    id: 4,
    title: "Educational credential assessment",
    description:
      "We can help you navigate the process of obtaining an ECA for your foreign educational credentials,",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[50px]"
      />
    ),
  },
];
