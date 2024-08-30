import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import { Button } from "@/components/ui/custom";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Visitor() {
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
                Visitor Visa
              </h3>

              <p className="text-sm text-black/60 text-left">
                Other than the regular visa application programs, people can
                also apply for a visa or even permanent residence under certain
                sponsorship programs which allow eligible individuals to sponsor
                their close family members for permanent residency in Canada.
              </p>
              <p className="text-sm text-black/60 text-left">
                Types of Family Sponsorship in Canada:
                <ul className="pl-6 list-disc">
                  <li> Sponsoring a spouse or partner</li>
                  <li>Sponsoring parents and grandparents</li>
                  <li>Sponsoring dependent children</li>
                  <li>Sponsoring other family members</li>
                </ul>
              </p>
              <p className="text-sm text-black/60 text-left">
                The processing time may vary depending on the type of
                sponsorship.
              </p>
              <Title subtitle="Requirements for Sponsor" />
              <p className="text-sm text-black/60 text-left">
                You must be a Canadian citizen or permanent resident and meet
                specific financial requirements to ensure your ability to
                support the sponsored family members.
              </p>
              <p className="text-sm text-black/60 text-left">
                Sponsors commit to providing financial support to the sponsored
                family members for a specific period.
              </p>
              <Title subtitle="Requirements for Sponsor's Family Members" />

              <p className="text-sm text-black/60 text-left">
                Sponsored family members must also meet specific eligibility
                criteria depending on the program. For example, in the case of
                sponsoring a spouse, the marriage or common-law partnership must
                be genuine, and for sponsoring parents and grandparents, they
                must pass a medical examination.
              </p>
              <Title subtitle="If you don't meet the eligibility criteria for family sponsorship programs" />
              <p className="text-sm text-black/60 text-left">
                If you don't meet the eligibility criteria for family
                sponsorship programs (e.g., due to age, marital status, or
                indirect family relationships), you may consider applying
                through provincial nominee programs (PNPs)
              </p>
              <p className="text-sm text-black/60 text-left">
                You may receive additional points if you have family members who
                are Canadian citizens or permanent residents. This can increase
                your chances of receiving an Invitation to Apply (ITA) from the
                province or the Canadian government.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        {/* <Title
          subtitle="Take the first step towards your family's Canadian dream"
          title={
            <p className="text-xl text-black/50 w-full text-left pt-3">
              Contact GreenTech Resource Worldwide Canada for a personalized
              solution
            </p>
          }
        /> */}
        <CTADefault
          title="Family Sponsor"
          subtitle={
            <p className="text-2xl text-white/90">
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
