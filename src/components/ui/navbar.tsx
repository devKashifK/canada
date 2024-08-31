import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./custom";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Item } from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";

export default function Navbar({ defaultStyle = false, type = "default" }) {
  return (
    <div
      className={cn(
        "rounded-t-2xl shadow-lg h-24 flex justify-start items-cente",
        type === "hero" ? "bg-gray-100=" : "bg-black/40"
      )}
    >
      <div className="h-full flex justify-center items-center px-8">
        <img src="/gt-removebg.png" alt="" className="" />
      </div>
      <div className="flex flex-col w-full justify-start items-start h-24">
        <div className="w-full flex gap-10 py-2 justify-end items-center px-6">
          <Link
            to={"/news"}
            className="bg-transparent text-xs font-bold flex flex-col gap-0.5 group"
          >
            <span
              className={cn(type === "default" ? "text-white" : "text-black")}
            >
              News
            </span>
            <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
          </Link>
          <Link
            to={"/visitor"}
            className="text-xs font-bold flex flex-col gap-0.5 group"
          >
            <span
              className={cn(type === "default" ? "text-white" : "text-black")}
            >
              Visitor
            </span>
            <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
          </Link>
          <Link
            to={"/family-sponsorship"}
            className="text-xs flex font-bold flex-col gap-0.5 group"
          >
            <span
              className={cn(type === "default" ? "text-white" : "text-black")}
            >
              Family Sponsorship
            </span>
            <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
          </Link>
          <Link
            to={"/price"}
            className="text-xs font-bold flex flex-col gap-0.5 group"
          >
            <span
              className={cn(type === "default" ? "text-white" : "text-black")}
            >
              Price Policy
            </span>
            <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
          </Link>
          <Link
            to={"/contact"}
            className="text-xs font-bold flex flex-col gap-0.5 group"
          >
            <span
              className={cn(type === "default" ? "text-white" : "text-black")}
            >
              Contact Us
            </span>
            <div className="group-hover:bg-white w-full border border-transparent ease-out duration-150"></div>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=16476197975"
            target="_blank"
            className="text-xs bg-green-500 text-white px-3 rounded-sm justify-center items-center py-1 flex  gap-2 group w-max -mr-6"
          >
            {/* <span
              className={cn(
                "group-hover:text-slate-900 duration-150 ease-out flex gap-1 justify-center items-center",
                defaultStyle && "text-white/60"
              )}
            > */}
            <Icon icon={"mdi:whatsapp"} className="text-xl" />
            {/* </span> */}
          </a>
          <Button
            className="py-0.5"
            icon={
              <div className="flex gap-2 justify-center items-center text-xs">
                <Icon icon={"mdi:phone"} />
                <span>+1855 477 9797</span>
              </div>
            }
          >
            <span className="text-xs">Free Consultation</span>
          </Button>
        </div>

        <div className="flex justify-start gap-4 items-center px-4 w-full h-16">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {router.map((navItem) => (
                <NavigationMenuItem
                  key={navItem.path}
                  className="relative min-w-12"
                >
                  {navItem.element ? (
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-highlight data-[state=open]:bg-highlight hover:bg-[#b33d3d] relative group bg-transparent "
                      )}
                    >
                      <Link
                        className={cn(
                          type === "default" &&
                            "text-white  group-hover:text-white"
                        )}
                        to={navItem.path}
                        unstable_viewTransition
                      >
                        {navItem.element}
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent data-[state=open]:text-white data-[state=open]:bg-[#b33d3d] py-1 focus:bg-[#b33d3d] hover:bg-[#b33d3d] ",
                        defaultStyle && "text-white/90"
                      )}
                    >
                      {navItem.path}
                    </NavigationMenuTrigger>
                  )}
                  {navItem.children && (
                    <NavigationMenuContent className="absolute bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 border-gray-100 rounded-md overflow-visible left-0 px-0">
                      <div className="w-[200px] py-2">
                        {renderSubmenus(navItem.children)}
                      </div>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* <button className="flex gap-1 justify-center items-center w-max px-4 hover:bg-accent hover:text-accent-foreground py-2">
            <Icon icon={"emojione:flag-for-liberia"} />
            EN
          </button>
          <button className="flex gap-1 justify-center items-center w-max px-4 py-2 hover:bg-accent hover:text-accent-foreground">
            <Icon icon={"twemoji:flag-vietnam"} />
            VN
          </button> */}
        </div>
      </div>
    </div>
  );
}

const renderSubmenus = (submenus) => {
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <ul>
      {submenus.map((subPage) => (
        <li
          key={subPage.path}
          className="flex text-left w-full px-3 py-1 border-b last:border-b-0 relative"
          onMouseEnter={() => setHoveredPath(subPage.path)}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {subPage.children ? (
            <div className="relative w-full">
              <div
                className={cn(
                  "flex justify-between cursor-pointer items-center text-left text-sm px-2 w-full rounded-md py-1",
                  hoveredPath === subPage.path ? "bg-[#b33d3d] text-white" : ""
                )}
              >
                <span>{subPage.path}</span>
                <Icon icon={"zondicons:cheveron-right"} />
              </div>
              <div
                className={`absolute top-0 left-[188px] w-[300px] bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 border-gray-100 rounded-md overflow-visible text-left py-0.5 flex flex-col z-10 
                  transition-all duration-300 transform ease-out ${
                    hoveredPath === subPage.path
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
              >
                {subPage.children.map((item) => (
                  <Link
                    key={item.path}
                    className="group rounded-md text-left cursor-pointer text-sm border-b py-1 last:border-b-0 px-2 w-full"
                    to={item.path}
                    unstable_viewTransition
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                        backgroundColor: "#b33d3d",
                        color: "#fff",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="px-3 py-1 rounded-md"
                    >
                      {item.element}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className="text-left hover:bg-[#b33d3d] hover:text-white py-1 rounded-md text-sm border-b last:border-b-0 px-2 w-full"
              to={subPage.path}
              unstable_viewTransition
            >
              {subPage.element}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const router = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "About",
    children: [
      {
        path: "/about",
        element: "About",
      },
      {
        path: "/our-service",
        element: "Our Service",
      },
      {
        path: "/certificate-membership",
        element: "Certificate Membership",
      },
      {
        path: "/customer-testimonials",
        element: "Customer Testimonials",
      },
      {
        path: "/book-appointment",
        element: "Book Appointment",
      },
      {
        path: "/why-choose-us",
        element: "Why Choose Us",
      },
    ],
  },

  {
    path: "Immigration",
    children: [
      {
        path: "Express Entry",
        element: `Express Entry`,
        children: [
          {
            path: "/immigration/express-entry/federal-skilled-worker",
            element: "Fedral Skilled Worker",
          },
          {
            path: "/immigration/express-entry/federal-skilled-trade",
            element: "Fedral Skilled Trade",
          },
          {
            path: "/immigration/express-entry/canadian-experience-class",
            element: "Canadian Experience Class",
          },
        ],
      },
      {
        path: "Provincial Nominee Programs",
        children: [
          {
            path: "/immigration/provincial-nominee-programs/alberta-immigration-aaip",
            element: "Alberta (AAIP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/atlantic-immigration-aipp",
            element: "Atlantic Immigration (AIPP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/british-columbia-bcpnp",

            element: "British Colombia (BC PNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/ontario-oinp",
            element: "Ontario (OINP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/manitoba-mpnp",
            element: "Manitoba (MPNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/new-brunswick-nbpnp",
            element: "New Brunswick (NBPNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/newfoundland-and-labrador",
            element: "Newfoundland and Labrador",
          },
          {
            path: "/immigration/provincial-nominee-programs/saskatchewan-sinp",
            element: "Saskatchewan (SINP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/northwest-territories",
            element: "Northwest Territories",
          },
          {
            path: "/immigration/provincial-nominee-programs/nova-scotia-nsnp",
            element: "Nova Scotia (NSNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/prince-edward-island-peipnp",
            element: "Prince Edward Island (PEI PNP)",
          },
          {
            path: "/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip",
            element: "Rural & Northern Immigration Pilot (RNIP)",
          },

          {
            path: "/immigration/provincial-nominee-programs/yukon-ynp",
            element: "Yukon (YNP)",
          },
        ],
      },
      {
        path: "/immigration/immigration-challenges",
        element: "Immigration Challenges",
      },
    ],
  },
  {
    path: "Business",
    children: [
      {
        path: "Quebec",
        children: [
          {
            path: "/business/quebec/quebec-investor",
            element: "Quebec Investor",
          },
          {
            path: "/business/quebec/quebec-entrepreneur",
            element: "Quebec Entrepreneur",
          },
          {
            path: "/business/quebec/quebec-self-employed",
            element: "Self Employed",
          },
        ],
      },
      {
        path: "Federal Programs",
        children: [
          {
            path: "/business/federal-programs/start-up-visa",
            element: " Start-Up Visa (SUV)",
          },
          {
            path: "/business/federal-programs/intra-company-transfer",
            element: "Intra-company transfer (ICT)",
          },
          {
            path: "/business/federal-programs/benefit-to-canada",
            element: "Significant Benefit to Canada (C10)",
          },
          {
            path: "/business/federal-programs/owner-operator",
            element: "Owner Operator LMIA",
          },
          {
            path: "/business/federal-programs/self-employed-person",
            element: "Self-Employed Persons (C11)",
          },
        ],
      },
    ],
  },
  {
    path: "Work And Jobs",
    children: [
      {
        path: "/work-and-jobs/work-permit",
        element: "Work Permit",
      },
      {
        path: "/work-and-jobs/international-mobility-program",
        element: "International Mobility Program (IMP)",
      },
      {
        path: "/work-and-jobs/in-demand-jobs",
        element: "In Demand Jobs",
      },
      {
        path: "/work-and-jobs/support-for-employers",
        element: "Support For Employers",
      },

      {
        path: "/work-and-jobs/lmia",
        element: "Lmia",
      },
      // {
      //   path: "/work-and-jobs/caregiver-program",
      //   element: "Caregiver Program",
      // },
      {
        path: "/work-and-jobs/teer-categories-and-noc",
        element: "TEER Categories & NOC Codes",
      },
    ],
  },
  {
    path: "Study",
    children: [
      {
        path: "/study/post-graduate-work-permit",
        element: "Post Graduate Work Permit (PGWP)",
      },
      {
        path: "/study/study-in-canada",
        element: "Study In Canada",
      },
      {
        path: "/study/pathway-from-study-to-pr",
        element: "Pathway From Study To PR",
      },
      {
        path: "/study/designated-learning-institution",
        element: "Designated Learning Institution (DLI)",
      },
      {
        path: "/study/student-direct-stream",
        element: "Student Direct Stream (SDS)",
      },
    ],
  },
];
