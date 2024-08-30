import Container from "@/components/ui/container";
import { Button } from "@/components/ui/custom";
import HoverCard from "@/components/ui/hover-card";
import MovingCardBorder from "@/components/ui/moving-card-border";
import { ServicesCard } from "@/components/ui/services-card";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import { title } from "process";
import React from "react";

export default function Price() {
  return (
    <Container className="flex flex-col gap-20 py-10">
      <MovingCardBorder className="rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-6">
        <h3 className="tracking-widest text-4xl text-highlight">
          SPECIAL DISCOUNT OF THE MONTH
        </h3>
        <h3 className="text-3xl">$99 / PGWP</h3>
        <p>Only in Jan 2024. Enjoy 75% discount for PGWP application fee.</p>
        <Button
          className="py-1 w-max"
          icon={
            <div className="flex gap-2 justify-center items-center text-xs">
              <Icon icon={"mdi:phone"} />
              <span>+1855 477 9797</span>
            </div>
          }
        >
          <span className="text-xs">Free Consultation</span>
        </Button>
      </MovingCardBorder>
      {pricingConfig.map((item) => (
        <div key={item.id} className="flex flex-col gap-10">
          <h2 className="text-4xl text-highlight  tracking-widest">
            {item.title}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {item.child.map((child, index) =>
              index % 2 === 0 ? (
                <PriceCardGradient
                  key={child.id}
                  title={child.title}
                  price={child.price}
                  points={child.points}
                />
              ) : (
                <PriceCard
                  key={child.id}
                  title={child.title}
                  price={child.price}
                  points={child.points}
                />
              )
            )}
          </div>
        </div>
      ))}
    </Container>
  );
}

const PriceCard = ({ title, price, points }) => {
  return (
    <Glass className="cursor-pointer flex flex-col items-center h-[320px] bg-slate-100 rounded-2xl p-14 shadow-lg max-w-sm">
      <div>
        <p className="font-extrabold text-3xl mb-2">{title}</p>
        <div className="flex flex-col items-center my-8">
          <p className="font-extrabold text-4xl">{price}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {points.map((point) => (
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>{point}</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 ml-1 fill-orange-300"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        ))}
      </div>
    </Glass>
  );
};

const PriceCardGradient = ({ title, price, points }) => {
  return (
    <div className="cursor-pointer flex flex-col h-[320px] items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200 max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
      >
        <path
          fill-rule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <div>
        <div className="flex gap-4 justify-center">
          <p className="font-extrabold text-3xl mb-2">{title}</p>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col items-center my-8">
            <p className="font-extrabold text-4xl">{price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {points.map((point) => (
          <p className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <b>{point}</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 ml-1 fill-orange-300"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        ))}
      </div>
    </div>
  );
};

const pricingConfig = [
  {
    id: 1,
    title: "Visitor",
    child: [
      {
        id: 1,
        price: "$500",
        title: "Fresh Applicant",
        points: ["Additional $250 for each member"],
      },
      {
        id: 2,
        price: "$750",
        title: "Post-refusal Applicant",
        points: ["Additional $250 for each member"],
      },
      {
        id: 3,
        price: "$500",
        title: "Visitor Visa (Extenstion)",
        points: ["Additional $250 for each member"],
      },
      {
        id: 4,
        price: "$500",
        title: "Visitor visa - Inside Canada",
        points: ["Additional $250 for each member"],
      },
      {
        id: 5,
        title: "Dependent of Int. Student",
        price: "$500",
        points: ["Additional $250 for each member"],
      },
      {
        id: 6,
        title: "Restoration of Visitor Status",
        price: "$750",
        points: ["Additional $300 for each member"],
      },
    ],
  },
  {
    id: 2,
    title: "Worker ",
    child: [
      {
        id: 1,
        price: "$2500",
        title: "No LMIA required",
        points: [],
      },
      {
        id: 2,
        price: "$1500",
        title: "LMIA required",
        points: [],
      },
      {
        id: 3,
        price: "$1000",
        title: "Spousal Open Work Permit",
        points: [],
      },
      {
        id: 4,
        price: "$750",
        title: "Open Work Permit (Other)",
        points: [],
      },
      {
        id: 5,
        title: "Bridging Open Work Permit",
        price: "$750",
        points: [],
      },
      {
        id: 6,
        title: "Restoration of Worker Status",
        price: "$750",
        points: [],
      },
      {
        id: 7,
        title: "Post-graduation Work Permit",
        price: "$399",
        points: [],
      },
    ],
  },
  {
    id: 3,
    title: "STUDY PERMIT",
    child: [
      {
        id: 1,
        price: "$1000",
        title: "Fresh Applicant",
        points: [],
      },
      {
        id: 2,
        price: "$1500",
        title: "Post-refusal Applicant",
        points: [],
      },
      {
        id: 3,
        price: "$500",
        title: "Study Permit Extension",
        points: [],
      },
      {
        id: 4,
        price: "$750",
        title: "Restoration of Student Status",
        points: [],
      },
    ],
  },
  {
    id: 4,
    title: "CITIZENSHIP",
    child: [
      {
        id: 1,
        price: "$1000",
        title: "Citizenship",
        points: [],
      },
    ],
  },
  {
    id: 5,
    title: "PR",
    child: [
      {
        id: 1,
        price: "$500",
        title: "Express Entry Profile Creation",
        points: [],
      },
      {
        id: 2,
        price: "$3000",
        title: "FSW/FSTW/ CEC/PNP - Post ITA",
        points: ["Additional CAD 500 for family members"],
      },
      {
        id: 3,
        price: "$5000",
        title: "PNP submission till PR",
        points: ["Additional CAD 500 for family members"],
      },
    ],
  },
  {
    id: 6,
    title: "SUPER VISA",
    child: [
      {
        id: 1,
        price: "$750",
        title: "Fresh Applicant",
        points: [],
      },
      {
        id: 2,
        price: "$1000",
        title: "FSW/FSTW/ CEC/PNP - Post ITA",
        points: [],
      },
    ],
  },
  {
    id: 7,
    title: "Family Sponsorship",
    child: [
      {
        id: 1,
        price: "$3500",
        title: "Family Sponsorship",
        points: [],
      },
      {
        id: 2,
        price: "$3000",
        title: "Spouse/ Partner Inside Canada",
        points: [],
      },
      {
        id: 3,
        price: "$2000",
        title: "Child outside Canada",
        points: [],
      },
      {
        id: 4,
        price: "$1500",
        title: "Child inside Canada",
        points: [],
      },
      {
        id: 4,
        price: "$3500",
        title: "Parents/ Grandparent",
        points: [],
      },
    ],
  },
];
