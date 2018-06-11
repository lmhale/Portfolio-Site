import React, {Component} from 'react';
import projcss from './proj.css'
import game from './catch-the-criminal.png'
import parks from './national-parks.png'
import searchWoo from './search-woo.png'

import Projects2 from './Projects2'


class Projects extends Component {
 render() {
   return(
<div>
     <div className="flex-container">


       <div className="flex-col">
        <a href="https://pages.git.generalassemb.ly/lmhale7/Haleproject-1/">
       <img className="bx1" src={game} alt="logo" />
       <div class="text">An interactive adventure game built with html, css, and javascript.</div>
       </a>
       </div>



       <div className="flex-col">
       <a href="https://evening-basin-75155.herokuapp.com/">
       <img className="bx2" src={parks} alt="logo" />
       <div class="text">A National Park directory built with node, express, and jsx. </div>
       </a>
       </div>

       <div className="flex-col">
       <a href="https://searchwoo.herokuapp.com">
       <img className="bx3" src={searchWoo} alt="logo" />
       <div class="text">A directory of businesses in New York built with node, express, and react </div>
       </a>
       </div>



</div>

<Projects2/>

</div>

    );

 }

}


export default Projects;
