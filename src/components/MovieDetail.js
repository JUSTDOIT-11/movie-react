import { DefaultContext } from "react-icons";
import { BsFillCursorFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { detail } from "./CSS/detail.css";
import { useState } from "react";

function MovieDetail({ img, title, rating, genres, description, url }) {
  const [bool, setBool] = useState(false);
  const ReadMore = () => {
    setBool((current) => !current);
  };
  return (
    <div className="detail-big-box">
      <div className="detail-box">
        <section className="img-section">
          <img className="cover-img" src={img} />
        </section>
        <section className="description-section">
          <h1 className="title">{title}</h1>

          <div className="genre-box">
            <div className="genre-box-star">
              <h3>
                <FaStar />
                {rating}
              </h3>
            </div>

            <div className="genre-box-genre">
              {genres.map((genre) => (
                <div className="genre" key={genre}>
                  <h3>{genre}</h3>
                </div>
              ))}
            </div>
          </div>

          <p className={`${bool ? "" : "ellipsis"} description`}>
            {description}
          </p>
          {bool ? null : (
            <span className="read-more" onClick={ReadMore}>
              Read More
            </span>
          )}

          <a href={url}>
            <button className="btn">
              <span>More info</span>
              <BsFillCursorFill />
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default MovieDetail;
