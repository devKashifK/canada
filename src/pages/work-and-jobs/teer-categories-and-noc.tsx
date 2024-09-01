import Container from "@/components/ui/container";
import { CTADefault } from "@/components/ui/cta";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Glass from "@/lib/helpers";
import React, { useState } from "react";
import NewsShowcase from "../news/news-showcase";

export default function TeerCategoriesAndNoc() {
  const [count, setCount] = useState(70);
  return (
    <>
      <Container>
        <Glass className="flex flex-col">
          <Table>
            <TableCaption>TEER categories and examples of jobs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">TEER</TableHead>
                <TableHead>Occupation types</TableHead>
                <TableHead> Examples</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {config.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-left">
                    {item.teer}
                  </TableCell>
                  <TableCell className="text-left">{item.type}</TableCell>
                  <TableCell className="text-left">{item.example}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Glass>
      </Container>
      <Container>
        <Glass className="flex flex-col">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">TIER</TableHead>
                <TableHead>NOC</TableHead>
                <TableHead>Job</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobConfig.slice(0, count).map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-left">
                    {item.tier}
                  </TableCell>
                  <TableCell className="text-left">{item.noc}</TableCell>
                  <TableCell className="text-left">{item.job}</TableCell>
                </TableRow>
              ))}
              <button
                className="w-full flex justify-center items-center  text-center bg-highlight text-white mt-6"
                onClick={() => setCount(140)}
              >
                Load More
              </button>
            </TableBody>
          </Table>
        </Glass>
      </Container>
      <CTADefault
        title="Take the first step towards your family's Canadian dream"
        subtitle="Book a consultation today to explore options and secure your family's future in Canada"
        image="/toronto.jpg"
      />
      <Container>
        <NewsShowcase />
      </Container>
    </>
  );
}

const config = [
  {
    id: 1,
    teer: "TEER 0",
    type: "Management occupations",
    example:
      "Advertising, marketing and public relations managers Financial managers",
  },
  {
    id: 2,
    teer: "TEER 1",
    type: "Occupations that usually require a university degree",
    example: "Financial advisors, Software engineers",
  },
  {
    id: 3,
    teer: "TEER 2",
    type: "Occupations that usually require : a college diploma,  apprenticeship training of 2 or more years, or,supervisory occupations",
    example:
      "Computer network and web technicians, Medical laboratory technologists",
  },
  {
    id: 4,
    teer: "TEER 3",
    type: "Occupations that usually require: a college diploma, apprenticeship training of less than 2 years, or more than 6 months of on-the-job training",
    example: "Bakers, Dental assistants and dental laboratory assistants",
  },
  {
    id: 5,
    teer: "TEER 4",
    type: "Occupations that usually require",
    example:
      "Advertising, marketing and public relations managers Financial managers",
  },
  {
    id: 1,
    teer: "TEER 0",
    type: "Occupations that usually require: a high school diploma, or several weeks of on-the-job training",
    example:
      "Home child care providers, Retail salespersons and visual merchandisers",
  },
  {
    id: 1,
    teer: "TEER 0",
    type: "Occupations that usually need short-term work demonstration and no formal education",
    example:
      "Landscaping and grounds maintenance labourers Delivery service drivers and door-to-door distributors",
  },
];

