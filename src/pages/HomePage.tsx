import Activities from '../components/Activities';
import JoinOurCommunityCard from '../components/JoinOurCommunityCard';
import Objective from '../components/Objective';
import WhatIs from '../components/WhatIs';
import Members from '../components/Members';
import Testimonials from '../components/Testimonials';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex h-full flex-col overflow-hidden mt-16">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-60px)] flex flex-col justify-start">
        <div
          className="h-[calc(100vh-180px)] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: 'url(aic.jpeg)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-[#4E7BEF] opacity-90">
            <div className="text-white flex flex-col justify-center items-center space-y-4 max-lg:space-y-6 leading-5 lg:w-[calc(100%_-_180px)] max-lg:w-full text-center">
              <span className="lg:text-7xl max-lg:text-4xl font-bold lg:w-[calc(100%_-_540px)] max-lg:w-full">
                Welcome to AI Council of India
              </span>
              <span className="text-center lg:text-3xl max-lg:text-2xl max-sm:text-xl lg:w-[calc(100%_-_280px)] max-lg:w-full pb-4">
                We are your leading authority in artificial intelligence
                innovations, fostering a vibrant AI ecosystem in India.
              </span>
              <button
                title="join"
                type="submit"
                className="rounded-lg p-2 bg-[#EBE9E6] hover:bg-white text-black px-4"
              >
                Join AI council
              </button>
            </div>
          </div>
        </div>
        <JoinOurCommunityCard />
      </div>
      {/* What and Companies */}
      <WhatIs />
      {/* Our Objective */}
      <div className="min-h-screen flex flex-col justify-start items-center">
        <Objective />
        <Activities />
      </div>
      {/* Council Members */}
      <Members />
      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default HomePage;
