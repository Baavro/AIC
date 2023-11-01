import React from 'react';
import ActivityCard from './ActivityCard';

type Props = {};

const activities = [
    {
        id: 1,
        title: 'AI Conferences and Workshops',
        icon: 'https://www.figma.com/file/kRDD54NgrHKVe01BQTsrOB/Nova-Redesign?type=design&node-id=4683-38542&mode=design&t=xfQt8xL7oQga0Kkk-4',
        description: 'The council aims to organize & host various AI conferences and workshop to promote, collaboration and provide a platform for sharing the latest industry updates and research findings.',
    },
    {
        id: 2,
        title: 'Resources and Platform',
        icon: 'https://www.figma.com/file/kRDD54NgrHKVe01BQTsrOB/Nova-Redesign?type=design&node-id=4690-41030&mode=design&t=xfQt8xL7oQga0Kkk-4',
        description: 'The council will work with experts to provide resources and platforms for learning industrial application of AI to build capacity of the beneficiaries in organizations across India.',
    },
    {
        id: 3,
        title: 'AI Competitions and Hackathons',
        icon: 'https://www.figma.com/file/kRDD54NgrHKVe01BQTsrOB/Nova-Redesign?type=design&node-id=4690-41054&mode=design&t=xfQt8xL7oQga0Kkk-4',
        description: 'The council will partner with colleges and organizations to host AI-related competitions and hackathons to facilitate the development of innovative solutions in the field of AI.',
    }
];

const Activities = (props: Props) => {
    return (
        <div className='w-full lg:pt-8 max-lg:pt-6 max-sm:pt-4 text-center flex flex-col justify-center items-center'>
            <span className="lg:text-4xl max-lg:text-2xl max-sm:text-xl font-bold">
                Our Activities
            </span>
            <div className='w-[90%] flex lg:flex-row justify-around max-lg:flex-wrap lg:py-4 max-lg:py-4 max-sm:py-2'>
                {activities.map((activity: any) => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
    );
};

export default Activities;
