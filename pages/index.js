import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//getStaticProps() and getServerSideProps() functions runs on server side,
// there for its not render on client side.
export async function getStaticProps() {
  //Option 1: Because this is server side function, there for we need to use Environment Variables.
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/meetups`
  // );

  // const meetups = await response.json();

  //Option 2: We can directly connect Mongo in this function as this function wont execute on client side.
  const client = await MongoClient.connect(
    "mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db("meetups");
  const collection = db.collection("meetups");
  const meetups = await collection.find().toArray();

  await client.close();

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

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   };
// }
