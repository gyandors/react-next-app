import { useRouter } from 'next/router';

const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' },
];

export default function DeveloperPage() {
  const router = useRouter();

  if (!router.query.developer) {
    return;
  }

  const matchedDetails = details.find((d) => d.id === router.query.developer);

  return (
    <div>
      {matchedDetails ? (
        <h1>
          {matchedDetails.name} {matchedDetails.role}
        </h1>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </div>
  );
}
