import { LuMail } from 'react-icons/lu';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type Props = {};

const ContactFooter = (props: Props) => {
  return (
    <div className="bg-black min-h-[250px] h-full flex justify-center items-center lg:py-4 max-lg:py-2 max-sm:py-0">
      <div className="text-white flex flex-col justify-center items-center space-y-4 max-lg:space-y-6 leading-5 lg:w-[calc(100%_-_180px)] max-lg:w-full text-center">
        <div className="space-y-2 flex flex-col text-center justify-center items-center w-full">
          <span className="text-[#FFFFFF] text-center lg:text-lg max-lg:text-[15px] max-sm:text-[13px] w-[85%]">
            Have questions or wish to collaborate with us? Reach us to
          </span>
          <span className="lg:text-2xl text-[#FFF] max-lg:text-xl max-sm:text-lg font-bold text-center w-full lg:pb-6 max-lg:pb-3 max-sm:pb-1 flex flex-row space-x-2 justify-center items-center">
            <LuMail className="mt-1 mr-2" /> contact@aiaic.org
          </span>
        </div>
        <div className="border border-solid border-[#E4E7EC] lg:w-full max-lg:w-[calc(100%_-_60px)]"></div>
        <span className="flex justify-center items-center text-center text-[#98A2B3] lg:w-full max-lg:w-[calc(100%_-_60px)] space-x-2 lg:space-x-4">
          <Link to={'/'}>
            <FaLinkedin />
          </Link>
          <Link to={'/'}>
            <FaXTwitter />
          </Link>
          <Link to={'/'}>
            <FaInstagram />
          </Link>
          <Link to={'/'}>
            <FaFacebook />
          </Link>
        </span>
        <span className="text-[#98A2B3] text-center lg:text-lg max-lg:text-sm max-sm:text-xs lg:w-full max-lg:w-[calc(100%_-_60px)]">
          © 2023 All India Artificial Intelligence Council. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default ContactFooter;
