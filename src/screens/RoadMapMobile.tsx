import RoadMapMobileCard from '../components/RoadMapMobielCard';

const cardData = [
  {
    title: 'Jan-March',
    description:
      'Build your AI Club along with your mentor IIT. Participate in the Events and Workshop to boost your career. ',
  },
  {
    title: 'March - April',
    description:
      'Be part of the AI fest and Pan India GenAI hackathon as AI Club to enhance your network ',
  },
  {
    title: 'Summer, 2024',
    description:
      'Learn from the best, Develop Real-World Projects and Get Industrial exposure through the builders zone',
  },
  {
    title: 'Beyond..',
    description:
      'Become a part of the community to grow with the brightest of brains all at one place!',
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

                      