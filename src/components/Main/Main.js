import "./Main.scss";


import "./Main.scss";
import VideoDetails from '../../data/video-details.json';

function Main (props) {

    const Videos = VideoDetails;
    return <div className="main">
      <video className="main__currentvideo"></video>
      <div className="videocard">
      <h1 className="main__title"></h1>
      <div className="divider"></div>
      <h2 className="main__author"></h2>
      <h3 className="main__date"></h3>
      <div className="main__views"></div>
      <div className="main__likes"></div>
      <div className="divider"></div>
      <p className="main__description"></p>
      </div>
      </div>;
}

export default Main;

//I think I need an event listener on this component that waits for a click on a video in the next section
//and then displays the props info for that video in this section. 