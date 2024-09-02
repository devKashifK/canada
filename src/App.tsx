import "./App.css";
import Container from "./components/ui/container";
import CTA, { CTADefault } from "./components/ui/cta";
import Jobs from "./components/ui/jobs";
import { InfiniteMovingCardsDemo } from "./components/ui/testimonial";
import Title from "./components/ui/Title";
import WhyChooseUs from "./components/ui/why-choose-us";
import NewsShowcase from "./pages/news/news-showcase";
import { Icon } from "@iconify/react/dist/iconify.js";
import Glass from "./lib/helpers";
import CountUp, { useCountUp } from "react-countup";

function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <div className="py-10 flex flex-col gap-12">
      <CTA />
      <WhyChooseUs />
      <Container>
        <Glass
          className="flex-col  gap-8 py-20 justify-center items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url(/immigration.png)`,
          }}
        >
          <div className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl border-gray-100  h-full absolute top-0 left-0 w-full"></div>

          <div className="md:flex-row flex-col flex z-10 gap-20 justify-start items-start">
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"mdi:checkbox-marked-outline"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <div className="flex gap-2 justify-center items-center">
                <CountUp
                  enableScrollSpy={true}
                  end={100}
                  className="text-6xl"
                />
                <span className="text-4xl">+</span>
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                successful visas in 2023
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"icon-park-outline:message-success"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />

              <div className="flex gap-2 justify-center items-center">
                <CountUp enableScrollSpy={true} end={14} className="text-6xl" />
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                Success Start Up Visa
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"cil:happy"}
                className="text-5xl cursor-pointer  rounded-full py-2 px-2"
              />
              <div className="flex gap-2 justify-center items-center">
                <CountUp enableScrollSpy={true} end={95} className="text-6xl" />
                <span className="text-4xl"> %</span>
              </div>

              <span className="uppercase text-lg font-primary tracking-widest">
                happy clients
              </span>
            </div>
            <div className="flex w-full md:flex-1 justify-center items-center  flex-col gap-4 text-white/60">
              <Icon
                icon={"game-icons:trophy-cup"}
                className="text-5xl cursor-pointer rounded-full py-2 px-2"
              />
              <div className="flex gap-2 flex-col  justify-center items-center">
                <CountUp enableScrollSpy={true} end={3} className="text-6xl" />
              </div>
              <span className="uppercase text-lg font-primary tracking-widest">
                Consultants
              </span>
            </div>
          </div>
        </Glass>
      </Container>
      <Container effect="slide-up" className="flex gap-10">
        <Title
          cta="All News & Events"
          subtitle="Canada Immigration News"
          title="Latest News & Events"
          to="/news"
        />
        <NewsShowcase />
      </Container>
      <CTADefault
        title="Empowering Your Canadian Dream"
        subtitle={
          <p className="text-xl text-white/90">
            Take the first step towards your family’s Canadian dream. Book a
            consultation today to explore <br />
            immigration options and secure your family’s future in Canada.
          </p>
        }
        image={"/immigrate.jpg"}
      />

      <InfiniteMovingCardsDemo />
      {/* <Jobs /> */}
    </div>
  );
}

export default App;

export const dummyNews = [
  {
    id: 1,
    image: "/news-1.jpg",
    date: "2023-11-28",
    title: "India Launches Chandrayaan-3 Mission",
    subTitle: "A Giant Leap for India",
    description:
      "India successfully launched its third lunar exploration mission, Chandrayaan-3, aiming to land on the Moon's south pole.",
    comments: "This is a great achievement for India's space program!",
  },
  {
    id: 2,
    image: "/news-2.jpg",
    date: "2024-03-15",
    title: "Artificial Intelligence Breakthrough",
    subTitle: "New Era of Technology",
    description:
      "Scientists achieve a significant breakthrough in artificial intelligence, developing a model capable of human-level understanding.",
    comments: "AI is going to change the world as we know it.",
  },
  {
    id: 3,
    image: "/news-3.jpg",
    date: "2024-05-08",
    title: "Climate Change Summit",
    subTitle: "Global Leaders Unite",
    description:
      "World leaders gather for a crucial climate change summit to address rising global temperatures and environmental challenges.",
    comments: "We need to take immediate action to protect our planet.",
  },
  {
    id: 4,
    image: "/news-4.jpg",
    date: "2024-06-22",
    title: "Economic Recession Fears",
    subTitle: "Global Markets in Turmoil",
    description:
      "Concerns about a global economic recession grow as stock markets experience significant volatility.",
    comments: "It's a tough time for the economy.",
  },
  {
    id: 5,
    image: "/news-5.webp",
    date: "2024-07-12",
    title: "New Electric Car Model",
    subTitle: "Revolutionizing Transportation",
    description:
      "A leading automaker unveils a groundbreaking electric car model with impressive range and performance.",
    comments: "The future of transportation is electric.",
  },
  {
    id: 6,
    image: "/news-6.jpg",
    date: "2024-08-01",
    title: "Space Tourism Takes Off",
    subTitle: "Commercial Flights to Space",
    description:
      "The first commercial space tourism flights are announced, marking a new era of space exploration.",
    comments: "Space tourism is the next big thing!",
  },
];
