
import React, {Component} from 'react';
import booksApp from './booksApp.png'
import projRowTwo from './projRowTwo.css'
class ProjectsTwo extends Component {
 render() {
   return(

<div className="flex-container-row-two">
 <div className="flex-col-row-two">
 <a href="https://github.com/lmhale/All_About_Books">
 <img className="bookImg" src={booksApp} alt="logo" />
 <div className="text">
 A mobile app that allows the user to get info about about any book by searching the title. Built with react-native, redux, and firebase. </div>
 </a>
 </div>



 </div>




     );

  }

 }


 export default ProjectsTwo;
