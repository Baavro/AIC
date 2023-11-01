import { useMemo } from 'react';

const MemberCard = ({
  ellipse1539,
  sankalpPatidar,
  iITKharagpurPresident,
  linkedIn,
  propWidth,
  propWidth1,
}: any) => {
  const sankalpPatidarStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const iITKharagpurStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="flex flex-col min-w-[333px] items-center justify-start lg:gap-[24px] max-lg:gap-5 text-center text-13xl text-gray font-sora p-2 m-4">
      <img
        className="relative rounded-[50%] w-[182px] h-[182px] object-cover"
        alt=""
        src={ellipse1539}
      />
      <div className="flex flex-col items-center justify-start gap-[8px] max-lg:gap-1">
        <div
          className="relative font-extrabold max-lg:text-[16px]"
          style={sankalpPatidarStyle}
        >
          {sankalpPatidar}
        </div>
        <div
          className="relative text-xl font-medium max-lg:text-[14px]"
          style={iITKharagpurStyle}
        >
          {iITKharagpurPresident}
          <div
            className="relative text-xl font-medium max-lg:text-[14px]"
            style={iITKharagpurStyle}
          >
            <a href={linkedIn}>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
