import { Link, useLocation } from "react-router";
import "./personal-footer.css";

export default function PersonalFooter() {
  // const location = useLocation();
  // const regex = /\/first-react-app\/*$/;
  return (
    <footer className="bookend">
      <div>Posted by Ashton Oder 2025</div>
      <br />
      <nav>
        <a href="#top">Back to Top</a>
        {/* {!regex.test(location.pathname) && (
          <Link to="/first-react-app/">React Navigation</Link>
        )} */}
        <a href="https://veryexcitedgremlin.github.io/">
          Return to projects homepage
        </a>
      </nav>
    </footer>
  );
}
