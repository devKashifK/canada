import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import Container from "./components/ui/container";
import CTA, { CTADefault } from "./components/ui/cta";
import Jobs from "./components/ui/jobs";
import { NewsFeedCard } from "./components/ui/newsCard";
import { InfiniteMovingCardsDemo } from "./components/ui/testimonial";
import Title from "./components/ui/Title";
import WhyChooseUs from "./components/ui/why-choose-us";
import { Autoplay } from "swiper/modules";
import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <div className="py-10 flex flex-col gap-12">
      <CTA />
      <WhyChooseUs />
      <Container className="flex gap-10">
        <Title
          cta="All News & Events"
          subtitle="Canada Immigration News"
          title="Latest News & Events"
          to=""
        />
        {/* <div className="grid grid-cols-3 gap-6"> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex gap-2 overflow-hidden"
          style={{ width: "100%" }}
          modules={[Autoplay]}
        >
          {dummyNews.map((item, index) => (
            <SwiperSlide key={index}>
              <NewsFeedCard
                title={item.title}
                subTitle={item.subTitle}
                comments={item.comments}
                date={item.date}
                description={item.description}
                image={item.image}
                key={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
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
        image={"/toronto.jpg"}
      />

      <InfiniteMovingCardsDemo />
      <Jobs />
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
