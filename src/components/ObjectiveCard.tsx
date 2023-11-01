type ObjectiveCardProps = {
  objective: {
    id: number;
    title: string;
    description: string;
  };
};

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ objective }) => {
  return (
    <div className="bg-white flex flex-col justify-start items-center lg:m-6 max-sm:m-4 text-center space-y-2 py-4 rounded-lg max-lg:min-w-[333px]">
      <span className="text-black w-[80%] font-semibold lg:text-2xl max-lg:text-lg max-sm:text-[14px]">
        {objective.title}
      </span>
      <span className="text-black/70 w-[83%] leading-5 lg:text-[15px] max-lg:text-sm max-sm:text-[12px]">
        {objective.description}
      </span>
    </div>
  );
};

export default ObjectiveCard;
