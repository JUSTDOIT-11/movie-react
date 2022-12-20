import { useEffect, useState } from "react";
import HomeMain from "../components/HomeMain";
import HomeTopbar from "../components/HomeTopbar";
import { home } from "../routecomponent/home.css";

function Home() {
  const [load, setLoad] = useState(true); //로딩
  const [movies, setMovies] = useState([]); //별점 8.8 이상 영화들의 배열
  const getMovieIfo = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setLoad(false); //api호출 완료 후 로딩 완료를 위해,,
    setMovies(json.data.movies); //movies 배열에 각 오브젝트들을 넣어준다.
  };
  //api는 한번만 실행하기 위해 useEffect 사용
  useEffect(() => {
    getMovieIfo();
  }, []);

  return (
    <div className="big-box">
      {load ? (
        <h1 className="load">loading...</h1>
      ) : (
        <div>
          <HomeTopbar />
          <main className="movies-list">
            {movies.map((movie) => (
              <HomeMain
                key={movie.id} //map함수 사용할 때에는 key값 반드시 필요
                id={movie.id}
                coverImg={movie.medium_cover_image}
              />
            ))}
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
