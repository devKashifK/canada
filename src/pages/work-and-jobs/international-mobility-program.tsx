import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";

export default function InternationalMobilityProgram() {
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
                International Mobility Program (IMP)
              </h3>

              <p className="text-sm text-black/60 text-left">
                The IMP or International Mobility Program of Canada provides
                employers with the chance to hire employees from outside on a
                momentary work permit to work as laborers without an LMIA or
                Labour Market Impact Assessment. This opportunity is
                advantageous to employers as the process of hiring is quick and
                straightforward.
              </p>
              <p className="text-sm text-black/60 text-left">
                By the International Mobility Program of Canada, various
                cultural and economic interests of the country are served. Some
                of the popular forms to which IMP caters are:
                <ul className="pl-6 list-disc">
                  <li>County-specific agreements</li>
                  <li>Reciprocal youth exchange agreements</li>
                  <li>
                    Allowing international students who studied in Canada an
                    opportunity to work
                  </li>
                  <li>
                    Circumstances that are culturally or socially advantageous
                    to Canada
                  </li>
                </ul>
              </p>
              <Title subtitle="Eligible candidates for IMP Canada" />
              <p className="text-sm text-black/60 text-left">
                Besides Canada permanent residence, the ones who are eligible
                for the IMP program are:
                <ul className="pl-6 list-disc">
                  <li>
                    . Those who have a trade agreement in Canada like CUSMA or
                    CETA
                  </li>
                  <li>Those who enter Canada on an open work permit</li>
                  <li>
                    Those who get transferred to Canada as the employees of a
                    similar company that has branch outside Canada
                  </li>
                </ul>
              </p>
              <Title subtitle="How to apply for the IMP program?" />

              <p className="text-sm text-black/60 text-left">
                The application process for the International Mobility Program
                is simple. The three steps to get your business immigration for
                joining the IMP program are:
                <ul className="pl-6 list-disc">
                  <li>
                    Use the Employer portal to submit the employer’s offer. Here
                    a compliance fee of $230 has to be paid by the employer.
                  </li>
                  <li>
                    {" "}
                    When hiring a temporary employer with an open work permit,
                    the offer of employment form, and the compliance fee.
                  </li>
                  <li>
                    Next, the employer portal will provide you a number that
                    will help you to complete the work permit application.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
      </Container>

      <CTADefault
        title="Take the first step towards your family's Canadian dream
"
        subtitle={
          <p className="text-xl text-white/90">
            Book a consultation today to explore immigration options
            <br />
            and secure your family's future in Canada.
          </p>
        }
        image={"/service.jpg"}
      />
    </>
  );
}
