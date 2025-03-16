import React from "react";
import "./PlanetImage.css";


const PlanetImage = ({ data, tabData, isMobile }) => {


    // console.log(tabData + ": planetImage");

    let planetImage = data.images?.planet;
    let additionalImage = null;
    let ImageMobileStyle = isMobile ? {width:"350px", height:"350px"} : {};

    if (tabData === 'Internal Structure') {
        planetImage = data.images?.internal;
    }
    else if (tabData === 'Surface Geology') {
        additionalImage = data.images?.geology;
    }


    return (
        <div  className={tabData == 'Surface Geology' ? 'geoContainer' : ''}>

            <img className="planetImage" src={planetImage} alt="" style={ImageMobileStyle} />

            {additionalImage && <img className="test" src={additionalImage} alt=""  />}
            
        </div>


    );
}

export default PlanetImage;