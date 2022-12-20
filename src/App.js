import LandingPage from "./sections/landingPage/LandingPage";
import WhatDoWeDo from "./sections/wdwdPage/Wdwd";
import PerfectWeb from "./sections/perfectweb/perfectweb";
function App() {
  // setInterval(function(){
  //   document.getElementById("appContainer").classList.add("visible")
  // }, 200)
  return (
    <div className="App">
      <div >
        <LandingPage/>
        <WhatDoWeDo/>
        <PerfectWeb/>
      </div>
    </div>
  );
}

export default App;
