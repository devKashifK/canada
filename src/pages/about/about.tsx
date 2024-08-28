import { CardDemo } from "@/components/ui/animated-card";
import Container from "@/components/ui/container";
import { CtaCard2, CTADefault, truncateText } from "@/components/ui/cta";
import { Button } from "@/components/ui/custom";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import HoverCard from "@/components/ui/hover-card";
import MovingCardBorder from "@/components/ui/moving-card-border";
import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { title } from "process";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Our team</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                The minds behind the magic.
              </h3>
              <p className="text-sm text-black/60 text-left">
                We take immense pride in our collaboration with licensed
                immigration experts certified by RCIC, under the experienced and
                passionate leadership of Mr. Manoj Goswami – Regulated Canadian
                Immigration Consultant (RCIC), Founder, CEO of GreenTech
                Resource Worldwide Canada. Mr. Manoj Goswami is a licensed and
                registered Regulated Canadian Immigration Consultant (RCIC) with
                over a decade of experience in recruitment, consulting, and
                immigration file support.
              </p>
              <p className="text-sm text-black/60 text-left">
                Manoj Goswami, an immigrant to Canada since the early 2000s,
                brings nearly two decades of experience to his role. He holds an
                Executive Master of Business Administration from the University
                of Regina’s Levin School of Business and has studied at
                prestigious institutions such as the University of Toronto and
                Ashton College in British Columbia. Manoj boasts a rich
                portfolio of designations, including P.Ag, PMP, SCMP, CPSM, and
                CRM, which paved the way for his career as an Immigration
                Consultant and Foreign Worker Recruiter since 2016. He is a
                Registered Canadian Immigration Consultant (RCIC) and a proud
                member of professional organizations like CICC and CAPIC.
              </p>
              <p className="text-sm text-black/60 text-left">
                In addition to fluent English, Manoj is proficient in nine
                languages, including Hindi, Urdu, Nepali, and Bengali. The
                GreenTech Resources Worldwide Canada team serves clients from
                diverse backgrounds worldwide and can provide support in
                languages such as Vietnamese, Tagalog, Arabic, Chinese, French,
                and Spanish
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 justify-end items-end px-10">
            <img src="/team.jpg" className="rounded-2xl h-[70%]" alt="" />
          </div>
        </Glass>
      </Container>
      <Container className="flex gap-4 flex-row flex-wrap h-max justify-center items-center">
        {data.map((item, index) => (
          // <Card
          //   key={index}
          //   image={item.image}
          //   title={item.title}
          //   list={item.list}
          //   flip={false}
          // />
          <CardDemo>
            <div className="flex flex-col gap-0 w-full px-6 relative z-10">
              <h5 className="text-4xl text-left text-highlight">
                {item.title}
              </h5>
              {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
            </div>
            <div className="flex gap-1.5 flex-col justify-start items-start w-full px-6 relative z-10">
              {item.list.map((item, index) => (
                <li className="list-none flex gap-1 justify-start items-start text-left text-black/60">
                  <div className="w-6 mt-2">
                    <Icon
                      icon={"material-symbols:bookmark-check-outline-rounded"}
                    />
                  </div>
                  <div className=" flex justify-start">{item.title}</div>
                </li>
              ))}
            </div>
          </CardDemo>
        ))}
      </Container>

      <Container>
        <Glass className="flex gap-2 px-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-max">
              <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

              <div className="px-3 py-1.5">
                <h5 className="tracking-widest text-xl">Our Partners</h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-2xl text-black/70">
                Strategic Partners
              </h3>
              <p className="text-sm text-black/60 text-left">
                With an expansive vision in developing Canadian immigration
                services, we are committed to seeking and building close
                partnerships with partners in key markets such as Vietnam,
                India, South Africa, Mexico, and the Philippines. We see
                tremendous potential in these countries to support people in
                settling and working in Canada, including high-quality labor,
                multi-disciplinary experts, and entrepreneurs.
              </p>
              <p className="text-sm text-black/60 text-left">
                We believe that through close collaboration with partners in
                these markets, we can offer diverse and flexible Canadian
                immigration solutions, helping many individuals successfully
                complete their immigration journey and thrive in their new lives
                in Canada.
              </p>
            </div>

            {/* <div className="w-full mt-10 gap-2 flex justify-center items-center">
              <div className="relative h-[140px] w-[180px]">
                <img
                  src="/foru1.png"
                  className="w-full h-full rounded-2xl"
                  alt=""
                />
                <div className="absolute w-full h-full rounded-2xl top-0 left-0 bg-black/40"></div>
              </div>
              <div className="h-[140px] w-[180px] relative">
                <img
                  src="/foru2.png"
                  className="w-full h-full rounded-2xl bg-cover"
                  alt=""
                />
                <div className="absolute w-full h-full rounded-2xl top-0 left-0 bg-black/40"></div>
              </div>
            </div> */}

            <Button
              className="py-3 w-[190px] mt-6"
              icon={
                <div className="flex gap-2 text-[10px] justify-center items-center">
                  <Icon icon={"mdi:phone"} />
                  <span>+1855 477 9797</span>
                </div>
              }
            >
              <span className="text-[10px] relative flex gap-1 justify-start items-center">
                <Icon
                  icon={"teenyicons:appointments-outline"}
                  className="-mt-0.5"
                />
                BOOK AN APPOINTMENT
              </span>
            </Button>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass
          className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(/immigration.png)`,
          }}
        >
          <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>

          <div className="flex z-10 gap-20 justify-start items-start">
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"mdi:checkbox-marked-outline"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">100 +</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                successful visas in 2023
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"icon-park-outline:message-success"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">14</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                Success Start Up Visa
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"cil:happy"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <span className="text-4xl">95 %</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                happy clients
              </span>
            </div>
            <div className="flex flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"game-icons:trophy-cup"}
                className="text-5xl cursor-pointer rounded-full py-2 px-2"
              />
              <span className="text-4xl">Top 1</span>
              <span className="uppercase text-lg font-primary tracking-widest">
                Consultants in Saskatchewan
              </span>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col gap-8 px-10 py-10">
          <div className="flex gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <div className="relative w-max">
                <div className="absolute top-0 left-0 w-6 h-0.5 bg-highlight rounded-md"></div>
                <div className="absolute top-[12px] transform rotate-90 -left-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>

                <div className="px-3 py-1.5">
                  <h5 className="tracking-widest text-xl">
                    why choose GreenTech Resource Worldwide Canada
                  </h5>
                </div>

                <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
                <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
              </div>
              <div className="flex flex-col justify-start gap-6">
                <h3 className="tracking-wide text-left text-4xl text-black/70">
                  We are always ready for every challenge. Please trust us
                </h3>
                <p className="text-sm text-black/60 text-left">
                  At GreenTech Resource Worldwide Canada, we understand that
                  immigration is a transformative journey, often filled with
                  uncertainties and challenges. Our goal and mission revolve
                  around being your trusted partner on this journey.
                </p>
                <p className="text-sm text-black/60 text-left">
                  With our unwavering support, we aim to help you turn your
                  dreams into reality, bridging horizons and embracing new
                  opportunities that await you in a foreign land.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-4">
              <MovingCardBorder
                className="justify-start items-center  flex flex-col gap-2 py-8 w-full rounded-2xl text-left bg-center bg-cover cursor-pointer"
                animate={true}
              >
                <div className="relative z-10 text-white/60 flex flex-col gap-4">
                  <h4 className="tracking-widest text-3xl">
                    Government of Canada Licensed
                  </h4>
                  <p className="text-sm">
                    We are authorized to legally represent our clients' files,
                    working directly with the Immigration Department of Canada
                    and the Government of Canada. Our RCIC experts ensure that
                    our clients' files are processed accurately, legally, and
                    securely.
                  </p>
                </div>
              </MovingCardBorder>
            </div>
          </div>

          <div className="flex gap-4">
            <MovingCardBorder
              className="justify-start items-center  flex flex-col gap-2 py-8 w-full flex-1 rounded-2xl text-left bg-center bg-cover cursor-pointer"
              animate={true}
            >
              <div className="relative z-10 text-black/60 flex flex-col gap-4">
                <h4 className="tracking-widest text-3xl">High Success Rate</h4>
                <p className="text-sm">
                  This is achieved through a personalized strategy for each of
                  our clients. Each file is analyzed specifically, identifying
                  strengths and weaknesses that need to be addressed. Our wealth
                  of experience helps us anticipate and provide proactive
                  solutions to shorten processing times and ensure success.
                </p>
              </div>
            </MovingCardBorder>
            <MovingCardBorder
              className="justify-start items-center  flex flex-col gap-2 py-8 w-full flex-1 rounded-2xl text-left bg-center bg-cover cursor-pointer"
              animate={true}
            >
              <div className="relative z-10 text-black/60 flex flex-col gap-4">
                <h4 className="tracking-widest text-3xl">
                  Years Of Experience
                </h4>
                <p className="text-sm">
                  GreenTech Resource Worldwide Canada is a Canada-based company
                  led by Immigration Expert Mr. Manoj Goswami, the founder and
                  CEO of the company. With an educational background and over 20
                  years of working experience in Canada, he and his team have a
                  deep understanding of the labor market.
                </p>
              </div>
            </MovingCardBorder>

            <MovingCardBorder
              className="justify-start items-center flex flex-col gap-2 py-8 w-full rounded-2xl flex-1 text-left bg-center bg-cover cursor-pointer"
              animate={true}
            >
              <div className="relative z-10 text-black/60 flex flex-col gap-4">
                <h4 className="tracking-widest text-3xl">
                  Reasonable cost guaranteed quality
                </h4>
                <p className="text-sm">
                  At GreenTech Resource Worldwide Canada, we offer high-quality
                  immigration services at affordable rates, ensuring your
                  journey towards a new beginning is both accessible and
                  excellent. We have transparent refund.
                </p>
              </div>
            </MovingCardBorder>
          </div>
        </Glass>
      </Container>
      <HoverCard
        color="bg-sky-400"
        icon="material-symbols-light--keyboard-double-arrow-right"
        title="Not Sure"
        cta="Learn More"
        description="Feeling uncertain"
      />
    </div>
  );
}

export const Card = ({ image, title, list, flip }) => {
  return (
    <>
      <Glass
        className={cn(
          "h-[450px] w-[450px] flex flex-col gap-4 items-center relative z-10 mx-0 bg-cover",

          flip ? "justify-end" : "justify-start"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>
        {/* <div className="w-[45%] rounded-l-2xl">
        <img
          src={image}
          alt=""
          className={cn(
            "h-[217px] bg-cover z-10 relative",
            flip ? "rounded-r-2xl" : "rounded-l-2xl"
          )}
        />
      </div> */}
        {/* <div
        className={cn(
          "px-8  absolute rounded-2xl -ml-6 shadow-2xl  z-20 border-gray-100 backdrop-blur-3xl bg-opacity-10 bg-clip-padding backdrop-filter bg-gray-100 flex flex-col gap-2 py-5",
          flip ? "left-2" : "-right-6"
        )}
      > */}
      </Glass>
    </>
    // </div>
  );
};

const data = [
  {
    id: 1,
    title: "Entrepreneurs",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Conduct initial assessment based on intake criteria",
      },
      {
        id: 2,
        title: "Develop & refine the innovative business concepts",
      },
      {
        id: 3,
        title: "Incubator selection",
      },
      {
        id: 4,
        title: "Pitch deck refinement",
      },
      {
        id: 5,
        title: "Pitch coaching",
      },
      {
        id: 6,
        title: "Closed Work Permit for Applicant",
      },
      {
        id: 7,
        title: "Open Work Permit for spouse",
      },
      {
        id: 8,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 9,
        title: "PR application",
      },
      {
        id: 10,
        title: "Settlement",
      },
    ],
  },
  {
    id: 2,
    title: "Foreign Workers",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Recruitment at CICCanadaJobs",
      },
      {
        id: 2,
        title: "Provincial nomination",
      },
      {
        id: 3,
        title: "Closed work permit for applicant",
      },
      {
        id: 4,
        title: "Open work permit for spouse",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "PR application",
      },
    ],
  },
  {
    id: 3,
    title: "Students",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Study Permit",
      },
      {
        id: 2,
        title: "Post graduation work permit",
      },
      {
        id: 3,
        title: "Open Work Permit for spouses",
      },
      {
        id: 4,
        title: "Consulting Pathway to PR",
      },
      {
        id: 5,
        title: "Visitor/ Study Permit for dependent children",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
  {
    id: 4,
    title: "Employers",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "PNP/LMIA registration for employers",
      },
      {
        id: 2,
        title: "Planning, searching, and screening suitable candidates",
      },
      {
        id: 3,
        title: "Streamlining the interview process",
      },
      {
        id: 4,
        title: "Assisting with employment offers",
      },
      {
        id: 5,
        title: "Handling PNP/LMIA and work permit procedures for candidates",
      },
      {
        id: 6,
        title: "Settlement",
      },
    ],
  },
];
