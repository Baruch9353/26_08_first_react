import "./ProfileCard.css";
import Button from "./Button";

type ProfileCardProps = {
  name: string;
  role: string;
  image: string;
  kind: "friend" | "teacher" | "student";
};

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <Button kind={props.kind} label={`Contact ${props.name}`} />
    </div>
  );
}
