import React from 'react'; 
//Import photographs 
import contentExp from '../../../public/TuneSurf.png'
import radial from '../../../public/Radial_Website.png'
import photoEditing from '../../../public/Editing.png'
import corona from '../../../public/CoronaCapital_Challenge.png'
import creativeArt from '../../../public/Miguel_Single.png'


export default function Portfolio() {
    return (
        <div class="item-container">
        <h2>Work</h2>
            <a href="https://rodrigorol.github.io/TuneSurf/index.html" src={contentExp} class="box-item photofbr" >
                <div>
                    <h3>TuneSurf Application</h3>
                    <span>Content experience</span>
                </div>
            </a>
            <a href="#" src={radial} class="box-item radial-website">
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
