import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Comments from "./components/Comments/Comments";
import VideoDetails from './data/video-details.json';


function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Comments/>
      
    </>
  );
}

export default App;
