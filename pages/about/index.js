const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' },
];

export default function AboutUsPage() {
  return (
    <ul>
      {details.map((d) => {
        return (
          <li key={d.id}>
            Name: {d.name} Role: {d.role}
          </li>
        );
      })}
    </ul>
  );
}
