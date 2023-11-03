import React from 'react';

const steps = [
  {
    id: 1,
    month: 'December, 2023',
    name: 'Introduction and workshop',
    description:
      'Events & workshops around technical aspects of Gen AI',
  },
  {
    id: 2,
    month: 'January, 2024',
    name: 'Mentorship',
    description:
      'Each School Club to be assigned a mentor IIT',
  },
  {
    id: 3,
    month: 'January,2024',
    name: 'Dive into the field',
    description:
      'Increasing awareness around other aspects of Gen AI in the field of design, music, video and more',
  },
  {
    id: 4,
    month: 'March, 2024',
    name: 'Pan India Gen AI Hackathon',
    description:
      'Pan India Gen AI Hackathon with participation from all AI Clubs with approx 5k participating students',
  },
  {
    id: 5,
    month: 'March, 2024',
    name: 'Flagship AI dest',
    description:
      'AI fest events & activities in all IITs/NITs to be made available to students of AI Clubs',
  },
  // {
  //   id: 6,
  //   month: 'month 6',
  //   name: 'Introduction and workshop',
  //   description:
  //     'By joining the Artificial Intelligence Council, institutes can benefit from a range of valuable resources and opportunities that includes sponsorships for fests and events.',
  // },
];

const Timeline = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.id} className="lg:mb-8 max-lg:mb-6 max-sm:mb-4">
            <div className="flex items-center mb-2">
              <div
                className={`w-10 h-10 text-white rounded-full flex items-center justify-center text-xl z-10 ${
                  index + 1 < 2 ? 'bg-blue-500' : 'bg-[#D4D4D4]'
                }`}
              >
                {index + 1}
              </div>
              <div className="ml-4 font-semibold text-blue-500 lg:text-lg max-lg:text-sm">
                {step.month}
              </div>
            </div>
            <div className="ml-14 bg-white lg:p-2 rounded-lg px-4 max-sm:py-4 -mt-3 text-left space-y-2 flex flex-col">
              <span className="text-xl max-sm:text-sm max-lg:text-lg font-semibold text-gray-900">
                {step.name}
              </span>
              <span className="text-gray-700 max-sm:text-sm max-lg:text-sm lg:text-lg">
                {step.description}
              </span>
            </div>
            {index === 2 ? (
              <div className="absolute w-1 h-full top-0.5 left-5 bg-blue-500"></div>
            ) : (
              <div className="absolute w-1 h-full top-0.5 left-5 bg-[#D4D4D4]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
