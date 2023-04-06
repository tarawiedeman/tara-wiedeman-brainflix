import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import PreviewCard from "./components/PreviewCard/PreviewCard";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
  const [currentVideoDetails, setVideoDetails] = useState(videoDetails[0]);

  return (
    <>
      <Header />
      <CurrentVideo video={currentVideoDetails} />
      <h3 className="video__header">Next Videos</h3>
      {videoDetails.map((oneVideo) => {
        return (
          <PreviewCard video={oneVideo} setVideoDetails={setVideoDetails} key={oneVideo.id}/>
        );
      })}
    </>
  );
}

export default App;
