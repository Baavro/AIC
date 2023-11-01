import 'simplebar/dist/simplebar.min.css';
import MemberCard from './MemberCard';

const memberData = [
  {
    ellipse1539: '/ellipse-1539@2x.png',
    sankalpPatidar: 'Sankalp Patidar',
    iITKharagpurPresident: 'IIT Kharagpur',
    linkedIn: 'https://www.linkedin.com/in/sankalp-patidar-08ba2920a/',
  },
  {
    ellipse1539: '/ellipse-1540@2x.png',
    sankalpPatidar: 'Viren Inaniyan',
    iITKharagpurPresident: 'IIT Bombay',
    linkedIn: 'https://www.linkedin.com/in/viren-inaniyan-959897187/',
    propWidth: '291px',
    propWidth1: '379px',
  },
  {
    ellipse1539: '/ellipse-1541@2x.png',
    sankalpPatidar: 'Sparsh Agrawal',
    iITKharagpurPresident: 'IIT (BHU) Varanasi',
    linkedIn: 'https://www.linkedin.com/in/sparsh-agrawal17/',
    propWidth: '291px',
    propWidth1: 'unset',
  },
];

const submemberData = [
  {
    ellipse1539: '/ellipse-1539@2x.png',
    sankalpPatidar: 'Sankalp Patidar',
    iITKharagpurPresident: 'IIT Kharagpur',
    linkedIn: 'https://www.linkedin.com/in/sankalp-patidar-08ba2920a/',
  },
  {
    ellipse1539: '/ellipse-1540@2x.png',
    sankalpPatidar: 'Viren Inaniyan',
    iITKharagpurPresident: 'IIT Bombay',
    linkedIn: 'https://www.linkedin.com/in/viren-inaniyan-959897187/',
    propWidth: '291px',
    propWidth1: '379px',
  },
  {
    ellipse1539: '/ellipse-1541@2x.png',
    sankalpPatidar: 'Sparsh Agrawal',
    iITKharagpurPresident: 'IIT (BHU) Varanasi',
    linkedIn: 'https://www.linkedin.com/in/sparsh-agrawal17/',
    propWidth: '291px',
    propWidth1: 'unset',
  },
  {
    ellipse1539: '/ellipse-1539@2x.png',
    sankalpPatidar: 'Sankalp Patidar',
    iITKharagpurPresident: 'IIT Kharagpur',
    linkedIn: 'https://www.linkedin.com/in/sankalp-patidar-08ba2920a/',
  },
  {
    ellipse1539: '/ellipse-1540@2x.png',
    sankalpPatidar: 'Viren Inaniyan',
    iITKharagpurPresident: 'IIT Bombay',
    linkedIn: 'https://www.linkedin.com/in/viren-inaniyan-959897187/',
    propWidth: '291px',
    propWidth1: '379px',
  },
  {
    ellipse1539: '/ellipse-1541@2x.png',
    sankalpPatidar: 'Sparsh Agrawal',
    iITKharagpurPresident: 'IIT (BHU) Varanasi',
    linkedIn: 'https://www.linkedin.com/in/sparsh-agrawal17/',
    propWidth: '291px',
    propWidth1: 'unset',
  },
];

const advisorsData = [
  {
    ellipse1539: '/ellipse-1539@2x.png',
    sankalpPatidar: 'Sankalp Patidar',
    iITKharagpurPresident: 'IIT Kharagpur',
    linkedIn: 'https://www.linkedin.com/in/sankalp-patidar-08ba2920a/',
  },
  {
    ellipse1539: '/ellipse-1540@2x.png',
    sankalpPatidar: 'Viren Inaniyan',
    iITKharagpurPresident: 'IIT Bombay',
    linkedIn: 'https://www.linkedin.com/in/viren-inaniyan-959897187/',
    propWidth: '291px',
    propWidth1: '379px',
  },
  {
    ellipse1539: '/ellipse-1541@2x.png',
    sankalpPatidar: 'Sparsh Agrawal',
    iITKharagpurPresident: 'IIT (BHU) Varanasi',
    linkedIn: 'https://www.linkedin.com/in/sparsh-agrawal17/',
    propWidth: '291px',
    propWidth1: 'unset',
  },
];

const Members = () => {
  return (
    <>
      <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-start items-center  font-sora">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold pb-2">
          Heads of AI Council
        </span>
        <div className="w-[80%] flex flex-row flex-wrap items-center justify-evenly py-4 max-lg:hidden ">
          {memberData.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
        <div
          className="relative w-full h-min text-left max-sm:block max-w-full overflow-y-hidden overflow-x-auto lg:hidden py-2"
          data-simplebar
        >
          <div className="flex">
            {memberData.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-start items-center  font-sora">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold pb-2">
          Sub-heads of AI Council
        </span>
        <div className="w-[80%] flex flex-row flex-wrap items-center justify-evenly py-4 max-lg:hidden ">
          {submemberData.map((submember, index) => (
            <MemberCard key={index} {...submember} />
          ))}
        </div>
        <div
          className="relative w-full h-min text-left max-sm:block max-w-full overflow-y-hidden overflow-x-auto lg:hidden py-2"
          data-simplebar
        >
          <div className="flex">
            {submemberData.map((submember, index) => (
              <MemberCard key={index} {...submember} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-start items-center  font-sora">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold pb-2">
          Advisors of AI Council
        </span>
        <div className="w-[80%] flex flex-row flex-wrap items-center justify-evenly py-4 max-lg:hidden ">
          {advisorsData.map((advisor, index) => (
            <MemberCard key={index} {...advisor} />
          ))}
        </div>
        <div
          className="relative w-full h-min text-left max-sm:block max-w-full overflow-y-hidden overflow-x-auto lg:hidden py-2"
          data-simplebar
        >
          <div className="flex">
            {advisorsData.map((advisor, index) => (
              <MemberCard key={index} {...advisor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
