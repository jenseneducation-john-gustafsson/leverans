import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2 className="not-found">Woops! The page you're looking for does not exist!</h2>
      <Link to="/"><button className="Catbutton">Go back to start page</button></Link>

    </div>
  )
}

export default NotFound
