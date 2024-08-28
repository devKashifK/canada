import Container from "@/components/ui/container";
import Glass from "@/lib/helpers";

export default function NovaScotia() {
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
                </h5>
              </div>

              <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-highlight rounded-md"></div>
              <div className="absolute bottom-[12px] transform rotate-90 -right-[12px] w-6 h-0.5 bg-highlight rounded-md"></div>
            </div>
            <div className="flex flex-col justify-start gap-6">
              <h3 className="tracking-wide text-left text-4xl text-black/70">
                Express Entry
              </h3>

              <p className="text-sm text-black/60 text-left">
                Canada's Express Entry program allows highly skilled candidates
                to attain Canadian permanent residency status in the shortest
                time, typically within six months. This is the fastest way for
                eligible candidates who are young, highly educated, and possess
                valuable work experience to come to Canada. However, achieving a
                high enough Comprehensive Ranking System (CRS) score in federal
                draws can be challenging.
              </p>
            </div>
          </div>
        </Glass>
      </Container>
    </>
  );
}
