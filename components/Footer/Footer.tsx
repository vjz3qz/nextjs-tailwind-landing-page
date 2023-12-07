import React from "react";
import Link from 'next/link';
// import HandleSubmit from "../Newsletter/HandleSubmit";


function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto md:pt-4 px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="font-allianceLight text-sm text-gray-600 mr-4">
          &copy; Made by Trace AI.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


