import { Link, useRouteError } from "react-router-dom";

function Error404Page() {
  return (
    <div className="error-404-page">
      <h1>ERROR 404</h1>
      <p>
        Go to{" "}
        <Link to="/">
          <b>Home Page</b>
        </Link>
      </p>
    </div>
  );
}
export default Error404Page;
