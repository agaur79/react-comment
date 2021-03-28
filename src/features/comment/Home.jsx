import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p>Akash Singh Gaur</p>
      <Link to="/comment">
        <button className="button-primary">Comments</button>
      </Link>
    </div>
  );
}