type Props = {};
const ImgSrc = [
  '/omdena.png',
  '/adobe.png',
  '/amazon.jpg',
  '/google.png',
  '/microsoft.png',
];



const WhatIs = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center lg:pt-16 max-lg:pt-8 max-sm:pt-6">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:textl-xl font-bold lg:pb-8 max-lg:pb-6 max-sm:pb-4">
          What is AI Council?
        </span>
        <span className="text-[#292524] lg:w-[75%] max-lg:w-[90%] max-sm:w-full px-4 lg:text-xl max-lg:text-lg max-sm:text-sm leading-8">
          Copy The All India Artificial Intelligence Council is a collaborative
          agglomerate of Artificial intelligence organisations of colleges, with
          select IITs at the helm. We foster a culture of innovation and
          exploration in the field of AI, driving research and development
          initiatives across the country.
        </span>
      </div>
      <div className="flex flex-col justify-start lg:py-4 max-lg:py-2 max-sm:py-1 items-center text-center">
        <span className="lg:text-3xl max-lg:text-xl max-sm:textl-lg font-bold lg:py-8 max-lg:py-6 max-sm:py-4">
          Companies we have partnered with
        </span>

        <div className="flex flex-wrap justify-evenly items-center p-4 lg:w-[60%] max-lg:w-[80%] max-sm:w-full">
          {ImgSrc.map((imgSrc) => {
            return (
              <img
                src={imgSrc}
                alt="company"
                key={imgSrc}
                className="h-[90px] w-[90px] max-sm:h-[80px] max-sm:w-[80px] flex-[0] order-[0] flex-grow-0 lg:m-6 max-lg:m-4 max-sm:m-2 rounded-full hover:border-2 hover:border-black hover:shadow-sm hover:shadow-black"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
