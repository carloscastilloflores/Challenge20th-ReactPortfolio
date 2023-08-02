import React from 'react'; 
import { useState } from 'react';
//Import photographs 
import contentExp from '../../images/TuneSurf.png'
import radial from '../../images/Radial_Website.png'
import photoEditing from '../../images/Editing2.png'
import corona from '../../images/CoronaCapital_Challenge.png'
import creativeArt from '../../images/Miguel_Single.jpg'
import salesTracker from '../../images/SalesTracker.jpg'

export default function Portfolio() {

const [isHover, setIsHover] = useState(false);
const handleMouseEnter = () => {
    setIsHover(true);
};
const handleMouseLeave = () => {
    setIsHover(false);
};
const boxStyle = {
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    cursor: 'pointer',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: isHover ? 1 : 0,
    visibility: isHover ? 'visible' : 'hidden',
    transition: 'opacity 0.5s ease', 
    backgroundColor: isHover ? 'rgba(255, 255, 255, 0.9)' : 'white',
  };


    return (
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" >
                    <div style={{position: 'relative', zIndex:'0'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <img 
                        src={contentExp}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Three phones displaying media from favorite artist"
                        
                    />
                     {isHover && <h1 className="mask" style={boxStyle}> Tune Surf App<br/>Experience content</h1>}     
                    </div>
                    <div style={{position: 'relative', zIndex:'0'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img
                        src={photoEditing}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Landing Page with Radial Logo and background mushroom"
                    />
                     {isHover && <h1 className="mask" style={boxStyle}> Editorial photography<br/>Post-production editing</h1>}     
                    </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                <img 
                        src={creativeArt}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Three phones displaying media from favorite artist"
                    />
                    <img
                        src={salesTracker}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Landing Page with Radial Logo and background mushroom"
                    />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                <img 
                        src={radial}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Three phones displaying media from favorite artist"
                    />
                    <img
                        src={corona}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Landing Page with Radial Logo and background mushroom"
                    />
                </div>
                <a href="https://rodrigorol.github.io/TuneSurf/index.html" src={contentExp} >
                    <div>
                        <h3>TuneSurf Application</h3>
                        <span>Content experience</span>
                    </div>
                </a>
            </div>
            <div className=".col-6">
                <a href="#" src={radial}>
                    <div>
                        <h3>Radial Website</h3>
                        <span>HTML & CSS</span>
                    </div>
                </a>
            </div>

            <a href="#"  src={corona}  class="box-item corona-challenge">
                <div>
                    <h3>Corona Challenge</h3>
                    <span>Design Development</span>
                </div>
            </a>
            <a href="#"  src={photoEditing} class="box-item photo-editing">
                <div>
                    <h3>Editorial photography</h3>
                    <span>Post-production editing</span>
                </div>
            </a>
            <a href="#" src={creativeArt}  class="box-item  creative-project">
                <div>
                    <h3>Album Art Miguel Calderón</h3>
                    <span>Storytelling and visual work</span>
                </div>
            </a>
        </div>
    );
}
