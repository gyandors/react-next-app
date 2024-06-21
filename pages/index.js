import { MongoClient } from 'mongodb';
import MeetupList from '@/components/meetups/MeetupList';

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //Option 1: When we are using api route
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/meetups`
  // );

  // const meetups = await response.json();

  //Option 2: We can directly connect Mongo in this function as this function wont run on client side.
  const client = await MongoClient.connect(
    'mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );

  const db = client.db('meetups');
  const collection = db.collection('meetups');
  const meetups = await collection.find().toArray();

  return {
    props: {
      meetups: meetups.map((m) => {
        return {
          id: m._id.toString(),
          title: m.title,
          image: m.image,
          address: m.address,
        };
      }),
    },
  };
}

// export async function getServerSideProps(con) {
//   console.log(con);
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   };
// }
