import { DefaultContext } from "react-icons";
import { BsFillCursorFill } from "react-icons/bs";

function MovieDetail({ img, title, rating, genres, description, url }) {
  return (
    <div>
      <img src={img} />
      <h1>{title}</h1>
      <h3>{rating}</h3>
      {genres.map((genre) => (
        <div key={genre}>
          <h4>{genre}</h4>
        </div>
      ))}
      <p>{description}</p>
      <a href={url}>
        <button>
          <span>More info</span>
          <BsFillCursorFill />
        </button>
      </a>
    </div>
  );
}

export default MovieDetail;
