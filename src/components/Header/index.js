import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>(
    <div className="nav-header">
        <h1 className="header-heading">TechCrunch Blogs</h1>
        <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            BlogList
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            AboutBlogDetails
          </Link>
        </li>
      </ul>
    </div>
)

export default Header