import CurrentVideo from "../components/CurrentVideo/CurrentVideo";
import PreviewCard from "../components/PreviewCard/PreviewCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "fabe5d3e-7822-47e1-a3f9-b1a93a8deb7d";


//on page load home page should load the video object with id of bmx video and it needs to call the API to do this
//then wait for a click on a preview card and state changes, calls the correct API, and state var currentVideoDetails 
//updates to contain the video object with the video id that was clicked
//setVideoDetails then RETURNS the current video component which receives the video details it needs through props
//it also returns the preview cards after it calls the videos API to get the necessary data to generate them 


function Home() {
  
  const {id} = useParams();

  const [currentVideo, setVideoDetails] = useState(null);
  // id='84e96018-4022-434e-80bf-000ce4cd12b8' 
  
  const[videos,setVideos]= useState(null);


  const [error,setError] = useState(null);

  useEffect( () => {
    setError(null);
    axios
    .get(`${BASE_URL}?api_key=${apiKey}`)
    //this api request only gives id, title, channel and image and is ONLY relevant to preview card 
    
    .then((response) => {
        let videos = [];
        console.log(response.data);
        videos=response.data;
        setVideos(response.data);
        
    })
    .catch((e) => {
        setError(e.response.data.message);
    });
  },[]);

  
  //the below API request is getting video details for the current video clicked through the id in the URL
  
  // useEffect(() => { 
  //   axios.get(`${BASE_URL}?api_key=${apiKey}`)
  //   .then(({data}) => {
  //     let vidsArray=[];
  //     vidsArray={data};
  //     console.log(vidsArray);

      

  //     //I'm trying to make a new array that contains a list of videoids so I can use it to
  //     //load a default video on page load
    
    
  //   });
  // }, []);

  useEffect ( () => {

    const vidID= id || videos?.[0].id;

    if(vidID){
    
    setError(null);
    axios
    .get(`${BASE_URL}${vidID}?api_key=${apiKey}`)
    // || "84e96018-4022-434e-80bf-000ce4cd12b8"

    .then ((response) => {
      console.log(response.data);
      setVideoDetails(response.data);

    })
    .catch((e) => {
        setError(e.response.data.message); 
    }); 
  }
}, [id,videos]); 


  //the below API request is getting an array of videos with title, channel, image to generate preview cards

  
 

  

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentVideo) {
    return <div>loading...</div>;
  }

  if (!videos) {
    return <div>loading...</div>
  }

  //design for a scenario where's there's no id 

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
