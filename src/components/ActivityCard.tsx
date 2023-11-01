import React from 'react';

type ActivityCardProps = {
  activity: {
    id: number;
    title: string;
    icon: string;
    description: string;
  };
};

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-transparent flex flex-col justify-start items-center m-6 text-center space-y-2 p-2">
      <img
        src={'https://placehold.co/150x150/png'}
        alt="activity"
        className="h-[150px] w-[150px] max-sm:h-[100px] max-sm:w-[100px] rounded-full"
      />
      <span className="text-black w-[80%] font-semibold lg:text-2xl max-lg:text-lg max-sm:text-[14px]">
        {activity.title}
      </span>
      <span className="text-black/70 w-[87%] leading-5 lg:text-[15px] max-lg:text-sm max-sm:text-[12px]">
        {activity.description}
      </span>
    </div>
  );
};

export default ActivityCard;
