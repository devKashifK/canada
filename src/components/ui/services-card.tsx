import Glass from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ServicesCard = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Glass className="flex flex-col px-10 gap-3 ">
      <div className="flex flex-col ">
        <h5 className="text-4xl text-left text-highlight">{title}</h5>
        {/* <p className="text-sm text-left text-black/70">
            {truncateTextHeading(item.subtitle)}
          </p> */}
      </div>
      <p className="text-xs text-left text-black/80">
        {description}
        <span className="text-black">Read More</span>
      </p>
      <div className="w-full flex justify-start items-start mt-4">
        <div
          // to={item.href}
          className=" flex flex-row gap-2 bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max"
        >
          Find Out More
          <Icon icon={"carbon:arrow-right"} className="mt-1" />
        </div>
      </div>
    </Glass>
  );
};
