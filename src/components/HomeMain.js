import { Link } from "react-router-dom";
/**메인 컨텐츠*/
function HomeMain({ coverImg, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} />
      </Link>
    </div>
  );
}

export default HomeMain;
