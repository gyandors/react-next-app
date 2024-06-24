import { MongoClient, ObjectId } from "mongodb";

import MeetupDetails from "@/components/meetups/MeetupDetails";

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
  const client = await MongoClient.connect(
    "mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db("meetups");

  const collection = db.collection("meetups");
  const result = await collection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  await client.close();

  return {
    fallback: false,
    paths: result.map((r) => {
      return {
        params: {
          meetupId: r._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db("meetups");

  const collection = db.collection("meetups");
  const meetupData = await collection.findOne({
    _id: new ObjectId(meetupId),
  });

  await client.close();

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
    revalidate: 5,
  };
}
