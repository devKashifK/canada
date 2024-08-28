import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function StudentDirectStream() {
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
                  Canada Immigration Program
                  {/* {albertaImmigrationAAIP[language].title} */}
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Student Direct Stream (SDS)
              </h3>

              <p className="text-sm text-black/60 text-left">
                In order to be eligible for SDS and benefit from expedited
                processing, according to High Commission of Canada, students
                will need to:
              </p>
              <Title subtitle="Understanding the Canadian Visitor Visa" />
              <p className="text-sm text-black/60 text-left">
                The Canadian Visitor Visa is designed for individuals who wish
                to enter the country temporarily for tourism, family visits, or
                business purposes. It is essential to distinguish between a
                tourist visa and other types of visas, such as work or study
                permits, as they serve different purposes.
              </p>
              <Title subtitle="Criteria" />

              <p className="text-sm text-black/60 text-left">
                <ul className="pl-6 list-disc">
                  <li>
                    Have been accepted by an eligible post secondary Designated
                    Learning Institute (DLI)
                  </li>
                  <li>Have paid their tuition for the first year</li>
                  <li>
                    Have obtained a Guaranteed Investment Certificate (GIC) of
                    $20,635 from one of the financial institutions approved by
                    Immigration, Refugees, and Citizenship Canada to provide
                    this service
                  </li>
                  <li>have completed an upfront medical examination</li>
                  <li>
                    have the minimum-required IELTS level of English language
                    ability of 6.0 in all categories (listening, reading,
                    writing and speaking)
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="Student direct stream (SDS)"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              What can we help you?
            </p>
          }
        />
        <p className="text-sm text-black/60 text-left">
          Immigration policies can change over time, so it’s essential to stay
          updated with us for the latest information from the respective
          provincial or territorial immigration authorities.
        </p>
        <p className="text-sm text-black/60 text-left">
          Consult GreenTech Resources Worldwide Canada experts to understand
          specific requirements and eligibility for these pathways based on your
          circumstances
        </p>
        <CTADefault
          title="Take the first step towards your family's Canadian dream
"
          subtitle={
            <p className="text-4xl text-white/90">
              Book a consultation today to explore immigration options
              <br />
              and secure your family's future in Canada.
            </p>
          }
          image={"/service.jpg"}
        />
      </Container>
    </>
  );
}
