import LandingPage from "./sections/landingPage/LandingPage";
import WhatDoWeDo from "./sections/wdwdPage/Wdwd";
function App() {
  setInterval(function(){
    document.getElementById("appContainer").classList.add("visible")
  }, 200)
  return (
    <div className="App">
      <div id="appContainer">
        <LandingPage/>
        <WhatDoWeDo/>
      </div>
    </div>
  );
}

export default App;
