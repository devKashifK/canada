import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import { featuresPage } from "./alberta-immigration-aaip";
import { Feature } from "@/components/ui/cards-set";
import Title from "@/components/ui/Title";
import { FAQ } from "../express-entry/federal-skilled-worker";

export default function Saskatchewan() {
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
                  Canada Provincial Immigration Program
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Saskatchewan Immigrant Nominee Program (SINP)
              </h3>

              <p className="text-sm text-black/60 text-left">
                The Saskatchewan Provincial Nominee Program (SINP) is a program
                approved by the province of Saskatchewan.
              </p>
              <p className="text-sm text-black/60 text-left">
                SPNP consists of various streams aimed at attracting skilled
                individuals and families with experience to settle and work in
                Saskatchewan. This includes skilled workers, trade workers,
                investors, entrepreneurs, and family sponsorship programs.
              </p>
              <p className="text-sm text-black/60 text-left">
                One of the significant advantages of SPNP is the expedited and
                efficient nomination process. Through SPNP nomination,
                candidates can apply for Canadian permanent residency more
                quickly and conveniently. The Saskatchewan Provincial Nominee
                Program not only helps the province attract the necessary
                talents and workforce but also provides opportunities for
                immigrants to participate in and contribute to the local
                community and economy of Saskatchewan.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title subtitle="Program Details" />
        <div className="py-6 ">
          {faqSasketchewan.map((item) => {
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

const faqSasketchewan = [
  {
    id: 1,
    title: "International Skilled Worker",
    description: () => (
      <>
        <p>
          Under this category applications from skilled international workers
          will be accepted, who plan to live and work in the province of
          Saskatchewan. applicants will get points on the basis of which they
          can be nominated under one of three sub-categories.
        </p>
        <Title subtitle="International Skilled Worker – Employment Offer" />
        <p>
          Under this sub-category, applicants who are a skilled worker are
          eligible to apply for provincial nomination if they have a job offer
          from an eligible Saskatchewan employer. If the applicant has a job
          offer for an occupation classified at NOC level 0, A, B or a
          designated trade in Saskatchewan, it will add 30 points for applicant
          under SINP points grid
        </p>
        <Title subtitle="International Skilled Worker – Occupations In-Demand" />
        <p>
          Under this sub-category, applicants who are highly skilled and have
          experience in an in-demand occupation in Saskatchewan are eligible to
          apply even if they do not have a job offer. All in-demand occupations
          that are eligible under the SINP’s Express Entry and Occupation
          In-Demand sub- categories are rated Skill Level A or B or Skill Type 0
          under Canada’s National occupational Classification, or NOC.
        </p>
        <Title subtitle="International Skilled Worker – Saskatchewan Express Entry" />
        <p>
          Under this sub-category the province nominates individuals who are
          already in immigration, Refugees and Citizenship Canada’s (IRCC)
          Express Entry pool and have a skilled work experience in an in-demand
          occupation in Saskatchewan.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Saskatchewan Work Experience",
    description: () => (
      <>
        <p>
          Under this category all foreign workers who are currently living in
          Saskatchewan are eligible to apply for SINP. The Saskatchewan
          Experience Category accepts applications under the following
          sub-categories:
        </p>

        <Title subtitle="Existing Work Permit" />
        <p>
          Individuals who have been working in Saskatchewan for at least six
          months under a valid work permit are eligible to apply for SINP.
        </p>
        <Title subtitle="Health Professionals" />
        <p>
          Individuals who have worked as a physician, a nurse, or any other
          health profession in Saskatchewan for at least six months can apply
          for SINP.
        </p>
        <Title subtitle="Hospitality Sector " />
        <p>
          Under this sub-category those individuals that are currently working
          in Saskatchewan as food counter attendants, food and beverage servers,
          kitchen helpers, or housekeeping and cleaning staff for at least six
          months are eligible. The employer must receive approval from the
          Province of Saskatchewan before the applicant begins to work in
          Canada.
        </p>
        <Title subtitle="Long Haul Truck Driver " />
        <p>
          Individuals who are currently working for an approved trucking firm in
          Saskatchewan must have a minimum of six months experience in
          Saskatchewan for their current employer to be considered for SINP.
        </p>
        <Title subtitle="Students" />
        <p>
          International students who have graduated from a recognized
          post-secondary institution in Canada and have worked in Saskatchewan
          for at least twenty- four months can apply for SINP. If the students
          have graduated from an eligible designated learning institute in
          Saskatchewan, they can apply for provincial nomination after working
          for a Saskatchewan based employer for 6 months.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Entrepreneur ",
    description: () => (
      <>
        <p>
          This category is for individuals who wish to invest management talent
          and capital in Saskatchewan by establishing, acquiring, or partnering
          in a business the province. Candidates are expected to take on an
          active management role in the business. This sub-category functions on
          an Expression of Interest model.
        </p>

        <p>
          The Saskatchewan Entrepreneur Stream allows candidates and their
          families to start, obtain or partner in a business in the province.
          Candidates must be actively involved in managing the business and live
          in Saskatchewan.
        </p>
        <p>
          The Saskatchewan Entrepreneur stream is a three-stage process:
          <ul className="pl-6 list-disc">
            <li>Expression of interest</li>
            <li>Invitation to submit an application</li>
            <li>Nomination</li>
          </ul>
        </p>
        <p>
          Successful candidates initially come to Canada on a temporary work
          permit. They become eligible to apply for nomination after a minimum
          of 6 months spent establishing their business.
        </p>
        <p>
          Minimum Entry Criteria:
          <ul>
            <li>Have a minimum net worth of $500,000 CAD</li>
            <li>
              Have at least three years of business management or
              entrepreneurial experience gained within the past 10 years
            </li>
            <li>
              Have the intention to invest at least $300,000 CAD if your
              business is located in Regina or Saskatoon. If it is located
              anyhwere else, you only need to make a $200,000 investment
            </li>
          </ul>
        </p>

        <p>
          Business Establishment Plan Requirements:
          <ul className="pl-6 list-disc">
            <li>Your plan to start a business in Saskatchewan</li>
            <li>
              Your ownership of minimum one-third of the business unless you
              invest at least $1,000,000 CAD in the business
            </li>
            <li>
              Your commitment to play an active and ongoing role in the daily
              management of the business
            </li>
            <li>
              The creation of two jobs for permanent residents or citizens of
              Canada in Saskatchewan if your new business is in Regina or
              Saskatoon
            </li>
          </ul>
        </p>
        <p>
          Candidates who meet requirements must sign a Business Performance
          Agreement (BPA).
        </p>
        <p>
          The SINP will then issue a letter to support a work permit
          application.
        </p>
        <p>
          If the work permit application is successful, candidates come to
          Canada and begin establishing their business.
        </p>
        <p>
          After 6 months, candidates become eligible to apply for the provincial
          nomination for permanent residence. They must also meet the terms of
          the BPA.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Farm Owner and Operator",
    description: () => (
      <p>
        This category is for experienced farmers with considerable capital
        looking to invest in a farming operation and settle in the province of
        Saskatchewan.
      </p>
    ),
  },
];
