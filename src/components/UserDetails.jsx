import { Link } from "react-router-dom"

function UserDetails() {
  return (
    <div>
      hello UserDetails
      <Link to={"/login"}>
        <h1>Sign up</h1>
      </Link>
    </div>
  )
}

export default UserDetails
