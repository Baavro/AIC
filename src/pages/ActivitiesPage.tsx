import React from 'react';
import Objective from '../components/Objective';
import TimeLine from '../components/TimeLine';
import RoadMap from '../components/RoadMap';

type Props = {};

const ActivitiesPage = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-start mt-16">
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Activities
        </span>
        <span className="text-[#292524] lg:w-[75%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8">
          The council aims to organize & host various AI conferences and
          workshop to promote, collaboration and provide a platform for sharing
          the latest industry updates and research findings.
        </span>
      </div>
      {/* Objectives */}
      <div className="flex flex-col justify-start items-center">
        <Objective />
      </div>
      {/* RoadMap */}
      <div className="flex flex-col justify-center lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6 lg:min-h-[400px] max-lg:hidden">
        <div className='lg:w-[80%] max-lg:w-full py-4 flex justify-center items-center'>
            <RoadMap />
        </div>
      </div>
      {/* TimeLine */}
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Timeline
        </span>
        <div className='min-h-screen lg:w-[80%] max-lg:w-full py-4'>
            <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
