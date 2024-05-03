import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <NavLink to="/">
          <h1>Todo's application</h1>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/list"
                className={(data) => data.isActive && "active"}
              >
                List todo's
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/insert"
                className={(data) => data.isActive && "active"}
              >
                Insert todo's
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(data) => data.isActive && "active"}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
