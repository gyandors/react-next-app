import MeetupDetails from '@/components/meetups/MeetupDetails';
import { dummy_meetups } from '..';

export default function MeetupPage(props) {
  const { meetupData } = props;

  return (
    <MeetupDetails
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupData = dummy_meetups.find(
    (m) => m.id === context.params.meetupId
  );
  return {
    props: {
      meetupData: meetupData,
    },
  };
}
