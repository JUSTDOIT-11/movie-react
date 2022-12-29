import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieDetail from "../components/MovieDetail";

/**영화 상세 정보창 */
function MovieInfo() {
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
    <div className="movie-info-box">
      {load ? (
        <Loading />
      ) : (
        movie.map((movie) => (
          <MovieDetail
            key={movie.id}
            img={movie.large_cover_image}
            title={movie.title}
            rating={movie.rating}
            genres={movie.genres}
            description={movie.description_intro}
            url={movie.url}
          />
        ))
      )}
    </div>
  );
}

export default MovieInfo;
