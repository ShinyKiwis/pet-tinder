import "./TextBox.css"

const TextBox = ({type, placeholder, onChange}) => {
  return (
    <div className="textbox_container">
      <input type={type} placeholder={placeholder} onChange={e => onChange(e)} />
    </div>
  )
}

export default TextBox