// styling
import "./personal-footer.css";

import { Link } from "react-router-dom";

export default function PersonalFooter({ handleLunch }) {
  return (
    <footer className="bookend">
      <div>Posted by Ashton Oder 2025</div>
      <br />
      <nav>
        <li><a href="#top">Back to Top</a></li>
        <li>
          <Link onClick={handleLunch} to="/recipe-finder">
            Recipes Homepage
          </Link>
        </li>
        <li>
          <Link onClick={handleLunch} to="/recipe-finder/favorites">
            Favorite Recipes
          </Link>
        </li>
        <li>
          <a href="https://veryexcitedgremlin.github.io/">
            Return to Projects Homepage
          </a>
        </li>
      </nav>
    </footer>
  );
}
