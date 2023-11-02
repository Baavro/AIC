import React from 'react';
import Members from '../components/Members';

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-start mt-16">
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          About us
        </span>
        <span className="text-[#292524] lg:w-[75%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8">
          The All India Artificial Intelligence Council is a collaborative
          agglomerate of Artificial intelligence organisations of colleges, with
          select IITs at the helm. We foster a culture of innovation and
          exploration in the field of AI, driving research and development
          initiatives across the country.
        </span>
      </div>
      {/* Members */}
      <Members />
    </div>
  );
};

export default AboutUsPage;
