import Container from "@/components/ui/container";
import { FeatureSection, FeatureSection2 } from "@/components/ui/feature";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function QuebecInvestor() {
  return (
    <Container className="flex flex-col gap-8">
      <div className="flex flex-col py-10 gap-4 text-left text-black/60 px-8">
        <p className="">
          While the federal Immigrant Investor Program of Canada has been
          terminated, Quebec still offer investor immigration programs. This
          program require participants to invest a significant amount in the
          province in exchange for permanent residency.
        </p>

        <p>
          However, the Quebec Immigrant Investor Program QIIP is currently
          closed to new applicants. It was suspended in 2019 and was supposed to
          open in April 2023. However, it was announced last March that the
          program would remain closed until January 2024
        </p>
      </div>

      <FeatureSection
        title={"Eligibility"}
        description={
          "Quebec's dynamic cities, picturesque landscapes, and strong economy make it an appealing choice for immigration."
        }
        subtitle={"Quebec Immigrant Investor Program (QIIP)"}
        childClass="lg:grid-cols-1"
        className="py-8"
      >
        <div className="flex w-full flex-col gap-4 justify-start items-start ">
          {Eligibility.map((item) => (
            <div className="text-left flex gap-2 items-start justify-center">
              <Icon
                icon={"material-symbols:library-add-check-rounded"}
                className="mt-1"
              />
              <p>{item.item}</p>
            </div>
          ))}
        </div>
      </FeatureSection>
      <FeatureSection2
        title={"How can we help you?"}
        description={
          "GTR Worldwide can assist you in increasing your Comprehensive Ranking System (CRS) score for Express Entry in several ways:"
        }
      >
        {/* {features.map((item) => (
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
        ))} */}
      </FeatureSection2>
    </Container>
  );
}

const Eligibility = [
  {
    id: 1,
    item: "Two years of suitable management or business experience within the five years preceding the application",
  },
  {
    id: 2,
    item: "Investment of $1.2 million into a passive government-guaranteed investment for a period of five years bearing no interest",
  },
  {
    id: 3,
    item: "Intend to settle in the province of Quebec",
  },
  {
    id: 4,
    item: "Enter into an investment agreement with a financial intermediary.",
  },
  {
    id: 5,
    item: " Obtain enough points in the selection grid",
  },
  {
    id: 6,
    item: "Obtain an attestation of learning about democratic values and Québec values",
  },
];
