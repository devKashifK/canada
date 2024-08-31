import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/layout.tsx";
import About from "./pages/about/about.tsx";
import OurService from "./pages/about/our-service.tsx";
import CertificateMembership from "./pages/about/certificate-membership.tsx";
import WhyChooseUs from "./pages/about/why-choose-us.tsx";
import CustomerTestimonials from "./pages/about/customer-testimonials.tsx";
import BookAppointment from "./pages/about/book-appointment.tsx";
import FedralSkilledWorker from "./pages/immigration/express-entry/federal-skilled-worker.tsx";
import FedralSkilledTrade from "./pages/immigration/express-entry/federal-skilled-trade.tsx";
import CanadianExperienceClass from "./pages/immigration/express-entry/canadian-express-class.tsx";
import ImmigrationChallenges from "./pages/immigration/immigration-challenges/page.tsx";
import Alberta from "./pages/immigration/provincial-nominee-programs/alberta-immigration-aaip.tsx";
import Atlantic from "./pages/immigration/provincial-nominee-programs/atlantic-immigration-aipp.tsx";
import BritishColumbia from "./pages/immigration/provincial-nominee-programs/british-columbia-bcpnp.tsx";
import Ontario from "./pages/immigration/provincial-nominee-programs/ontario-oinp.tsx";
import Manitoba from "./pages/immigration/provincial-nominee-programs/manitoba-mpnp.tsx";
import NewBrunswick from "./pages/immigration/provincial-nominee-programs/new-brunswick-nbpnp.tsx";
import Saskatchewan from "./pages/immigration/provincial-nominee-programs/sasketchewan-sinp.tsx";
import NewFoundlandLabrador from "./pages/immigration/provincial-nominee-programs/newfoundland-and-labrador.tsx";
import NorthwestTerritories from "./pages/immigration/provincial-nominee-programs/northwest-territories.tsx";
import NovaScotia from "./pages/immigration/provincial-nominee-programs/nova-scotia-nsnp.tsx";
import PrinceEdwardIsland from "./pages/immigration/provincial-nominee-programs/prince-edward-island-peipnp.tsx";
import RuralNorthern from "./pages/immigration/provincial-nominee-programs/rural-and-northern-immigration-pilot-rnip.tsx";
import Yukon from "./pages/immigration/provincial-nominee-programs/yukon-ynp.tsx";
import { LanguageProvider } from "./context/LanguageProvider.tsx";
import PostGraduateWorkPermit from "./pages/study/post-graduate-work-permit.tsx";
import StudyInCanada from "./pages/study/study-in-canada.tsx";
import PathwayFromStudyToPr from "./pages/study/pathway-from-study-to-pr.tsx";
import DesignatedLearningInstitution from "./pages/study/designated-learning-institution.tsx";
import StudentDirectStream from "./pages/study/student-direct-stream.tsx";
import WorkPermit from "./pages/work-and-jobs/work-permit.tsx";
import InternationalMobilityProgram from "./pages/work-and-jobs/international-mobility-program.tsx";
import InDemandJobs from "./pages/work-and-jobs/in-demand-jobs.tsx";
import SupportForEmployers from "./pages/work-and-jobs/support-for-employers.tsx";
import Lmia from "./pages/work-and-jobs/lmia.tsx";
import CaregiverProgram from "./pages/work-and-jobs/caregiver-program.tsx";
import TeerCategoriesAndNoc from "./pages/work-and-jobs/teer-categories-and-noc.tsx";
import FamilySponsorship from "./pages/family-sponsorship/page.tsx";
import Visitor from "./pages/visitor/page.tsx";
import SelfEmployed from "./pages/business/quebec/quebec-self-employed.tsx";
import StartUpVisa from "./pages/business/federal-programs/start-up-visa.tsx";
import IntraCompanyTransfer from "./pages/business/federal-programs/intra-company-transfer.tsx";
import BenefitToCanada from "./pages/business/federal-programs/benefit-to-canada.tsx";
import OwnerOperator from "./pages/business/federal-programs/owner-operator.tsx";
import SelfEmployedPersons from "./pages/business/federal-programs/self-employed-persons.tsx";
import QuebecEntrepreneur from "./pages/business/quebec/quebec-entrepreneur.tsx";
import QuebecInvestor from "./pages/business/quebec/quebec-investor.tsx";
import WorkAndJobs from "./pages/work-and-jobs/page.tsx";
import OurSuccessCustomers from "./pages/about/our-success-customers.tsx";
import Price from "./pages/price/price.tsx";
import News from "./pages/news/news.tsx";
import Post from "./pages/news/post.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./pages/contact/contact.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "our-service",
        element: <OurService />,
      },
      {
        path: "certificate-membership",
        element: <CertificateMembership />,
      },
      {
        path: "our-success-customers",
        element: <OurSuccessCustomers />,
      },
      {
        path: "customer-testimonials",
        element: <CustomerTestimonials />,
      },
      {
        path: "book-appointment",
        element: <BookAppointment />,
      },
      {
        path: "why-choose-us",
        element: <WhyChooseUs />,
      },
    ],
  },
  {
    path: "immigration",
    element: <Layout />,
    children: [
      {
        path: "express-entry",
        children: [
          {
            path: "federal-skilled-worker",
            element: <FedralSkilledWorker />,
          },
          {
            path: "federal-skilled-trade",
            element: <FedralSkilledTrade />,
          },
          {
            path: "canadian-experience-class",
            element: <CanadianExperienceClass />,
          },
        ],
      },
      {
        path: "provincial-nominee-programs",
        children: [
          {
            path: "alberta-immigration-aaip",
            element: <Alberta />,
          },
          {
            path: "atlantic-immigration-aipp",
            element: <Atlantic />,
          },
          {
            path: "british-columbia-bcpnp",
            element: <BritishColumbia />,
          },
          {
            path: "ontario-oinp",
            element: <Ontario />,
          },
          {
            path: "manitoba-mpnp",
            element: <Manitoba />,
          },
          {
            path: "new-brunswick-nbpnp",
            element: <NewBrunswick />,
          },
          {
            path: "newfoundland-and-labrador",
            element: <NewFoundlandLabrador />,
          },
          {
            path: "saskatchewan-sinp",
            element: <Saskatchewan />,
          },
          {
            path: "northwest-territories",
            element: <NorthwestTerritories />,
          },
          {
            path: "nova-scotia-nsnp",
            element: <NovaScotia />,
          },
          {
            path: "prince-edward-island-peipnp",
            element: <PrinceEdwardIsland />,
          },
          {
            path: "rural-and-northern-immigration-pilot-rnip",
            element: <RuralNorthern />,
          },

          {
            path: "yukon-ynp",
            element: <Yukon />,
          },
        ],
      },
      {
        path: "immigration-challenges",
        element: <ImmigrationChallenges />,
      },
    ],
  },
  {
    path: "business",
    element: <Layout />,
    children: [
      {
        path: "quebec",
        children: [
          {
            path: "quebec-investor",
            element: <QuebecInvestor />,
          },
          {
            path: "quebec-entrepreneur",
            element: <QuebecEntrepreneur />,
          },
          {
            path: "quebec-self-employed",
            element: <SelfEmployed />,
          },
        ],
      },
      {
        path: "federal-programs",
        children: [
          {
            path: "start-up-visa",
            element: <StartUpVisa />,
          },
          {
            path: "intra-company-transfer",
            element: <IntraCompanyTransfer />,
          },
          {
            path: "benefit-to-canada",
            element: <BenefitToCanada />,
          },
          {
            path: "owner-operator",
            element: <OwnerOperator />,
          },
          {
            path: "self-employed-person",
            element: <SelfEmployedPersons />,
          },
        ],
      },
    ],
  },
  {
    path: "work-and-jobs",
    element: <Layout />,
    children: [
      {
        path: "work-permit",
        // element: <WorkPermit />,
        element: <WorkAndJobs />,
      },
      {
        path: "international-mobility-program",
        element: <InternationalMobilityProgram />,
      },
      {
        path: "in-demand-jobs",
        element: <InDemandJobs />,
      },
      {
        path: "support-for-employers",
        element: <SupportForEmployers />,
      },
      {
        path: "lmia",
        element: <Lmia />,
      },
      {
        path: "caregiver-program",
        element: <CaregiverProgram />,
      },
      {
        path: "teer-categories-and-noc",
        element: <TeerCategoriesAndNoc />,
      },
    ],
  },
  {
    path: "study",
    element: <Layout />,
    children: [
      {
        path: "post-graduate-work-permit",
        element: <PostGraduateWorkPermit />,
      },
      {
        path: "study-in-canada",
        element: <StudyInCanada />,
      },
      {
        path: "pathway-from-study-to-pr",
        element: <PathwayFromStudyToPr />,
      },
      {
        path: "designated-learning-institution",
        element: <DesignatedLearningInstitution />,
      },
      {
        path: "student-direct-stream",
        element: <StudentDirectStream />,
      },
    ],
  },
  {
    path: "family-sponsorship",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FamilySponsorship />,
      },
    ],
  },
  {
    path: "visitor",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Visitor />,
      },
    ],
  },
  {
    path: "price",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Price />,
      },
    ],
  },
  {
    path: "contact",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
    ],
  },
  {
    path: "news",
    element: <Layout />,
    children: [
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:postId",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// Book Appointment
// why choose us fix
// contact
// start reviewing from immigration
