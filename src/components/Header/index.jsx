import Avatar from "../Avatar"
import Logo from "../Logo"
import "./Header.css"

const Header = ({renderAvatar}) => {
  return (
    <header>
      <Logo />
      {renderAvatar && <Avatar size="small"/>}
    </header>
  )
}

export default Header