import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg" //add image
import Wrapper from "../assets/wrappers/NotFound"

const NotFound = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt="not-found" />
            <h3>Ohh! Page Not Found</h3>
            <h3>We can't seem to find the page you're looking for</h3>
            <Link to="/landing">Go To Landing Page</Link>
        </div>
    </Wrapper>
  )
}

export default NotFound
