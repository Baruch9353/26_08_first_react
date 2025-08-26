import './Button.css';

type ButtonProps = {
  kind: "friend" | "teacher" | "student";
  label: string;
  onClick?: () => void;
};

export default function Button({ kind, label, onClick }: ButtonProps) {
  return (
    <button className={`btn btn--${kind}`} onClick={onClick}>
      {label}
    </button>
  );
}
