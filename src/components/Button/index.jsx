import "./Button.css"

const Button = ({content, isPrimary}) => {
  return (
    <button className={isPrimary ? "button_primary": "button_secondary"}>
      {content}
    </button>
  )
}

export default Button