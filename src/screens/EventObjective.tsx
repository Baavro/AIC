import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { useEffect, useRef } from 'react';
import EventObjectiveCard from '../components/EventObjectiveCard';
type Props = {};

const objectives = [
  {
    id: 1,
    title: 'Exploration of AI Frontiers',
    description:
      'Dive deep into the diverse landscape of AI innovations, from machine learning to natural language processing and beyond.',
  },
  {
    id: 2,
    title: 'Collaborative Challenges',
    description:
      'Engage in collaborative problem-solving, where your ideas converge to tackle real-world challenges.',
  },
  {
    id: 3,
    title: 'Networking Opportunities',
    description:
      'Connect with like-minded peers, professionals, and industry leaders passionate about shaping the future through AI.',
  },
];

const EventObjective = (props: Props) => {
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      new SimpleBar(scrollableContainerRef.current);
    }
  }, []);

  return (
    <div className="w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-center items-center">
      <div className="w-[80%] flex lg:flex-row justify-around max-lg:flex-wrap lg:py-4 max-lg:py-2 max-sm:py-1 max-lg:hidden">
        {objectives.map((objective: any) => (
          <EventObjectiveCard key={objective.id} objective={objective} />
        ))}
      </div>
      <div
        className="relative w-full text-left max-sm:block max-w-full overflow-x-auto lg:hidden py-2"
        ref={scrollableContainerRef}
      >
        <div className="relative flex flex-row">
          {objectives.map((objective: any) => (
            <EventObjectiveCard key={objective.id} objective={objective} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventObjective;
