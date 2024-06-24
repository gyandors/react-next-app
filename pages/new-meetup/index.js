import { useRouter } from "next/router";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const router = useRouter();

  async function handleAddMeetup(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.replace("/");
    }
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}
