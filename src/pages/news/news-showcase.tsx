import { useQuery } from "@tanstack/react-query";
import React from "react";
import { supabase } from "./../../supabaseClient";
import { Autoplay } from "swiper/modules";
import { NewsFeedCard } from "@/components/ui/newsCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewsShowcase() {
  const { data } = useQuery({
    queryKey: ["showCasePost"],
    queryFn: async () => {
      const response = await supabase.from("News").select("*").limit(6);
      return response.data;
    },
  });
  console.log(data);
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="flex gap-2 overflow-hidden"
      style={{ width: "100%" }}
      modules={[Autoplay]}
    >
      {data &&
        data.map((item, index) => {
          const formattedDate = new Date(item.pub_date).toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          return (
            <SwiperSlide key={index}>
              <NewsFeedCard
                title={item.title}
                subTitle={item.subTitle}
                author={item.creator.toUpperCase()}
                date={formattedDate}
                description={item.description}
                image={item.image}
                key={item.id}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
