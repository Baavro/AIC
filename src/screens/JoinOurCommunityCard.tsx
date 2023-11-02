import ScrollingLogo from '../components/ScrollingLogo';

const logoData = [
  {
    imgSrc: '/indian-institute-of-technology-bombay-logo-1@2x.png',
    text: 'IIT Bombay',
  },
  {
    imgSrc: '/indian-institute-of-technology-kharagpur-logo-1@2x.png',
    text: 'IIT Kharagpur',
  },
  {
    imgSrc: '/indian-institute-of-technology-delhi-logo-1@2x.png',
    text: 'IIT Delhi',
  },
  {
    imgSrc: '/indian-institute-of-technology-roorkee-logo-1@2x.png',
    text: 'IIT Roorkee',
  },
  {
    imgSrc: '/indian-institute-of-technology-varanasi-logo-1@2x.png',
    text: 'IIT Varanasi',
  },
  {
    imgSrc: '/indian-institute-of-technology-guwahati-logo-1@2x.png',
    text: 'IIT Guwahati',
  },
  {
    imgSrc: '/indian-institute-of-technology-indore-logo-1@2x.png',
    text: 'IIT Indore',
  },
  {
    imgSrc: '/indian-institute-of-technology-mandi-logo-1@2x.png',
    text: 'IIT Mandi',
  },
  {
    imgSrc: '/indian-institute-of-technology-hyderabad-logo-1@2x.png',
    text: 'IIT Hyderabad',
  },
];

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
              {logoData.map((logo, index) => (
                <ScrollingLogo
                  key={index}
                  imgSrc={logo.imgSrc}
                  text={logo.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurCommunityCard;
