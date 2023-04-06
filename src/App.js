import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Comments from "./components/Comments/Comments";
import VideoDetails from './data/video-details.json';
import Videos from '../../data/videos.json';
import { useState } from "react";


function App() {
//does this function just want to store the video object for the main video and then pass that as props? 
//or should it store and pass the full array? 

const [VideosArray, setVideo] = useState([VideoDetails]);

const [VideoImages,setVideoImage] = useState([Videos]);

  return (
    <>
      <Header/>
      <Main/>
      <Comments VideosArray={VideoData}/>
      <NextVideos VideoImages={VideoImageData}/>
      
    </>
  );
}

export default App;
