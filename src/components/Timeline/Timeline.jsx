import React from 'react'

import './Timeline.css';
import LineUp from '../lineUp/LineUp'
const time = () =>(

    <div className="back">

    <div className="Timeline">
          <h3>Talks</h3>
        <LineUp/>
    </div>    
        <div className="Timlinecomponents">

        <div className="Modal">
            <div className="Nuvem">
                2018
            </div> 
        </div>
        <div className="Bolinha"></div>

        <div className="Text">
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            </p>
        </div>

        </div>

        <div className="Timlinecomponents">

        <div className="Text2">
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            </p>
        </div>

        <div className="Bolinha"></div>
        <div className="Modal">
            <div className="Nuvem">
                2019
            </div> 
        </div>
       

        </div>
        </div>
)
export default time