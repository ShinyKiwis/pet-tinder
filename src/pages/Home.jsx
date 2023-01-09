import {useAuth} from "../hooks"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
  if(!user) {
    navigate("/login")
  }

  return (
    <div>Home</div>
  )
}

export default Home