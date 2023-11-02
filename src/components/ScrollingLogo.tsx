type Props = {
  imgSrc: string;
  text: string;
};

const ScrollingLogo = ({ imgSrc, text }: Props) => {
  return (
    <div className="flex justify-center items-center w-max mx-4 space-x-2 text-black/50">
      <img
        className="relative w-[28.04px] h-[27px] object-cover"
        alt=""
        src={imgSrc}
      />
      <div className="relative font-medium w-min">{text}</div>
    </div>
  );
};

export default ScrollingLogo;
