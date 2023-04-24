import "./Upload.scss";
import PublishImage from "../../assets/images/publish.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_URL;

function Upload() {
  const navigate = useNavigate();

  function publishVideo(e) {
    e.preventDefault();
    const video = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    axios
      .post(`${baseURL}`, video)
      .then((response) => {
        window.alert("You're video has been published");
        if (response.status == 200) {
          navigate("/home");
        }
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <form className="upload" onSubmit={publishVideo}>
      <h1 className="upload__header">Upload Video</h1>
      <div className="upload__uploadcontainer">
        <div className="upload__thumbnailcontainer">
          <h2 className="upload__subheader">VIDEO THUMBNAIL</h2>
          <img
            className="upload__image"
            src="http://localhost:8050/images/Upload-video-preview.jpg"
            alt="bike"
          />
        </div>
        <div className="upload__formcontainer">
          <label className="upload__subheader">TITLE YOUR VIDEO</label>
          <input
            className="upload__input--text"
            type="text"
            placeholder="Add a title to your video"
            name="title"
          ></input>
          <label className="upload__subheader">ADD A VIDEO DESCRIPTION</label>
          <input
            className="upload__input--textarea"
            type="textarea"
            placeholder="Add a description to your video"
            name="description"
          ></input>
        </div>
      </div>
      <div className="upload__buttoncontainer">
        <button type="submit" className="upload__button--publish">
          <img src={PublishImage} alt="publishicon" />
          PUBLISH
        </button>
        <button
          className="upload__button--cancel"
          onClick={() => navigate("/home")}
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default Upload;
