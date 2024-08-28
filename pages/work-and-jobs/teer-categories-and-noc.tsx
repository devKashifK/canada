import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";
import React from "react";

export default function TeerCategoriesAndNoc() {
  return (
    <Container>
      <Glass className="flex flex-col">
        <div className="flex mt-10 justify-start items-start">
          <div className="flex-1 flex gap-3">
            <div className=" text-highlight">TEER</div>
            <div className=" text-highlight">Occupation types</div>
          </div>
          <div className="flex-1 text-highlight">Examples</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          {config.map((item) => (
            <div className="flex">
              <div className="flex gap-1">
                <div className="flex-1 flex justify-start items-start">
                  {item.teer}
                </div>
                <div className="flex-1 flex justify-start items-start">
                  {item.type}
                </div>
              </div>
              <div className="flex-1 flex justify-start items-start">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </Glass>
    </Container>
  );
}

const config = [
  {
    id: 1,
    teer: "TEER 0",
    type: "Management occupations",
    example:
      "Advertising, marketing and public relations managers Financial managers",
  },
  {
    id: 2,
    teer: "TEER 1",
    type: "Occupations that usually require a university degree",
    example: "Financial advisors, Software engineers",
  },
  {
    id: 3,
    teer: "TEER 2",
    type: "Occupations that usually require : a college diploma,  apprenticeship training of 2 or more years, or,supervisory occupations",
    example:
      "Computer network and web technicians, Medical laboratory technologists",
  },
  {
    id: 4,
    teer: "TEER 3",
    type: "Occupations that usually require: a college diploma, apprenticeship training of less than 2 years, or more than 6 months of on-the-job training",
    example: "Bakers, Dental assistants and dental laboratory assistants",
  },
  {
    id: 5,
    teer: "TEER 4",
    type: "Occupations that usually require",
    example:
      "Advertising, marketing and public relations managers Financial managers",
  },
  {
    id: 1,
    teer: "TEER 0",
    type: "Occupations that usually require: a high school diploma, or several weeks of on-the-job training",
    example:
      "Home child care providers, Retail salespersons and visual merchandisers",
  },
  {
    id: 1,
    teer: "TEER 0",
    type: "Occupations that usually need short-term work demonstration and no formal education",
    example:
      "Landscaping and grounds maintenance labourers Delivery service drivers and door-to-door distributors",
  },
];
