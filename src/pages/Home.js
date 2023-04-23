import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import PreviewCard from "../components/PreviewCard/PreviewCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseURL=process.env.REACT_APP_BASE_URL;

function Home() {
  const { id } = useParams();

  const [currentVideo, setVideoDetails] = useState(null);

  const [videos, setVideos] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    axios
      .get(`${baseURL}`)

      .then((response) => {
        let videos = [];
        console.log(response.data);
        videos = response.data;
        setVideos(videos);
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  }, []);

  useEffect(() => {
    const vidID = id || videos?.[0].id;

    if (vidID) {
      setError(null);
      axios
        .get(`${baseURL}${vidID}`)

        .then((response) => {
          console.log(response.data);
          setVideoDetails(response.data);
        })
        .catch((e) => {
          setError(e.response.data.message);
        });
    }
  }, [id, videos]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentVideo) {
    return <div>loading...</div>;
  }

  if (!videos) {
    return <div>loading...</div>;
  }

  return (
    <div className="app">
      <CurrentVideo currentVideo={currentVideo} />

      <div className="previewvideos__container">
        <h3 className="video__header">NEXT VIDEOS</h3>
        {videos.map((video) => {
          return (
            <PreviewCard
              video={video}
              setVideoDetails={setVideoDetails}
              key={video.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

//use effect helps us only run the api request once our component renders
//use state allows us to modify the component once we have the data from the api
