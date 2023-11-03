import RoadMapMobileCard from '../components/RoadMapMobielCard';

const cardData = [
  {
    title: 'Introduction to the Future',
    description:
      'Get to know the latest technology and innovations in the field of AI through interactive workshops and hackathons',
  },
  {
    title: 'Practical Learning experience',
    description:
      'Learn to build amazing real-world solutions through the Institute level projects with your mentor institute',
  },
  {
    title: 'Dive into the sea of AI',
    description:
      'Relish the taste of AI buffet as we journey through the fields of AI in Imagery, Audio, Natural Language and much more',
  },
  {
    title: 'Be part of the community',
    description:
      'Become a part of the community to enhance the learning experience. Brightest of brains all at one place!',
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
