import React from 'react';

type TestimonialCardProps = {
  testimonial: {
    id: number;
    profile_photo: string;
    name: string;
    position: string;
    description: string;
  };
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white flex flex-col justify-start items-center lg:m-6 max-sm:m-4 text-center space-y-2 py-4 rounded-lg max-lg:min-w-[333px]">
      <div className="flex flex-row w-[90%] justify-start items-center">
        <img
          src={testimonial.profile_photo}
          alt={testimonial.name}
          className="h-[80px] w-[80px] max-sm:h-[50px] max-sm:w-[50px] rounded-full"
        />
        <div className='flex flex-col justify-start items-start pl-4 w-full text-left'>
          <span className="text-black w-[80%] font-semibold lg:text-lg max-lg:text-lg max-sm:text-[12px]">
            {testimonial.name}
          </span>
          <span className="text-black/70 w-[83%] lg:text-[14px] max-lg:text-sm max-sm:text-[12px]">
            {testimonial.position}
          </span>
        </div>
      </div>
      <span className="text-black/70 w-[83%] leading-5 lg:text-[15px] max-lg:text-sm max-sm:text-[12px]">
        {testimonial.description}
      </span>
    </div>
  );
};

export default TestimonialCard;
