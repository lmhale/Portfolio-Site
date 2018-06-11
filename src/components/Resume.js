import React, {Component} from 'react';
import Pdf from './Resume.pdf'
class Resume extends Component {
 render() {
   return(

<div><h1> Resume page </h1>
<a href = {Pdf} target = "_blank">Download Pdf</a>
</div>
    );

 }

}


export default Resume;
