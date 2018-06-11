import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './components/Main';
import { Link } from 'react-router-dom';
import Pdf from './components/Resume.pdf'


class App extends Component {
  render() {
    return (
      <div>
<nav id='desktop' className='clearfix'>
<h3> <span>Lauren Hale </span>| Web Developer </h3>
                 <Link className='flex-item' to="/AboutMe">About Me</Link>
                <Link className='flex-item'to="/Projects">Projects</Link>
               <a className='flex-item' href={Pdf} target = "_blank">Resume</a>
              <Link className='flex-item'to="/Contact">Contact</Link>

</nav>
<hr/>
<Main/>
  </div>

    );
  }
}

export default App;
