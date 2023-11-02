import React from 'react';
import { TbTriangleFilled } from 'react-icons/tb';

interface RoadMapCardProps {
  title: string;
  description: string;
}

const RoadMapMobileCard: React.FC<RoadMapCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1 justify-center items-center px-4">
      <div className="timeline__event__icon"></div>
      <TbTriangleFilled className="text-white border-solid text-3xl translate-x-0 -rotate-90" />
      <div className="timeline__event__content rounded-lg">
        <div className="timeline__event__title">{title}</div>
        <div className="timeline__event__description text-sm py-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMapMobileCard;
