import React from "react";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Title from "./Title";
import Container from "./container";
import Glass from "@/lib/helpers";

export default function CTA() {
  return (
    <Container>
      <Title
        title={
          <p className="text-5xl text-black/50 w-full text-left">
            Comprehensive solutions for <br /> all your needs!
          </p>
        }
        to={""}
        subtitle={"WHAT ARE YOU LOOKING FOR?"}
        cta={"All Solutions"}
      />
      <div className="flex gap-4 min-h-screen w-[80%] mx-auto">
        <div className="flex-1 items-center flex justify-start">
          <CtaCard item={CtaDetails[0]} />
        </div>
        <div className="flex-1 items-center justify-center flex flex-col gap-12">
          {CtaDetails.slice(3, CtaDetails.length - 1).map((item, index) =>
            index === 0 ? (
              <CtaCard2 item={item} key={item.id} flip={false} />
            ) : (
              <CtaCard2 item={item} key={item.id} flip={true} />
            )
          )}
        </div>
      </div>

      <div className="flex gap-4 min-h-screen w-[80%] mx-auto">
        <div className="flex-1 items-center justify-center flex flex-col gap-12">
          {CtaDetails.slice(1, 3).map((item, index) =>
            index === 0 ? (
              <CtaCard2 item={item} key={item.id} flip={false} />
            ) : (
              <CtaCard2 item={item} key={item.id} flip={true} />
            )
          )}
        </div>

        <div className="flex-1 items-center flex justify-end">
          <CtaCard item={CtaDetails[5]} />
        </div>
      </div>
    </Container>
  );
}

export const CtaCard = ({ item }) => {
  return (
    <div className="rounded-2xl bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 h-max shadow-2xl w-[320px] justify-start items-center">
      <div className="">
        <img src={item.image} alt="" className="rounded-t-2xl" />
      </div>
      <div className="px-8 flex flex-col gap-2 py-5">
        <div className="flex flex-col gap-0">
          <h5 className="text-4xl text-left text-highlight">{item.title}</h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>
        <p className="text-xs text-left text-black/80">
          {truncateText(item.description)}...{" "}
          <span className="text-black">Read More</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            to={item.href}
            className="bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CtaCard2 = ({ item, flip }) => {
  return (
    <div
      className={cn(
        "w-[520px] h-[220px] flex items-center relative ",
        flip ? "justify-end" : "justify-start"
      )}
    >
      <div className="w-[45%] rounded-l-2xl">
        <img
          src={item.image}
          alt=""
          className={cn(
            "h-[217px] bg-cover z-10 relative",
            flip ? "rounded-r-2xl" : "rounded-l-2xl"
          )}
        />
      </div>
      <div
        className={cn(
          "px-8 w-[330px] h-[236px] absolute rounded-2xl -ml-6 shadow-2xl  z-20 border-gray-100 backdrop-blur-3xl bg-opacity-10 bg-clip-padding backdrop-filter bg-gray-100 flex flex-col gap-2 py-5",
          flip ? "left-2" : "-right-6"
        )}
      >
        <div className="flex flex-col gap-0">
          <h5 className="text-4xl text-left text-highlight">{item.title}</h5>
          {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
        </div>
        <p className="text-xs text-left text-black/80">
          {truncateText(item.description)}...{" "}
          <span className="text-black">Read More</span>
        </p>
        <div className="w-full flex justify-end items-end mt-4">
          <Link
            to={item.href}
            className="bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export function truncateText(text) {
  const words = text.split(" ");
  return words.slice(0, 35).join(" ");
}
export function truncateTextHeading(text) {
  const words = text.split(" ");
  return words.slice(0, 9).join(" ");
}

const CtaDetails = [
  {
    id: 1,
    image: "/immigrate.jpg",
    title: "Immigrate",
    subtitle:
      "Exploring Canada for immigration is an exciting and life-altering choice.",
    labels: ["Express Entry Program", "Family Sponsorship"],
    description:
      "With immigration to Canada at an all-time high, now is the perfect time to start your immigration journey. There are numerous pathways to immigrate to Canada and attain permanent residency. While immigration to Canada requires significant financial and emotional investment, the ultimate results are well worth it. Canada consistently ranks among the top countries for quality of life and is known for its positive attitude toward immigration.",
    href: "",
  },
  {
    id: 2,
    image: "/work.jpg",
    title: "Work",
    subtitle:
      "Working in Canada offers a wide array of opportunities for skilled workers from around the world.",
    labels: ["Express Entry", "PR eligibility"],
    description:
      "Canada with strong economy, quality of life, and inclusive society make it an appealing destination for those seeking career growth and a high standard of living for their family. However, navigating the immigration process and meeting language requirements are essential aspects.",
    href: "",
  },
  {
    id: 3,
    title: "Business",
    image: "/business.jpg",
    subtitle:
      "Invest and build your business while ensuring Canadian permanent residency for your family. ",
    labels: ["Quebec Investor", "Start Up Visa"],
    description:
      "The business immigration visa programs in Canada are designed for individuals who wish to immigrate to Canada to start, invest in, or manage a business. These programs aim to promote economic growth and job creation in Canada.",
    href: "",
  },
  {
    id: 4,
    title: "Study",
    image: "/study.jpg",
    subtitle:
      "Studying in Canada offers a world-class education, diverse cultural experiences, and excellent opportunities for personal and professional growth.",
    labels: ["High Quality Education", "Diverse Campuses and Programs"],
    description:
      "Canada is known for its top-notch educational institutions. Many universities and colleges consistently rank among the best globally. Canadian degrees and diplomas are recognized and respected worldwide..",
    href: "",
  },

  {
    id: 5,
    title: "Family Sponsor",
    image: "/family.jpg",
    subtitle:
      "The program allows eligible individuals to sponsor their close family members for permanent residency in Canada.",
    labels: ["Sponsoring a spouse or partner", "Sponsoring dependent children"],
    description:
      "Other than the regular visa application programs, people can also apply for a visa or even permanent residence under certain sponsorship programs which allow eligible individuals to sponsor their close family members for permanent residency in Canada.",
    href: "",
  },

  {
    id: 6,
    image: "/doubt.jpg",
    title: "Not Sure",
    subtitle:
      "Feeling uncertain about your immigration journey? Our experienced team of GreenTech Resource Worldwide Canada is here to provide expert guidance and support you!",
    labels: ["Why GTR Immigration?", "Reasonable cost guaranteed quality"],
    description:
      "Saskatchewan stands out as a province in Canada with open immigration schemes that are suitable for many individuals seeking to establish themselves in the country.",
    href: "",
  },
];

export const CTADefault = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string | React.ReactNode;
  image: string;
}) => {
  return (
    <Container>
      <Glass
        className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>
        <div className="flex flex-col gap-3 relative z-10">
          <h4 className="text-4xl tracking-wider text-center text-white">
            {title}
          </h4>
          {typeof subtitle === "string" ? (
            <p className="text-4xl text-white/90">{subtitle}</p>
          ) : (
            subtitle
          )}
        </div>
        <Button
          className="py-3 w-[190px]"
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
      </Glass>
    </Container>
  );
};
