import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log("hola");
    fetchVideos();
  }, []);

  const [videos, setVideos] = useState([]);

  async function fetchVideos() {
    const res = await fetch(
      "https://music-hn.herokuapp.com/api.v2/videos?q=acdc"
    );
    const data = await res.json();
    console.log(data);
    setVideos(data.videos);
  }
  return (
    <div className=" text-white bg-slate-900">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="snap-y snap-mandatory">
        {videos.map((v) => {
          return (
            <div className="snap-start h-screen relative" key={v.id}>
              <img
                className="h-screen"
                src={v.bestThumbnail.url}
                alt={v.title}
              />
              {/* btns   */}
              <div className="h-1/4 justify-around z-40 absolute right-5 flex flex-col bottom-20">
                <div className="relative">
                  <img
                    className="shadow-lg w-10 h-10 rounded-full"
                    src={v.bestThumbnail.url}
                    alt="profile"
                  />
                  <button className="absolute top-7 left-2 bg-pink-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
              {/* btns */}
              <h2 className="absolute z-50 bottom-2">{v.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