const jobConfig = [
  { tier: 0, noc: 10010, job: "Financial managers" },
  { tier: 0, noc: 10011, job: "Human resources managers" },
  { tier: 0, noc: 10012, job: "Purchasing managers" },
  { tier: 0, noc: 10019, job: "Other administrative services managers" },
  {
    tier: 0,
    noc: 10020,
    job: "Insurance, real estate and financial brokerage managers",
  },
  { tier: 0, noc: 10021, job: "Banking, credit and other investment managers" },
  {
    tier: 0,
    noc: 10022,
    job: "Advertising, marketing and public relations managers",
  },
  { tier: 0, noc: 10029, job: "Other business services managers" },
  { tier: 0, noc: 10030, job: "Telecommunication carriers managers" },
  { tier: 1, noc: 11100, job: "Financial auditors and accountants" },
  { tier: 1, noc: 11101, job: "Financial and investment analysts" },
  { tier: 1, noc: 11102, job: "Financial advisors" },
  {
    tier: 1,
    noc: 11103,
    job: "Securities agents, investment dealers and brokers",
  },
  { tier: 1, noc: 11109, job: "Other financial officers" },
  { tier: 1, noc: 11200, job: "Human resources professionals" },
  {
    tier: 1,
    noc: 11201,
    job: "Professional occupations in business management consulting",
  },
  {
    tier: 1,
    noc: 11202,
    job: "Professional occupations in advertising, marketing and public relations",
  },
  {
    tier: 2,
    noc: 12010,
    job: "Supervisors, general office and administrative support workers",
  },
  {
    tier: 2,
    noc: 12011,
    job: "Supervisors, finance and insurance office workers",
  },
  {
    tier: 2,
    noc: 12012,
    job: "Supervisors, library, correspondence and related information workers",
  },
  {
    tier: 2,
    noc: 12013,
    job: "Supervisors, supply chain, tracking and scheduling coordination occupations",
  },
  { tier: 2, noc: 12100, job: "Executive assistants" },
  { tier: 2, noc: 12101, job: "Human resources and recruitment officers" },
  {
    tier: 2,
    noc: 12102,
    job: "Procurement and purchasing agents and officers",
  },
  { tier: 2, noc: 12103, job: "Conference and event planners" },
  { tier: 2, noc: 12104, job: "Employment insurance and revenue officers" },
  {
    tier: 2,
    noc: 12110,
    job: "Court reporters, medical transcriptionists and related occupations",
  },
  { tier: 2, noc: 12111, job: "Health information management occupations" },
  { tier: 2, noc: 12112, job: "Records management technicians" },
  {
    tier: 2,
    noc: 12113,
    job: "Statistical officers and related research support occupations",
  },
  { tier: 2, noc: 12200, job: "Accounting technicians and bookkeepers" },
  { tier: 2, noc: 12201, job: "Insurance adjusters and claims examiners" },
  { tier: 2, noc: 12202, job: "Insurance underwriters" },
  { tier: 2, noc: 12203, job: "Assessors, business valuators and appraisers" },
  { tier: 3, noc: 13100, job: "Administrative officers" },
  { tier: 3, noc: 13101, job: "Property administrators" },
  { tier: 3, noc: 13102, job: "Payroll administrators" },
  { tier: 3, noc: 13110, job: "Administrative assistants" },
  { tier: 3, noc: 13111, job: "Legal administrative assistants" },
  { tier: 3, noc: 13112, job: "Medical administrative assistants" },
  { tier: 3, noc: 13200, job: "Customs, ship and other brokers" },
  {
    tier: 3,
    noc: 13201,
    job: "Production and transportation logistics coordinators",
  },
  { tier: 4, noc: 14100, job: "General office support workers" },
  { tier: 4, noc: 14101, job: "Receptionists" },
  { tier: 4, noc: 14102, job: "Personnel clerks" },
  {
    tier: 4,
    noc: 14103,
    job: "Court clerks and related court services occupations",
  },
  { tier: 4, noc: 14110, job: "Survey interviewers and statistical clerks" },
  { tier: 4, noc: 14111, job: "Data entry clerks" },
  {
    tier: 4,
    noc: 14112,
    job: "Desktop publishing operators and related occupations",
  },
  { tier: 4, noc: 14200, job: "Accounting and related clerks" },
  { tier: 4, noc: 14201, job: "Banking, insurance and other financial clerks" },
  { tier: 4, noc: 14202, job: "Collection clerks" },
  { tier: 4, noc: 14300, job: "Library assistants and clerks" },
  {
    tier: 4,
    noc: 14301,
    job: "Correspondence, publication and regulatory clerks",
  },
  { tier: 4, noc: 14400, job: "Shippers and receivers" },
  { tier: 4, noc: 14401, job: "Storekeepers and partspersons" },
  { tier: 4, noc: 14402, job: "Production logistics workers" },
  { tier: 4, noc: 14403, job: "Purchasing and inventory control workers" },
  { tier: 4, noc: 14404, job: "Dispatchers" },
  { tier: 4, noc: 14405, job: "Transportation route and crew schedulers" },
  { tier: 0, noc: 20010, job: "Engineering managers" },
  { tier: 0, noc: 20011, job: "Architecture and science managers" },
  { tier: 0, noc: 20012, job: "Computer and information systems managers" },
  { tier: 1, noc: 21100, job: "Physicists and astronomers" },
  { tier: 1, noc: 21101, job: "Chemists" },
  { tier: 1, noc: 21102, job: "Geoscientists and oceanographers" },
  { tier: 1, noc: 21103, job: "Meteorologists and climatologists" },
  {
    tier: 1,
    noc: 21109,
    job: "Other professional occupations in physical sciences",
  },
  { tier: 1, noc: 21110, job: "Biologists and related scientists" },
  { tier: 1, noc: 21111, job: "Forestry professionals" },
  {
    tier: 1,
    noc: 21112,
    job: "Agricultural representatives, consultants and specialists",
  },
  {
    tier: 1,
    noc: 21120,
    job: "Public and environmental health and safety professionals",
  },
  { tier: 1, noc: 21200, job: "Architects" },
  { tier: 1, noc: 21201, job: "Landscape architects" },
  { tier: 1, noc: 21202, job: "Urban and land use planners" },
  { tier: 1, noc: 21203, job: "Land surveyors" },
  { tier: 1, noc: 21210, job: "Mathematicians, statisticians and actuaries" },
  { tier: 1, noc: 21211, job: "Data scientists" },
  { tier: 1, noc: 21220, job: "Cybersecurity specialists" },
  { tier: 1, noc: 21221, job: "Business systems specialists" },
  { tier: 1, noc: 21222, job: "Information systems specialists" },
  { tier: 1, noc: 21223, job: "Database analysts and data administrators" },
  { tier: 1, noc: 21230, job: "Computer systems developers and programmers" },
  { tier: 1, noc: 21231, job: "Software engineers and designers" },
  { tier: 1, noc: 21232, job: "Software developers and programmers" },
  { tier: 1, noc: 21233, job: "Web designers" },
  { tier: 1, noc: 21234, job: "Web developers and programmers" },
  { tier: 1, noc: 21240, job: "Computer network and web technicians" },
  { tier: 1, noc: 21241, job: "Computer network technicians" },
  { tier: 1, noc: 21242, job: "Web technicians" },
  { tier: 1, noc: 21300, job: "Civil engineers" },
  { tier: 1, noc: 21301, job: "Mechanical engineers" },
  { tier: 1, noc: 21302, job: "Electrical and electronics engineers" },
  { tier: 1, noc: 21303, job: "Industrial and manufacturing engineers" },
  { tier: 1, noc: 21304, job: "Metallurgical and materials engineers" },
  { tier: 1, noc: 21310, job: "Mining engineers" },
  { tier: 1, noc: 21311, job: "Geological engineers" },
  { tier: 1, noc: 21312, job: "Petroleum engineers" },
  { tier: 1, noc: 21320, job: "Aerospace engineers" },
  { tier: 1, noc: 21321, job: "Aircraft designers and engineers" },
  { tier: 1, noc: 21322, job: "Marine engineers" },
  {
    tier: 1,
    noc: 21330,
    job: "Computer engineers (except software engineers and designers)",
  },
  {
    tier: 1,
    noc: 21340,
    job: "Software testers and quality assurance analysts",
  },
  { tier: 1, noc: 21400, job: "Agricultural and bio-resource engineers" },
  { tier: 1, noc: 21401, job: "Biological engineers" },
  { tier: 1, noc: 21410, job: "Environmental engineers" },
  { tier: 1, noc: 21411, job: "Water management engineers" },
  { tier: 1, noc: 21420, job: "Transportation engineers" },
  { tier: 1, noc: 21421, job: "Highway and bridge engineers" },
  { tier: 1, noc: 21422, job: "Railway engineers" },
  { tier: 1, noc: 21430, job: "Automotive engineers" },
  { tier: 1, noc: 21431, job: "Design engineers" },
  { tier: 1, noc: 21432, job: "Manufacturing engineers" },
  {
    tier: 2,
    noc: 22100,
    job: "Technologists and technicians in architecture, civil engineering and surveying",
  },
  {
    tier: 2,
    noc: 22101,
    job: "Technologists and technicians in mechanical engineering",
  },
  {
    tier: 2,
    noc: 22102,
    job: "Technologists and technicians in industrial engineering",
  },
  {
    tier: 2,
    noc: 22103,
    job: "Technologists and technicians in electrical and electronics engineering",
  },
  {
    tier: 2,
    noc: 22104,
    job: "Technologists and technicians in petroleum engineering",
  },
  {
    tier: 2,
    noc: 22110,
    job: "Technologists and technicians in chemical engineering",
  },
  {
    tier: 2,
    noc: 22111,
    job: "Technologists and technicians in metallurgical engineering",
  },
  {
    tier: 2,
    noc: 22112,
    job: "Technologists and technicians in agricultural engineering",
  },
  {
    tier: 2,
    noc: 22113,
    job: "Technologists and technicians in biological engineering",
  },
  {
    tier: 2,
    noc: 22120,
    job: "Technologists and technicians in computer and information systems",
  },
  { tier: 2, noc: 22121, job: "Computer network and systems technicians" },
  { tier: 2, noc: 22122, job: "Web technicians and related occupations" },
  {
    tier: 2,
    noc: 22130,
    job: "Technologists and technicians in electrical engineering",
  },
  {
    tier: 2,
    noc: 22140,
    job: "Technologists and technicians in aerospace engineering",
  },
  {
    tier: 2,
    noc: 22150,
    job: "Technologists and technicians in marine engineering",
  },
  {
    tier: 2,
    noc: 22160,
    job: "Technologists and technicians in mining engineering",
  },
  {
    tier: 2,
    noc: 22170,
    job: "Technologists and technicians in geological and geophysical engineering",
  },
  {
    tier: 2,
    noc: 22180,
    job: "Technologists and technicians in industrial design",
  },
  {
    tier: 2,
    noc: 22200,
    job: "Technologists and technicians in industrial engineering",
  },
  {
    tier: 2,
    noc: 22201,
    job: "Technologists and technicians in mechanical engineering",
  },
  {
    tier: 2,
    noc: 22202,
    job: "Technologists and technicians in automotive engineering",
  },
  { tier: 3, noc: 22300, job: "Machinists" },
  { tier: 3, noc: 22301, job: "Tool and die makers" },
  { tier: 3, noc: 22302, job: "Welders and related machine operators" },
  { tier: 3, noc: 22303, job: "Sheet metal workers" },
  { tier: 3, noc: 22304, job: "Boilermakers" },
  { tier: 3, noc: 22305, job: "Ironworkers" },
  {
    tier: 3,
    noc: 22306,
    job: "Structural metal and platework fabricators and fitters",
  },
  {
    tier: 3,
    noc: 22307,
    job: "Construction millwrights and industrial mechanics",
  },
  { tier: 3, noc: 22308, job: "Heavy-duty equipment mechanics" },
  { tier: 3, noc: 22309, job: "Small engine and equipment mechanics" },
  { tier: 3, noc: 22310, job: "Railway car technicians" },
  { tier: 3, noc: 22311, job: "Aircraft mechanics and aircraft inspectors" },
  {
    tier: 3,
    noc: 22312,
    job: "Automotive service technicians, truck and bus mechanics and mechanical repairers",
  },
  { tier: 3, noc: 22313, job: "Motor vehicle body repairers" },
  {
    tier: 3,
    noc: 22314,
    job: "Automotive painters, refinishers and other automotive service occupations",
  },
  {
    tier: 3,
    noc: 22315,
    job: "Motorcycle, all-terrain vehicle and other related mechanics",
  },
  { tier: 3, noc: 22316, job: "Bicycle mechanics" },
  { tier: 3, noc: 22317, job: "Recreational vehicle service technicians" },
  {
    tier: 3,
    noc: 22318,
    job: "Electrical and electronics engineering technologists and technicians",
  },
  {
    tier: 3,
    noc: 22319,
    job: "Industrial engineering and manufacturing technologists and technicians",
  },
  {
    tier: 3,
    noc: 22320,
    job: "Electromechanical and automation technologists and technicians",
  },
  { tier: 3, noc: 22321, job: "Drafting technologists and technicians" },
  { tier: 3, noc: 22322, job: "Industrial designers" },
  { tier: 3, noc: 22323, job: "Technical sales specialists" },
  {
    tier: 4,
    noc: 22400,
    job: "Assemblers, fabricators and inspectors, industrial electrical motors, transformers and related equipment",
  },
  {
    tier: 4,
    noc: 22401,
    job: "Assemblers and fabricators, electrical and electronic products and equipment",
  },
  {
    tier: 4,
    noc: 22402,
    job: "Assemblers and fabricators, transportation equipment",
  },
  {
    tier: 4,
    noc: 22403,
    job: "Inspectors and testers, electrical and electronics products",
  },
  {
    tier: 4,
    noc: 22404,
    job: "Inspectors and testers, transportation equipment",
  },
  {
    tier: 4,
    noc: 22410,
    job: "Inspectors and testers, mechanical, electrical and electronics products and equipment",
  },
  {
    tier: 4,
    noc: 22411,
    job: "Inspectors and testers, precision instrument products and equipment",
  },
  {
    tier: 4,
    noc: 22420,
    job: "Inspectors and testers, transportation equipment",
  },
  {
    tier: 4,
    noc: 22421,
    job: "Inspectors and testers, electrical and electronics products and equipment",
  },
  {
    tier: 4,
    noc: 22422,
    job: "Inspectors and testers, mechanical products and equipment",
  },
  {
    tier: 4,
    noc: 22430,
    job: "Inspectors and testers, textile, fabric, fur and leather products and related materials",
  },
  {
    tier: 4,
    noc: 22431,
    job: "Inspectors and testers, rubber, plastic and related products and materials",
  },
  {
    tier: 4,
    noc: 22432,
    job: "Inspectors and testers, wood products and materials",
  },
  {
    tier: 4,
    noc: 22433,
    job: "Inspectors and testers, paper products and materials",
  },
  {
    tier: 4,
    noc: 22440,
    job: "Assemblers, fabricators and inspectors, heavy industrial equipment",
  },
  {
    tier: 4,
    noc: 22441,
    job: "Assemblers, fabricators and inspectors, construction and earth moving equipment",
  },
  {
    tier: 4,
    noc: 22442,
    job: "Assemblers, fabricators and inspectors, material handling equipment",
  },
  {
    tier: 4,
    noc: 22443,
    job: "Inspectors and testers, heavy industrial equipment",
  },
  {
    tier: 4,
    noc: 22444,
    job: "Inspectors and testers, construction and earth moving equipment",
  },
  {
    tier: 4,
    noc: 22445,
    job: "Inspectors and testers, material handling equipment",
  },
];
