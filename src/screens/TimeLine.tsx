import React from 'react';

const steps = [
  {
    id: 1,
    month: 'November, 2023',
    name: 'Introduction and workshop',
    description:
      '1) Orientation workshop conducted by IITs at their own institute around the new AI Club. 2) Selecting team members and planning local activities for the year. 3) Approx 50-80 members are chosen to be a direct part of every AI Club',
  },
  {
    id: 2,
    month: 'December, 2024',
    name: 'Diving deeper',
    description:
      '1) Events & workshops around technical aspects of Gen AI. 2) Increasing awareness around other aspects of Gen AI in the field of design, music, video and more. 3) Opening up Gen AI Clubs in 15 NITs, 3 IIITs & 5 private colleges
',
  },
  {
    id: 3,
    month: 'January,2024',
    name: 'Moonshot with IITians',
    description:
      '1) Pan IIT Hackathon in 1st week of January with participation from 10-12 IITs and 1000 students. 2) Setting up more than 200-500 AI Clubs across high schools in India, these clubs will be mentored by the students from IITs. Each club to get a dedicated mentor AI Club from IIT',
  },
  {
    id: 4,
    month: 'March, 2024',
    name: 'Pan India Gen AI Hackathon',
    description:
      '1) Pan India Gen AI Hackathon with participation from all AI Clubs with approx 5k participating students. 2) AI fest locally in all IITs/NITs (coincides with their technical fest where more than 200k students participate in total)',
  },
  {
    id: 5,
    month: 'May-June, 2024',
    name: 'Builders Zone',
    description:
      '1) Workshop every week around latest AI technologies, AI tools. 2) Building Projects around AI, a 30 day builders zone where all students pick up from a set of problem statements, form a team and build something cool and share progress.',
  },
  {
    id: 6,
    month: 'August, 2024',
    name: 'Freshers!',
    description:
      'Engaging new 1st year students (upcoming freshers) with respective AI Clubs',
  },
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
