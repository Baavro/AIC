import ObjectiveCard from './ObjectiveCard';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import {useEffect, useRef} from 'react';
type Props = {};

const objectives = [
  {
    id: 1,
    title: 'Promote AI research',
    description: 'The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.',
  },
  {
    id: 2,
    title: 'Develop AI applications',
    description: 'The council will collaborate with experts to develop innovative AI applications and use cases that benefit society and provide economic advantages to India.',
  },
  {
    id: 3,
    title: 'Support AI education',
    description: 'The council will develop curricula for AI education programs in collaboration with leading institutions and organizations to develop AI workforce.',
  },
];

const Objective = (props: Props) => {
    const scrollableContainerRef = useRef(null);
  
    useEffect(() => {
      if (scrollableContainerRef.current) {
        new SimpleBar(scrollableContainerRef.current);
      }
    }, []);
  
    return (
      <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-center items-center">
        <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold">Our Objective</span>
        <div className="w-[90%] flex lg:flex-row justify-around max-lg:flex-wrap lg:py-4 max-lg:py-2 max-sm:py-1 max-lg:hidden">
          {objectives.map((objective: any) => (
            <ObjectiveCard key={objective.id} objective={objective} />
          ))}
        </div>
        <div
          className="relative w-full text-left max-sm:block max-w-full overflow-x-auto lg:hidden py-2"
          ref={scrollableContainerRef}
        >
          <div className="relative flex flex-row">
            {objectives.map((objective: any) => (
              <ObjectiveCard key={objective.id} objective={objective} />
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Objective;
