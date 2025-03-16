import React from 'react';
import { useState } from 'react';
import './tabs.css'

const Tabs = ({ style,index, settabData, tabData, isMobile }) => {


    let content;

    switch (index) {
        case '0': content = "#419EBB"; break;
        case '1': content = "#EDA249"; break;
        case '2': content = "#6f2ed6"; break;
        case '3': content = "#D14C32"; break;
        case '4': content = "#D83A34"; break;
        case '5': content = "#CD5120"; break;
        case '6': content = "#1EC1A2"; break;
        case '7': content = "#2D68F0"; break;
    }

    let handleClick = (tabName) => {
        settabData(tabName);  
    }


    return (


        <div className='tabs' style={style} >

            <button

                style={{
                    backgroundColor: tabData === 'Overview' ? content : 'transparent'
                }}



                onClick={() => {

                    handleClick('Overview')

                }} >{isMobile ? 'Overview' : 'Overview'}</button>


            <button

                style={{
                    backgroundColor: tabData === 'Internal Structure' ? content : 'transparent'

                }}




                onClick={() => {

                    handleClick('Internal Structure');

                }}>{isMobile ? 'Structure' : 'Internal Structure'}</button>

            <button
                style={{
                    backgroundColor: tabData === 'Surface Geology' ? content : 'transparent'

                }}



                onClick={() => {
                    handleClick('Surface Geology');
                }}>{isMobile ? 'Geology' : 'Surface Geology'}</button>

        </div >


    );

}
export default Tabs;