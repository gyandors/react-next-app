import styles from './MeetupDetails.module.css';
import Card from '../ui/Card';

export default function MeetupDetails(props) {
  return (
    <Card>
      <img className={styles.image} src={props.image} alt="" />
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </Card>
  );
}
