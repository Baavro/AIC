import EventObjective from '../screens/EventObjective';
import EventsTimeLine from '../screens/EventsTimeLine';

function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-start mt-16">
      {/* Hero Section */}
      <div
        className="min-h-[calc(100vh-46px)] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(hackathon.jpg)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-90">
          <div className="text-black flex flex-col justify-center items-center space-y-4 max-lg:space-y-6 leading-5 lg:w-[calc(100%_-_180px)] max-lg:w-full text-center">
            <span className="text-3xl max-sm:text-xl border-2 border-black font-bold text-[#4E7BEF] p-1 px-2 rounded-lg">
              15 Jan - 16 Jan, 2024
            </span>
            <span className="lg:text-7xl max-lg:text-4xl font-bold lg:w-[calc(100%_-_540px)] max-lg:w-full">
              Join India's Premier AI Hackathon
            </span>
            <span className="text-center lg:text-[28px] leading-10 max-lg:text-2xl max-sm:text-xl lg:w-[calc(100%_-_580px)] max-lg:w-full pb-4 font-semibold">
              Inviting Visionary IITians to Explore the Vast Realm of AI
              Innovations! Join Us in Unraveling the Spectrum of Cutting-Edge AI
              Technologies!
            </span>
            <button
              title="join"
              type="submit"
              className="rounded-lg p-2 bg-black hover:border hover:border-[#4E7BEF] hover:shadow-sm hover:shadow-[#4E7BEF] text-white px-6"
              onClick={() =>
                (window.location.href =
                  'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform')
              }
            >
              Register now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          About the Hackathon
        </span>
        <span className="text-[#292524] lg:w-[65%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8 font-semibold">
          Prepare for an exciting voyage into the realm of innovation and
          artificial intelligence! Our Hackathon is a vibrant platform crafted
          specifically for visionary IITians, cultivating a space where
          creativity converges with cutting-edge technology.
        </span>
        <EventObjective />
      </div>
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Why Participate?
        </span>
        <span className="text-[#292524] lg:w-[65%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8 font-semibold">
          Participating in this hackathon offers a unique chance to push the
          boundaries of your knowledge, enhance your skills, and contribute to
          the advancement of AI technology. Your innovative ideas have the power
          to make a tangible impact on the ever-evolving landscape of artificial
          intelligence.
        </span>
        <button
          title="join"
          type="submit"
          className="rounded-lg p-2 bg-black hover:border hover:border-[#4E7BEF] hover:shadow-sm hover:shadow-[#4E7BEF] text-white px-6 mt-8"
          onClick={() =>
            (window.location.href =
              'https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform')
          }
        >
          Register now
        </button>
      </div>
      {/* TimeLine */}
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Timeline
        </span>
        <div className="h-full lg:w-[80%] max-lg:w-full py-4">
          <EventsTimeLine />
        </div>
      </div>
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6 mb-16">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          Register for 48 hour Hackathon
        </span>
        <span className="text-[#292524] lg:w-[65%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8 font-semibold">
          Join us for an exciting 48-hour marathon of innovation, collaboration,
          and problem-solving at our AI Hackathon! This hackathon is an
          exceptional opportunity for participants to immerse themselves in a
          dynamic environment, pushing their boundaries and crafting innovative
          solutions.
        </span>
        <div className="w-full md:w-[90%] flex justify-center items-center my-8">
          <span style={{ width: '100%', maxWidth: '600px' }}>
            <iframe
              title="Google Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1DOTmT4jv72menxS4LWtawbK102SiFqVgLHC1Sp_IWABPeQ/viewform"
              width="100%"
              height="600"
              loading="lazy"
            >
              Loading...
            </iframe>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
