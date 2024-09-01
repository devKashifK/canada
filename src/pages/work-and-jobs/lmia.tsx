import React from "react";
import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import { featuresPage } from "../immigration/provincial-nominee-programs/alberta-immigration-aaip";
import { Feature } from "@/components/ui/cards-set";

export default function Lmia() {
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
                LMIA
              </h3>
              <Title subtitle="What is LMIA?" />

              <p className="text-sm text-black/60 text-left">
                LMIA job offer, where LMIA stands for Labour Market Impact
                Assessment is well known to those who seeking Canada immigration
                as a confirm selection. First of all, one must know about LMIA
                and why it is important for any employer!Labour Market Impact
                Assessment as it’s reflected by the name, paperwork needed to be
                done if any Canadian employer wants to hire a foreign national
                to work for him or her.
              </p>
              <p className="text-sm text-black/60 text-left">
                According to the Canada law, you can not hire someone from
                outside Canada if there are candidates within Canada. Canada
                always gives priority to them who living in Canada as a citizen
                or with work-permit or holding permanent residence. So as you
                can see it’s quite difficult to get an LMIA and costly as well.
                Any employer must go through a 3-4 advertisement before applying
                for the LMIA.
              </p>
              <p className="text-sm text-black/60 text-left">
                The Canadian Visitor Visa is designed for individuals who wish
                to enter the country temporarily for tourism, family visits, or
                business purposes. It is essential to distinguish between a
                tourist visa and other types of visas, such as work or study
                permits, as they serve different purposes.
              </p>
              <Title
                subtitle="LMIA job offer is basically two types"
                title={
                  <p className="text-4xl text-black/50 w-full text-left pt-3">
                    Permanent Job Offer
                  </p>
                }
              />

              <p className="text-sm text-black/60 text-left">
                For NOC 0, A, or B position this LMIA job offer is applicable.
                There’s no requirement of application fee but it won’t provide a
                work permit. Moreover, it will support your Express Entry
                application. It may take time between 10-20 days to process.
              </p>
              <Title
                title={
                  <p className="text-4xl text-black/50 w-full text-left pt-3">
                    Temporary Job Offer
                  </p>
                }
              />
              <p className="text-sm text-black/60 text-left">
                For the temporary LMIA job offer, things are a little different.
                Here an application fee of 1000$ needed to be paid. It basically
                provides you a work permit and can be used to support your
                Express Entry application for NOC 0, A, or B positions only. It
                may take months to process.
              </p>
              <p className="text-sm text-highlight text-left">
                ** There’s a Dual Intent LMIA where you can apply for both
                LMIAs.
              </p>
              <Title subtitle="LMIA exempted job offers" />
              <p className="text-sm text-black/60 text-left">
                There are some LMIA exempted job offers for the skilled
                immigrants looking for CANADA PR through Express Entry.
                <ul className="pl-6 list-disc">
                  <li>
                    If you have a valid work permit and work for your employer
                    for more than one year.
                  </li>
                  <li>
                    If your work permit is LMIA exempted under an international
                    agreement like the USA, AUS, etc. or a federal-provincial
                    agreement or the Canadian interest category.
                  </li>
                  <li>
                    In the case of international students with an open work
                    permit, they are free with all these.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col px-10 gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <Title
              subtitle="LMIA"
              title={
                <p className="text-4xl text-black/50 w-full text-left pt-3">
                  Take the first step towards your family's Canadian dream
                </p>
              }
            />

            <div className="flex flex-col justify-start gap-6">
              <p className="text-sm text-black/60 text-left">
                For personalized assistance and expert guidance, contact
                GreenTech Resources Worldwide Canada so our experts can help you
                navigate the work permit application process and ensure a smooth
                transition to working in Canada
              </p>
            </div>
          </div>
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
