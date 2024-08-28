import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import Title from "@/components/ui/Title";
import Glass from "@/lib/helpers";
import React from "react";

export default function DesignatedLearningInstitution() {
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
                Designated Learning Institution (DLI)
              </h3>

              <p className="text-sm text-black/60 text-left">
                To apply for a study permit, you need an acceptance letter from
                a designated learning institution. A designated learning
                institution is a school approved by a provincial or territorial
                government to host international students.
              </p>
              <p className="text-sm text-black/60 text-left">
                All primary and secondary schools in Canada are designated
                learning institutions.
              </p>
              <Title subtitle="Why do I need DLI Number?" />
              <p className="text-sm text-black/60 text-left">
                Applicants must provide the Designated Learning Institution
                number (DLI #) for their school of choice. The DLI number is the
                number that begins with the letter “O” on the study permit
                application form.
              </p>

              <p className="text-sm text-black/60 text-left">
                In certain cases, students may be exempt from providing a letter
                from a DLI, or from providing a DLI number in their application.
                These cases may include, but are not limited to:
                <ul className="pl-6 list-disc">
                  <li>
                    Students at a primary or secondary institution. These
                    schools are all automatically designated, and no DLI number
                    is provided
                  </li>
                  <li>
                    A family member of a foreign national whose application for
                    a work permit or a study permit is approved in writing
                    before the foreign national enters Canada. In this case, the
                    family member may obtain an open study permit.
                  </li>
                  <li>
                    Some institutions in Quebec are designated by the provincial
                    government, but do not have a unique DLI number.
                  </li>
                </ul>
              </p>
              <p className="text-sm text-black/60 text-left">
                Sometimes, institutions may lose their designated status.
                Depending on when the status is lost, the international student
                may be affected.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
      <Container>
        <Title
          subtitle="Designated Learning Institution (DLI)"
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
