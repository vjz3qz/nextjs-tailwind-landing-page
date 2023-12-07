// import React, { useState, useRef, useEffect } from "react";
// import Transition from "../../utils/Transition";

// // import FeaturesBgOne from "/images/one.png";
// // import FeaturesBgTwo from "/images/two.png";
// // import FeaturesBgThree from "/images/three.png";

// function Features() {
//   const [tab, setTab] = useState(1);
//   const tabs = useRef(null);

//   const heightFix = () => {
//     if (tabs.current.children[tab]) {
//       tabs.current.style.height =
//         tabs.current.children[tab - 1].offsetHeight + "px";
//     }
//   };

//   useEffect(() => {
//     heightFix();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tab]);

//   return (
//     <section className="relative scroll-mt-20" id="features">
//       {/* Section background (needs .relative class on parent and next sibling elements) */}
//       {/* <img src="/images/palantir4.png" alt="" /> */}
//       <div
//         className="absolute inset-0 pointer-events-none mb-32"
//         aria-hidden="true"
//       ></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-custom+ md:h-custom">

//         <div className="pt-12 md:pt-16">
        

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <h1 className="h2 font-allianceMedium mb-4">Explore our features</h1>
//             <p className="font-allianceMedium text-xl text-gray-600">
//               Revolutionize your company&apos;s data using Trace AI&apos;s software platform.
//             </p>
//           </div>

//           {/* Section content */}
//           <div className="md:grid md:grid-cols-12 md:gap-6">
//             {/* Content */}
//             <div
//               className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
//               data-aos="fade-right"
//             >
//               {/* Tabs buttons */}
//               <div className="mb-8 md:mb-0">
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 1
//                       ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
//                       : "bg-gray-200 border-transparent"
//                   }`}
//                   href="#0"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setTab(1);
//                   }}
//                 >
//                   <div>
//                     <div className="font-allianceRegular leading-snug tracking-tight mb-1">
//                     Intelligent Diagram Data Extraction
//                     </div>
//                     <div className="font-allianceLight text-gray-600">
//                     Transform extensive diagrams into actionable insights with our intelligent data extraction. Grasp component details and flow dynamics for decision-making and maintenance planning.
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 2
//                       ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
//                       : "bg-gray-200 border-transparent"
//                   }`}
//                   href="#0"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setTab(2);
//                   }}
//                 >
//                   <div>
//                     <div className="font-allianceRegular leading-snug tracking-tight mb-1">
//                     AI-Driven Document and Diagram Integration
//                     </div>
//                     <div className="font-allianceLight text-gray-600">
//                     Integrate document management with a conversational AI in our unified platform. Access, organize, and query essential data effortlessly, boosting decision-making and operational efficiency.
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 3
//                       ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
//                       : "bg-gray-200 border-transparent"
//                   }`}
//                   href="#0"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setTab(3);
//                   }}
//                 >
//                   <div>
//                     <div className="font-allianceRegular leading-snug tracking-tight mb-1">
//                     Tribal Knowledge & Incident Data Capture
//                     </div>
//                     <div className="font-allianceLight text-gray-600">
//                     Efficiently capture and structure tribal knowledge, along with incident and maintenance data. Our system ensures this crucial knowledge is analyzed effectively and preserved for your team.
//                     </div>
//                   </div>
//                 </a>
                
//               </div>
//             </div>

