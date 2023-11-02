import RoadMapMobileCard from '../components/RoadMapMobielCard';

const cardData = [
  {
    title: 'Detailed career Roadmap',
    description:
      'The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.',
  },
  {
    title: 'Detailed career Roadmap',
    description:
      'The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.',
  },
  {
    title: 'Detailed career Roadmap',
    description:
      'The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.',
  },
  {
    title: 'Detailed career Roadmap',
    description:
      'The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.',
  },
];

const RoadMapMobile = () => {
  return (
    <div className="timeline">
      {cardData.map((card, index) => (
        <RoadMapMobileCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default RoadMapMobile;
