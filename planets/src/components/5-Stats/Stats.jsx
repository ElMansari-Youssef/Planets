import React from 'react';
import './stats.css'


const Stats = ({data }) => {

    let stats = [
        {name: 'rotation', value: data.rotation},
        {name: 'revolution', value: data.revolution},
        {name: 'radius', value: data.radius},
        {name: 'temperature', value: data.temperature},
    ]
       
    

    return ( 
        <div className='statsContainer'>

            {stats.map((stat, index) => (
                <div key={index} className='stats'>

                    <span className='statTitle'>{stat.name}</span>
                    <span className='statData'>{stat.value}</span>
                </div>
            ))}

        </div>
     );
}
 
export default Stats;