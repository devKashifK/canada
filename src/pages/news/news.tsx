import Container from "@/components/ui/container";
import MovingCardBorder from "@/components/ui/moving-card-border";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "./../../supabaseClient";
import { title } from "process";
import { Link } from "react-router-dom";

export default function News() {
  const { data } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const response = await supabase.from("News").select("*");
      return response.data;
    },
  });

  return (
    <Container effect="none" className="w-[80%]">
      <VerticalTimeline layout={"2-columns"} className="w-full" animate>
        {data &&
          data.map((item, index) => {
            const colors = ["#F2961B", "#007bff", "#28a745", "#ffc107"];
            const bgColor = colors[index % colors.length];
            const formattedDate = new Date(item.pub_date).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: `7px solid ${bgColor}`,
                }}
                date={formattedDate}
                dateClassName={{
                  color: "white",
                  fontSize: "90px",
                  display: "flex !important",
                }}
                contentStyle={{
                  background: bgColor,
                  alignText: "left",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignItems: "start",
                  color: "#fff",
                  cursor: "pointer",
                  marginTop: "-20px",
                }}
                iconStyle={{
                  background: bgColor,
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                  marginLeft: "-13px",
                  padding: "2px",
                }}
                icon={
                  <Icon icon={"material-symbols:compost"} className="w-5 h-2" />
                }
              >
                <Link to={`/news/${item.id}`} className="flex w-full flex-col">
                  <div className="flex gap-2 flex-col group">
                    <h3 className="text-left text-2xl tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-left !text-xs text-white/90 tracking-wider">
                      {item.description}{" "}
                      <span className="text-black group-hover:underline">
                        Read More
                      </span>
                    </p>
                  </div>

                  <div className="flex w-full justify-between items-center gap-2 mt-4">
                    <div className="flex gap-2 items-center">
                      {JSON.parse(item.categories).map((category, index) => (
                        <Badge>{category}</Badge>
                      ))}
                    </div>
                    <div className="flex justify-start items-center -mt-4">
                      <p className="font-primary tracking-widest">
                        Author:{" "}
                        <span className="font-secondary text-white/90 tracking-normal">
                          {item.creator}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </Container>
  );
}
