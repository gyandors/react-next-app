import MeetupDetails from '@/components/meetups/MeetupDetails';
import { useRouter } from 'next/router';
import { meetups } from '..';

export default function MeetupPage() {
  const router = useRouter();

  const matchedMeetup = meetups.find((m) => m.id === router.query.meetupId);

  if (!matchedMeetup) return;

  return (
    <MeetupDetails
      image={matchedMeetup.image}
      title={matchedMeetup.title}
      address={matchedMeetup.address}
      description={matchedMeetup.description}
    />
  );
}
