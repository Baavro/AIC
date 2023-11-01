import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
type Props = {};

const testimonials = [
  {
    id: 1,
    profile_photo: 'https://placehold.co/150x150/png',
    name: 'Rahul Yadav',
    position: 'President - NITD',
    description:
      "Participating in the AI Council's Program was a transformative experience for me. It breathed life into my ideas and swiftly transformed my initial thoughts into a pre-revenue startup within just a few months.",
  },
  {
    id: 2,
    profile_photo: 'https://placehold.co/150x150/png',
    name: 'Rajdeep Singh',
    position: 'President - NITD',
    description:
      'Joining the AI Council was an incredible journey. From understanding the fundamentals to crafting innovative AI solutions and presenting them to experts, it was a fulfilling experience that turned my ideas into reality. ',
  },
  {
    id: 3,
    profile_photo: 'https://placehold.co/150x150/png',
    name: 'Jiya',
    position: 'President - NITD',
    description:
      "This journey not only expanded my knowledge but also provided significant exposure for my AI startup. The recognition and overwhelming support from the AI council's initiatives propelled our venture to new heights.",
  },
];

const Testimonials = (props: Props) => {
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      new SimpleBar(scrollableContainerRef.current);
    }
  }, []);

  return (
    <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-center items-center">
      <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold">
        Testimonials
      </span>
      <div className="w-[90%] flex lg:flex-row justify-around max-lg:flex-wrap lg:py-4 max-lg:py-2 max-sm:py-1 max-lg:hidden">
        {testimonials.map((testimonial: any) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div
        className="relative w-full text-left max-sm:block max-w-full overflow-x-auto lg:hidden py-2"
        ref={scrollableContainerRef}
      >
        <div className="relative flex flex-row">
          {testimonials.map((testimonial: any) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
