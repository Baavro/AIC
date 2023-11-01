import React from 'react';

type Props = {};

const RegisterFooter = (props: Props) => {
  return (
    <div className="bg-white min-h-[250px] h-full flex justify-center items-center lg:py-4 max-lg:py-2 max-sm:py-0">
      <div className="text-black flex flex-col justify-center items-center space-y-4 max-lg:space-y-6 leading-5 lg:w-[calc(100%_-_180px)] max-lg:w-full text-center">
        <span className="lg:text-5xl text-[#263238] max-lg:text-3xl max-sm:text-2xl font-bold lg:w-[calc(100%_-_540px)] max-lg:w-full">
          Register for AI Council
        </span>
        <span className="text-[#292524] text-center lg:text-xl max-lg:text-lg max-sm:text-[15px] lg:w-[calc(100%_-_640px)] max-lg:w-[90%] pb-4">
          Join the AI Council for sponsorships and partnering with leading
          companies under the guidance of IITian
        </span>
        <button
          title="join"
          type="submit"
          className="rounded-lg p-2 bg-blue-500 hover:bg-blue-700 text-white px-4"
        >
          Register now
        </button>
      </div>
    </div>
  );
};

export default RegisterFooter;