//             {/* Tabs items */}
//             <div
//               className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
//               data-aos="zoom-y-out"
//               ref={tabs}
//             >
//               <div
//                 className="relative flex flex-col text-center lg:text-right mt-10"
//                 style={{ marginTop: "12%", marginBottom: "30%" }}
//                 data-aos="zoom-y-out"
//                 ref={tabs}
//               >
//                 {/* Item 1 */}
//                 <Transition
//                   show={tab === 1}
//                   appear={true}
//                   className="w-full"
//                   enter="transition ease-in-out duration-700 transform order-first"
//                   enterStart="opacity-0 translate-y-16"
//                   enterEnd="opacity-100 translate-y-0"
//                   leave="transition ease-in-out duration-300 transform absolute"
//                   leaveStart="opacity-100 translate-y-0"
//                   leaveEnd="opacity-0 -translate-y-16"
//                 >
//                   <div className="relative inline-flex flex-col">
//                     <img
//                       className="md:max-w-none mx-auto rounded w-full+ mt-10 border border-gray-500"
//                       src="/images/two.png"
//                       width="700"
//                       height="700"
//                       alt="Features bg"
//                     />
//                   </div>
//                 </Transition>
//                 {/* Item 2 */}
//                 <Transition
//                   show={tab === 2}
//                   appear={true}
//                   className="w-full"
//                   enter="transition ease-in-out duration-700 transform order-first"
//                   enterStart="opacity-0 translate-y-16"
//                   enterEnd="opacity-100 translate-y-0"
//                   leave="transition ease-in-out duration-300 transform absolute"
//                   leaveStart="opacity-100 translate-y-0"
//                   leaveEnd="opacity-0 -translate-y-16"
//                 >
//                   <div className="relative inline-flex flex-col">
//                     <img
//                       className="md:max-w-none mx-auto rounded w-full+ mt-10 border border-gray-500"
//                       src="/images/one.png"
//                       width="700"
//                       height="700"
//                       alt="Features bg"
//                     />
//                   </div>
//                 </Transition>
//                 {/* Item 3 */}
//                 <Transition
//                   show={tab === 3}
//                   appear={true}
//                   className="w-full"
//                   enter="transition ease-in-out duration-700 transform order-first"
//                   enterStart="opacity-0 translate-y-16"
//                   enterEnd="opacity-100 translate-y-0"
//                   leave="transition ease-in-out duration-300 transform absolute"
//                   leaveStart="opacity-100 translate-y-0"
//                   leaveEnd="opacity-0 -translate-y-16"
//                 >
//                   <div className="relative inline-flex flex-col">
//                     <img
//                       className="md:max-w-none mx-auto rounded w-full+ mt-10 border border-gray-500"
//                       src="/images/three.png"
//                       width="700"
//                       height="700"
//                       alt="Features bg"
//                     />
//                   </div>
//                 </Transition>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;








import React from 'react';

// You would import your icons/images here
// import LeastPrivilegeIcon from './path-to-your-icon/LeastPrivilegeIcon.png';
// import DefenseInDepthIcon from './path-to-your-icon/DefenseInDepthIcon.png';
// import HighestStandardsIcon from './path-to-your-icon/HighestStandardsIcon.png';

const features = [
  {
    id: 1,
    title: 'Least Privilege',
    description: 'From the high-level architecture to granular access controls at the row and column level, Bronco only allows data access when there is a legitimate need.',
    // icon: LeastPrivilegeIcon,
  },
  {
    id: 2,
    title: 'Defense in Depth',
    description: 'Bronco layers security controls and policies so there is no single point of failure across our system. Bronco monitors continuously for system integrity.',
    // icon: DefenseInDepthIcon,
  },
  {
    id: 3,
    title: 'Held to the Highest Standards',
    description: 'Data will be handled according to SOC II, NIST 800-171, CMMC 2.0 L2, ITAR, and any other requirements. Bronco deploys into secure clouds and on-premise systems.',
    // icon: HighestStandardsIcon,
  },
];

// FeatureSection Component in React
const FeatureSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Iterate over your features here */}
        {features.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  </div>
);

// FeatureItem Component
const FeatureItem = ({ feature }) => (
  <div className="border-dotted border-2 border-gray-300 p-8 rounded-lg text-center flex flex-col items-center space-y-4">
    {/* Placeholder for icon */}
    <div className="flex-shrink-0">
      <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
        {/* Replace with your icon */}
        <span className="text-xl font-medium leading-none text-gray-600">{feature.icon}</span>
      </div>
    </div>
    <div className="border-t border-dotted border-gray-300 w-full my-4"></div> {/* Dotted line */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
    </div>
  </div>
);


export default FeatureSection;

