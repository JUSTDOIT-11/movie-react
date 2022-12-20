import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
/**영화 상세 정보창 */
function Detail() {
  const [load, setLoad] = useState(true); //로딩
  const [movie, setMovie] = useState([]); //영화 한 편의 정보 배열
  const { id } = useParams(); //{id} = id를 오브젝트가 아니라 string으로 받아오기 위함.

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie([json.data.movie]);
    setLoad(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {load ? (
        <h1>loading...</h1>
      ) : (
        movie.map((movie) => (
          <div key={movie.id}>
            <img src={movie.large_cover_image} />
            <h1>{movie.title}</h1>
            <h3>{movie.rating}</h3>
            {movie.genres.map((genre) => (
              <div key={genre}>
                <h4>{genre}</h4>
              </div>
            ))}
            <p>{movie.description_intro}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Detail;
