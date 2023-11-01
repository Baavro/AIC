const JoinOurCommunityCard = () => {
  return (
    <div>
      <section className="bg-[#EBE9E6] my-2 flex flex-col items-center justify-start font-sora">
        <div className="font-extrabold text-center text-2xl max-sm:text-xl py-2">
          Join 18K+ community from
        </div>
        <div className="border bg-black/10">
          <div className="flex flex-col items-center justify-center text-center text-[29.72px] text-dimgray font-frank-ruhl-libre scroll-anim">
            <div className="flex">
              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-bombay-logo-1@2x.png"
                text="IIT Bombay"
              />
              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-kharagpur-logo-1@2x.png"
                text="IIT Kharagpur"
              />
              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-delhi-logo-1@2x.png"
                text="IIT Delhi"
              />
              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-roorkee-logo-1@2x.png"
                text="IIT Roorkee"
              />

              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-varanasi-logo-1@2x.png"
                text="IIT Varanasi"
              />

              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-guwahati-logo-1@2x.png"
                text="IIT Guwahati"
              />

              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-indore-logo-1@2x.png"
                text="IIT Indore"
              />

              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-mandi-logo-1@2x.png"
                text="IIT Mandi"
              />

              <ScrollingLogo
                imgSrc="/indian-institute-of-technology-hyderabad-logo-1@2x.png"
                text="IIT Hyderabad"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ScrollingLogo = ({ imgSrc, text }: any) => {
  return (
    <div className="flex justify-center items-center w-max mx-4 space-x-2 text-black/50">
      <img
        className="relative w-[28.04px] h-[27px] object-cover"
        alt=""
        src={imgSrc}
      />
      <div className="relative font-medium w-min">
        {text}
      </div>
    </div>
  );
};

export default JoinOurCommunityCard;
