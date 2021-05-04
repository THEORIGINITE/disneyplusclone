import React from "react";
import './Home.css';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import NewViewer from './NewViewer';
function Home() {
  return(
    <main className="home_Main">
     <ImgSlider/>
     <Viewer/> 
     <NewViewer/>
     <ImgSlider/>
     <Viewer/>
     <ImgSlider/>
    </main>
  );
}

export default Home;
