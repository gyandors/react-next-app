import Link from 'next/link';

const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' },
];

export default function AboutUsPage() {
  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {details.map((d) => {
          return (
            <li key={d.id}>
              <Link href={`/about/${d.id}`}>{d.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
