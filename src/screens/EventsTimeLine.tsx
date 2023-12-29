import React from 'react';

const steps = [
  {
    id: 1,
    month: '28th December, 2023',
    name: 'Registration open'
  },
  {
    id: 2,
    month: '04th January, 2023',
    name: 'Registration closes'
  },
  {
    id: 3,
    month: '06th-07th January, 2023',
    name: 'Pre-Event Contest'
  },
  {
    id: 4,
    month: '13th-14th January, 2023',
    name: '48 hour AI hackathon'
  },
  {
    id: 5,
    month: '20th January, 2023',
    name: 'Winner announcement'
  },
];

const EventsTimeLine = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.id} className="lg:mb-8 max-lg:mb-6 max-sm:mb-4">
            <div className="flex items-center mb-2">
              <div
                className={`w-10 h-10 text-white rounded-full flex items-center justify-center text-xl z-10 bg-blue-500`}
              >
                {index + 1}
              </div>
              <div className="ml-4 font-bold text-blue-500 lg:text-sm max-lg:text-sm">
                {step.month}
              </div>
            </div>
            <div className="ml-12 lg:p-2 rounded-lg px-4 max-sm:py-4 -mt-6 text-left space-y-2 flex flex-col">
              <span className="text-3xl max-sm:text-sm max-lg:text-lg font-bold text-gray-900">
                {step.name}
              </span>
            </div>
            <div className="absolute w-1  h-[90%] top-0.5 left-[18px] bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTimeLine;
