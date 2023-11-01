type StepCardProps = {
    step: {
      id: number;
      title: string;
      description: string;
    };
  };
  
  const StepCard: React.FC<StepCardProps> = ({ step }) => {
    return (
      <div className="bg-white flex flex-col justify-start items-center lg:m-6 max-sm:m-4 text-center space-y-2 py-4 rounded-lg max-lg:min-w-[333px]">
        <span className="w-8 h-8 font-semibold lg:text-2xl max-lg:text-lg max-sm:text-[14px] text-center rounded-full bg-blue-500 text-white">
          {step.id}
        </span>
        <span className="text-black/70 w-[80%] leading-5 lg:text-[15px] max-lg:text-sm max-sm:text-[12px]">
          {step.description}
        </span>
      </div>
    );
  };
  
  export default StepCard;
  