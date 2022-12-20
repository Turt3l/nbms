
import logo from "../../media/images/logo.webp"
function LandingPage() {

    return(
        <div className="LandingContainer">
            <div className="LandingWrapper">
                <div className="col text-col" id="item">
                    <div className="headerLogoContainer">
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="textContainer">
                        <div className="textWrapper">
                            <div className="slide-up mainText">
                                <h1>Breath-taking design for your business</h1>
                            </div>
                            <div className="slide-up-slow descriptionText">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat, distinctio amet consequunt</p>
                            </div>
                        </div>
                    </div>
                    <div className="landingDec" id="landingDec">

                    </div>
                </div>
                <div className="col image-col">
                    <div className="overlay">
                        <div className="imageSliderContainer">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LandingPage;