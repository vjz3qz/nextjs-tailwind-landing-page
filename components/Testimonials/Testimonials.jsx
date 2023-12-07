import React from "react";

function Testimonials() {
  return (
    <section className="relative scroll-mt-24" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-4 pt-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 text-2xl font-allianceLight">
              Backed by
            </h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              
            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <img
                src="/images/unusual-ventures-logo-vector.svg"
                alt="Unusual Ventures"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
