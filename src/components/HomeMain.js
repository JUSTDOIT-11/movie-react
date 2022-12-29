import { Link } from "react-router-dom";
import { Main } from "./CSS/Main.css";
/**메인 컨텐츠*/
function HomeMain({ coverImg, id, title }) {
  return (
    <div className="movie-post">
      <div className="movie-post-inside-box">
        <Link to={`/movie/${id}`}>
          <div className="post">
            <img className="post-img" src={coverImg} />
            <h3 className="movie-title">{title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeMain;
