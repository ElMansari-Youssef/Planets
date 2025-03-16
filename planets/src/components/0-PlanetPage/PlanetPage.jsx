import React from 'react';
import { useEffect, useState } from 'react';
import './planetPage.css'

import Header from '../1-header/Header';
import PlanetDetails from '../2-PlanetDetails/PlanetDetails';
import Tabs from '../3-Tabs/Tabs';
import PlanetImage from '../4-PlanetImage/PlanetImage';
import Stats from '../5-Stats/Stats';


const PlanetPage = () => {

    let [data, setData] = useState({});
    let [planetEndPoint, setPlanetEndPoint] = useState('0'); // Default to Mercury 
    let [tabData, settabData] = useState('');

    let [isMobile, setIsMobile] = useState(window.innerWidth <= 705)
    // let [statsData, setStatsData] = useState({});


    useEffect(() => {


        let url = `http://localhost:8000/${planetEndPoint}`; // Use planetEndPoint in API call

        fetch(url)
            .then(response => response.json())
            .then(data => setData(data)
            )
            .catch(err => console.log("Fetch Error:", err))
    }, [planetEndPoint]); //Re-fetch data when planetEndPoint changes

    useEffect(() => {
        settabData("Overview");
    }, [planetEndPoint]);

    useEffect(() => {

        let handleResize = () => {
            setIsMobile(window.innerWidth <= 705);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [])
    console.log(isMobile);

    //Check if data array is empty, indicating data is still being fetched

    if (data.length === 0) {
        // Display a loading message to the user while data is being fetched
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    // console.log(tabData);

    return (
        <div className='planetPageContainer'>

            <Header setPlanetEndPoint={setPlanetEndPoint} isMobile={isMobile} />

            <div className="devider"></div>

            <Tabs
                index={planetEndPoint}
                settabData={settabData}
                tabData={tabData}
                isMobile={isMobile}
                style={{ display: isMobile ? "" : "none",
                       
                    
                 }} // First Tabs (Visible on Mobile)
            />

            <div className="container">

                <PlanetImage data={data} tabData={tabData} isMobile={isMobile} />

                <div className="planetDetailsAndTabsContainer">

                    <PlanetDetails data={data} path={tabData} />

                    <Tabs
                        index={planetEndPoint}
                        settabData={settabData}
                        tabData={tabData}
                        style={{ display: isMobile ? "none" : ""

                 }} // Second Tabs (Hidden on Mobile)
                        isMobile={isMobile}



                    />

                </div>

            </div>

            <Stats data={data} />
            {/* setStatsData={setStatsData} */}

        </div>
    );
}

export default PlanetPage;