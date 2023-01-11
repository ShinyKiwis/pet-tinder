import "./Button.css";

const Button = ({ content, isPrimary, onClick }) => {
  return (
    <button
      className={isPrimary ? "button_primary" : "button_secondary"}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
