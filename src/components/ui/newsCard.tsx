import { Icon } from "@iconify/react/dist/iconify.js";

export function truncateTextHeading(text, count = 2) {
  const words = text.split(" ");
  return words.slice(0, count).join(" ");
}

export const NewsFeedCard = ({
  image,
  title,
  subTitle,
  date,
  comments,
  description,
}: {
  image?: string;
  title?: string;
  subTitle?: string;
  date?: string;
  comments?: string;
  description?: string;
}) => {
  return (
    <div className="">
      {image && (
        <div className="flex flex-col gap-10 rounded-xl hover:shadow-xl transition-all duration-150 ease-in-out border border-slate-400 cursor-pointer">
          <div className="relative ">
            <img
              src={image}
              className="object-cover w-full h-52 rounded-t-xl"
            />
            <span className="bg-red-600 text-slate-50 h-14 w-14 flex flex-col justify-center items-center rounded-full text-wrap absolute right-4 top-4 text-sm font-bold">
              <span>14</span>
              <span className="">AUG</span>
            </span>
          </div>
          <div className="px-10 h-[260px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-slate-400 rounded-b-2xl ">
            <p className="text-2xl text-black/60 font-semibold text-left">
              {truncateTextHeading(title)}
            </p>
            <h5 className="text-lg font-normal text-red-600 text-left pb-3">
              {subTitle}
            </h5>
            <p className="text-sm font-normal text-left pb-5 text-stone-700">
              {description}
            </p>
            <div className="flex gap-5 text-stone-500 pb-4 text-xs">
              <div className="flex gap-1 ">
                <Icon
                  icon={"carbon:time"}
                  className="text-center text-black/60 mt-0.5"
                />
                <span className="text-black/60">6 mins ago</span>
              </div>
              <div className="flex gap-1">
                <Icon
                  icon={"carbon:chat"}
                  className="text-center text-black/60 mt-0.5"
                />
                <span className="text-black/60"> 39 comments</span>
              </div>
            </div>
            <div className="pb-6">
              <div className="bg-highlight flex justify-center items-center text-slate-50 px-3 py-1 text-sm text-left w-[50%] rounded-lg ">
                Read More
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
