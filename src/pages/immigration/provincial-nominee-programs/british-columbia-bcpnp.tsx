import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { featuresPage } from "./alberta-immigration-aaip";
import { Feature } from "@/components/ui/cards-set";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "../express-entry/federal-skilled-worker";

export default function BritishColumbia() {
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
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                British Columbia Provincial Nominee Program (BC PNP)
              </h3>

              <p className="text-sm text-black/60 text-left">
                The BC Provincial Nominee Program (BC PNP) is an economic
                immigration program. It lets the Province select economic
                immigrants who will live in B.C. and help fill job vacancies or
                operate businesses.
              </p>
              <p className="text-sm text-black/60 text-left">
                If you are nominated, you and your family can apply to
                Immigration, Refugees and Citizenship Canada (IRCC) for
                permanent residence in Canada.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title subtitle="The BC PNP has two main components" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-2 max-w-7xl mx-auto">
          {twoFeatures.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
      <Container>
        <Title
          subtitle="
          BC
          PNP"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Skill immigration
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left ">
          To qualify for this stream, you must:
          <ul className="pl-6 list-disc">
            <li>
              Have accepted an indeterminate* (no defined end date), full-time,
              job offer from a B.C. employer
            </li>
            <li>Your job offer must be classified as NOC TEER 0, 1, 2 or 3</li>
            <li>Be qualified to perform the duties of the job</li>
            <li>
              Have a minimum of two years of full-time (or full-time equivalent)
              work experience at NOC TEER 0, 1, 2, or 3
            </li>
            <li>Meet minimum language requirements</li>
            <li>
              Have a wage offer in line with B.C. wage rates for the occupation
            </li>
            <li>Show you can support yourself and your dependants</li>
          </ul>
        </p>
        <p className="text-sm text-black/60 text-left ">
          This stream also has an Express Entry BC option.
        </p>
        <p className="text-sm text-black/60 text-left text-highlight">
          * Your job offer does not need to be indeterminate if it is in a
          priority technology occupation or is in NOC 41200 (university
          professors and lecturers).
        </p>
      </Container>
      <Container>
        <Title
          subtitle="BC PNP"
          title={
            <p className="text-4xl text-black/50 w-full text-left pt-3">
              Entrepreneur Immigration
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left ">
          Entrepreneur Immigration is a “temporary to permanent” immigration
          pathway. That means that if you are approved, you will initially come
          to B.C. as a temporary resident, and then apply to stay permanently
          once you have successfully started a business.
        </p>
        <p className="text-sm text-black/60 text-left text-highlight">
          Streams for entrepreneurs:
        </p>
        <div className="py-6 ">
          {faqBritish.map((item) => {
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
            subtitle="
British Columbia provincial nominee program"
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

const twoFeatures = [
  {
    id: 1,
    title: "Skills Immigration",
    description:
      "The Skilled Worker stream is for experienced workers in a professional, management, technical, trade or other occupations to gain permanent residence in B.C.",
    icon: (
      <Icon
        icon="material-symbols:person-apron"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 2,
    title: "Entrepreneur Immigration",
    description:
      "Entrepreneur Immigration BC Provincial Nominee Program (BC PNP) Entrepreneur Immigration (EI) is a way for international entrepreneurs wishing to immigrate to British Columbia (B.C.) to set up businesses that support innovation and economic growth in the province.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
];

const faqBritish = [
  {
    id: 1,
    title: "Base stream",
    description: () => (
      <>
        <p>
          Personal requirements
          <ul className="pl-6 list-disc">
            <li>Personal net worth of at least CAD$600,000</li>
            <li>
              Business and/or management experience; if no business experience,
              must have the equivalent of a 2-year post-secondary diploma
            </li>
            <li>
              Basic English or French language skill equal to Canadian Language
              Benchmark (CLB) level 4 or higher
            </li>
            <li>
              Have been lawfully admitted in the country where you currently
              live have, or be eligible for, legal immigration status in Canada
            </li>
            <li>
              Once you have organized and prepared these documents, you can
              submit your application through the Express Entry system and
              create an online profile.
            </li>
          </ul>
        </p>
        <Title subtitle="Business, job and investment requirements" />
        <ul className="pl-6 list-disc">
          <li>
            Establish an eligible new business or buy and improve an existing
            business
          </li>
          <li>
            Make an eligible personal investment of at least CAD$200,000 in the
            business
          </li>
          <li>
            Create at least one new full-time job for a Canadian citizen or
            permanent resident
          </li>
          <li>
            Have been lawfully admitted in the country where you currently live
            have, or be eligible for, legal immigration status in Canada
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Regional Pilot",
    description: () => (
      <>
        <p>
          British Columbia welcomes entrepreneurs from around the world to
          discover the many business opportunities across all regions of the
          province. Entrepreneurs can open a business in one of B.C.’s smaller
          communities and experience first-hand why many choose to live outside
          of a large urban center for their families.
        </p>
        <p>
          Through the Entrepreneur Immigration (EI) Regional Pilot, the Province
          offers an immigration pathway for enterprising individuals who are
          looking to start a new business in a small community and make B.C.
          their new home.
        </p>

        <p>
          The EI Regional Pilot was introduced in March 2019 and has been
          extended to March 31, 2024.
        </p>
        <Title subtitle="Requirements" />
        <p>
          The EI - Regional Pilot is designed for foreign entrepreneurs who are
          interested in starting a new business in a smaller community. If you
          want to settle in one that is not participating in the EI Regional
          Pilot, or purchase an existing business, you are not eligible for this
          stream
        </p>
        <p>
          Before considering the EI Regional Pilot, become familiar with the
          program criteria and check your eligibility. To qualify, you must:
          <ul className="pl-6 list-disc">
            <li>
              Establish an eligible new business aligned with the priorities of
              the referring community
            </li>
            <li>Show business and/or management experience</li>
            <li>Have a personal net worth of at least CAD$300,000</li>
            <li>
              Make an eligible personal investment of at least CAD$100,000 in
              the business
            </li>
            <li>
              Create at least one new full-time job for a Canadian citizen or
              permanent resident
            </li>
            <li>
              Demonstrate a minimum language proficiency of CLB4 have, or be
              eligible for, legal immigration status in Canada have been
              lawfully admitted in the country where you currently live
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Strategic Projects",
    description: () => (
      <>
        <p>
          The Strategic Projects stream is for foreign corporations who have
          identified strategic investment opportunities in B.C. to establish
          operations that are integral to the growth and expansion of their core
          business.
        </p>
        <p>
          This stream enables foreign corporations to permanently transfer key
          staff with the corporate knowledge and expertise to B.C. The foreign
          corporation may apply for provincial nomination to support the
          permanent residence of up to five of its current senior employees.
          These employees will actively manage the B.C. operation.
        </p>
        <Title subtitle="Requirements" />
        <p>
          The foreign corporation must:
          <ul className="pl-6 list-disc">
            <li>
              Make a minimum equity investment of at least $500,000 directed
              toward the corporation’s operations in B.C.
            </li>

            <li>
              Establish new or purchase and expand an eligible business in B.C.
            </li>
            <li>
              create at least three new full-time equivalent jobs for Canadian
              citizens or permanent residents for each foreign key staff member
              proposed (to a maximum of five key staff)
            </li>
          </ul>
        </p>
      </>
    ),
  },
];
