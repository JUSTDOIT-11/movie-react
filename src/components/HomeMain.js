import { Link } from "react-router-dom";
import { Main } from "./CSS/Main.css";
/**메인 컨텐츠*/
function HomeMain({ coverImg, id }) {
  return (
    <div className="movie-post">
      <div className="movie-post-inside-box">
        <Link to={`/movie/${id}`}>
          <img src={coverImg} />
        </Link>
      </div>
    </div>
  );
}

export default HomeMain;
