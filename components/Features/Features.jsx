import React from "react";

const features = [
  {
    id: 1,
    title: "Support for the Biggest Insurance Providers",
    description:
      "Whether it be Aetna or UHC, Trace AI automates the process of requirement discovery by finding plan specific details on-demand. ",
    iconPath: "/svgs/layers.svg",
  },
  {
    id: 2,
    title: "AI-Driven Insights for PA Submissions",
    description:
      "Make sure your prior authorization requests are approved the first time by levaraging Trace AI's intelligent recommendations to ensure your submission checks all the boxes.",
    iconPath: "/svgs/map.svg",
  },
  {
    id: 3,
    title: "Support for Medical and Pharmacy PAs",
    description:
      "Regardless of the procedure or perscription, Trace AI can find and check prior authorization requirements in seconds.",
    iconPath: "/svgs/package.svg",
  },
];

// FeatureSection Component in React
const FeatureSection = () => (
  <div id="features" className="pb-36 pt-24 bg-white">
    <div className="max-w-8xl mx-auto px-2 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 font-allianceRegular mb-4">Explore our features</h1>
        <p className="font-allianceRegular text-xl text-gray-600">
          Revolutionize your company&apos;s data using Trace AI&apos;s software
          platform.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
  <div className="group flex flex-col border-dotted border-2 border-gray-300 p-10 text-left transition duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 ">
    <div className="flex-shrink-0 my-6">
      <div className="h-28 w-28 rounded-full flex items-center justify-center overflow-hidden bg-white transition duration-300 group-hover:bg-gray-900">
        {/* Apply the invert filter on group hover */}
        <img
          src={feature.iconPath}
          alt={`${feature.title} icon`}
          className="h-20 w-20 transition duration-300 group-hover:invert"
        />
      </div>
    </div>
    {/* Apply text color change on group hover */}
    <h3 className="text-xl xl:text-2xl font-allianceRegular text-gray-900 mb-6 transition duration-300 group-hover:text-white">
      <span className="text-gray-600 transition duration-300 group-hover:text-white">
        0{feature.id} -{" "}
      </span>
      {feature.title}
    </h3>
    <div className="border-t border-gray-300 w-full my-6 transition duration-300 group-hover:border-white"></div>{" "}
    {/* Dotted line */}
    {/* Apply text color change on group hover */}
    <p className="text-md xl:text-lg font-allianceLight text-gray-600 my-6 transition duration-300 group-hover:text-white">
      {feature.description}
    </p>
  </div>
);

export default FeatureSection;
