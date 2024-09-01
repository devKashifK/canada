import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "./../../supabaseClient";
import Container from "@/components/ui/container";
import "./style.css";
import Glass from "@/lib/helpers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Title from "@/components/ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { truncateTextHeading } from "@/components/ui/newsCard";

export default function Post() {
  const { postId } = useParams();

  const { data } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const response = await supabase
        .from("News")
        .select("*")
        .eq("id", postId)
        .single();
      return response.data;
    },
  });

  const { data: recent } = useQuery({
    queryKey: ["recentPost"],
    queryFn: async () => {
      const response = await supabase
        .from("News")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      return response.data;
    },
  });
  const { data: nextPost } = useQuery({
    queryKey: ["nextPost"],
    queryFn: async () => {
      const response = await supabase
        .from("News")
        .select("*")
        .eq("id", postId + 1)
        .single();
      return response.data;
    },
  });

  const { data: prevPost } = useQuery({
    queryKey: ["prevPost"],
    queryFn: async () => {
      const response = await supabase
        .from("News")
        .select("*")
        .eq("id", postId - 1)
        .single();
      return response.data;
    },
  });

  const formattedDate = new Date(data && data.pub_date).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <Container className="text-left post flex gap-6 flex-row">
      <Glass className="px-14 w-[70%] py-10 flex flex-col gap-8">
        {data && data.image ? (
          <img
            src={data.image}
            alt="news"
            className="w-full h-[400px] object-cover"
          />
        ) : (
          <img src={getRandomImage()} alt="" />
        )}
        {data && <div dangerouslySetInnerHTML={{ __html: data.content }} />}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Badge className="bg-yellow-400">{formattedDate}</Badge>
            <Badge className="bg-sky-400">Author: {data && data.creator}</Badge>
          </div>
          <div className="flex gap-2">
            {data &&
              JSON.parse(data.categories) &&
              JSON.parse(data.categories).map((category, index) => (
                <Badge
                  key={index}
                  className={cn(
                    "py-1 cursor-pointer",
                    index === 0 && "bg-red-400"
                  )}
                >
                  {category}
                </Badge>
              ))}
          </div>
        </div>

        <div className="flex justify-between w-full gap-20 mt-10">
          <div className="w-full">
            {prevPost && (
              <HoverCard
                icon={"material-symbols:arrow-left-alt"}
                title={prevPost.title}
                to={`/news/${Number(postId) - 1}`}
                subtitle="Previous Post"
                color="bg-sky-400"
              />
            )}
          </div>
          <div className="w-full">
            {nextPost && (
              <HoverCard
                icon="material-symbols:arrow-right-alt"
                to={`/news/${Number(postId) + 1}`}
                subtitle="Next Post"
                title={nextPost.title}
                color="bg-yellow-400 !h-20"
              />
            )}
          </div>
        </div>
      </Glass>
      <Glass className="w-[30%] px-8 flex flex-col gap-8 h-max">
        <div className="flex flex-col">
          <Title title={"Recent Posts"} />
          <div className="bg-red-400 w-[90%] h-0.5"></div>
        </div>
        <div className="flex gap-2 flex-col">
          {recent &&
            recent.map((item, index) => (
              <Link
                className="flex gap-2"
                to={`/news/${item.id}`}
                key={index}
                unstable_viewTransition={true}
              >
                <Icon icon="material-symbols:article" className="mt-1" />
                <div className="w-[90%]">{item.title}</div>
              </Link>
            ))}
        </div>
      </Glass>
    </Container>
  );
}

function HoverCard({
  title,
  icon,
  color,
  className,
  to,
  subtitle,
}: {
  subtitle?: string;
  icon?: string | React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  cta?: string | React.ReactNode;
  color?: string;
  className?: string;
  to?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "group flex-1 relative cursor-pointer overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 shadow-2xl rounded-2xl  px-2  ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 py-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "absolute left-[40px] w-full h-full top-10 z-0 rounded-full transition-all duration-300 group-hover:scale-[10]",
          isHovered && color
        )}
      ></span>

      <Link to={to} className="relative z-10 mx-auto h-20 w-full ">
        <p className="text-xs font-primary tracking-widest flex gap-2 items-center">
          <span>
            <Icon icon={icon} className="-mt-1" />
          </span>
          {subtitle}
        </p>
        {truncateTextHeading(title, 6)}
      </Link>
    </div>
  );
}

function getRandomImage() {
  const images = [
    "/aaa.jpg",
    "/about.png",
    "/alberta.jpg",
    "/british.jpg",
    "/canada.jpg",
    "/cost.jpg",
    "/business.jpg",
    "/experince.jpg",
    "/expressEntry.png",
    "/family.jpg",
    "/federalSkill.png",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
