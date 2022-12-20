import LandingPage from "./sections/landingPage/LandingPage";
import WhatDoWeDo from "./sections/wdwdPage/Wdwd";
<<<<<<< HEAD
import PerfectWeb from "./sections/perfectweb/perfectweb";
=======
>>>>>>> 3f1488439b8c816604a5f87dab3d807796d0205d
function App() {
  setInterval(function(){
    document.getElementById("appContainer").classList.add("visible")
  }, 200)
  return (
    <div className="App">
      <div id="appContainer">
        <LandingPage/>
        <WhatDoWeDo/>
<<<<<<< HEAD
        <PerfectWeb/>
=======
>>>>>>> 3f1488439b8c816604a5f87dab3d807796d0205d
      </div>
    </div>
  );
}

export default App;
