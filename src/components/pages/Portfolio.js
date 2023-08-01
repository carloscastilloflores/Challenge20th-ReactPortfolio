import React from 'react'; 
//Import photographs 
import contentExp from '../../images/TuneSurf.png'
import radial from '../../images/Radial_Website.png'
import photoEditing from '../../images/Editing.png'
import corona from '../../images/CoronaCapital_Challenge.png'
import creativeArt from '../../images/Miguel_Single.jpg'


export default function Portfolio() {
    return (
        <div className="container">
            <a href="https://rodrigorol.github.io/TuneSurf/index.html" src={contentExp} className="box-item photofbr" >
                <div>
                    <h3>TuneSurf Application</h3>
                    <span>Content experience</span>
                </div>
            </a>
            <a href="#" src={radial} className="box-item radial-website">
                <div>
                    <h3>Radial Website</h3>
                    <span>HTML & CSS</span>
                </div>
            </a>
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
