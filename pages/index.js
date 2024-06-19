import MeetupList from '@/components/meetups/MeetupList';

export const meetups = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp',
    address: 'Unit Number G1, Dosti Pinnacle, Road No. 22, Neheru Nagar',
    description: 'This is our First Meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://my.alfred.edu/zoom/_images/foster-lake.jpg',
    address: 'Unit Number A1, Friend Pinnacle, Road No. 22, New Neheru',
    description: 'This is our Second Meetup',
  },
];

export default function HomePage() {
  return <MeetupList meetups={meetups} />;
}
