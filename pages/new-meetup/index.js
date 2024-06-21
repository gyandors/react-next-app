import NewMeetupForm from '@/components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  async function handleAddMeetup(meetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}
