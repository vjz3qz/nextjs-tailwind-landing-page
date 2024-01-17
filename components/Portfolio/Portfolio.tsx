import React from "react";

const Portfolio = () => {
  return (
        <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <iframe 
                width="1100" 
                height="600" 
                src="https://www.youtube.com/embed/sFHJwK-Od_Q" 
                title="YouTube video player" 
                frameBorder="0" 
                style={{ borderRadius: '10px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          </div>
        </div>
  );
};

export default Portfolio;
