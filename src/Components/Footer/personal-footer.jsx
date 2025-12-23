// styling
import "./personal-footer.css";

import { Link } from "react-router-dom";

export default function PersonalFooter({ handleLunch }) {
  return (
    <footer className="bookend">
      <div>Posted by Ashton Oder 2025</div>
      <br />
      <nav>
        <li className="px-3" style={{ display: "inline" }}>
          <Link
            style={{ display: "inline" }}
            onClick={handleLunch}
            to="/recipe-finder"
          >
            Recipes Homepage
          </Link>
        </li>
        <li className="px-3" style={{ display: "inline" }}>
          <a style={{ display: "inline" }} href="#top">Back to Top</a>
        </li>
        <li className="px-3" style={{ display: "inline" }}>
          <Link
            style={{ display: "inline" }}
            onClick={handleLunch}
            to="/recipe-finder/favorites"
          >
            Favorite Recipes
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <a className="py-2" href="https://veryexcitedgremlin.github.io/">
            Return to Projects Homepage
          </a>
        </li>
      </nav>
    </footer>
  );
}
