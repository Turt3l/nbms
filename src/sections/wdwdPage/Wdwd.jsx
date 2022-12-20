import image from "../../media/images/pencil.webp";
import image1 from "../../media/images/construction.webp";
import image2 from "../../media/images/palette.webp";
function WhatDoWeDo() {
    return(
        <div className="wdwContainer">
            <div className="wdwWrapper">
                <div className="wdwHeadWrapper">
                    <h1>What can we do?</h1>
                </div>
                <div className="elementWrapper">
                        <div className="elementCol">
                            <div className="element">
                                <div className="elementPicture">
                                    <img src={image}/>
                                </div>
                                <div className="elementMainText">
                                    <p>main example</p>
                                </div>
                                <div className="elementDescriptionText">
                                    <p>main example description</p>
                                </div>
                            </div>
                            <div className="element">
                                <div className="elementPicture">
                                    <img src={image1}/>
                                </div>
                                <div className="elementMainText">
                                    <p>main example</p>
                                </div>
                                <div className="elementDescriptionText">
                                    <p>main example description</p>
                                </div>
                            </div>
                            <div className="element">
                                <div className="elementPicture">
                                    <img src={image2}/>
                                </div>
                                <div className="elementMainText">
                                    <p>main example</p>
                                </div>
                                <div className="elementDescriptionText">
                                    <p>main example description</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default WhatDoWeDo;