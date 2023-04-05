import "./Main.scss";




function Main () {

    return <div className="main">
      <video class="main__currentvideo"></video>
      <h1 class="main__videotitle"></h1>
      <div class="divider"></div>
      <h2 class="main__videoauthor"></h2>
      <h3 class="main__videodate"></h3>
      <div class="main__views"></div>
      <div class="main__likes"></div>
      <div class="divider"></div>
      <p class="main__description"></p>

    </div>;
}

export default Main;