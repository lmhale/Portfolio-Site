import React, {Component} from 'react';
import about from './about.css'
import profPic from './profPic.jpg'
class AboutMe extends Component {
 render() {
   return(

<div className="about-container">
<img className="profPic" src={profPic} />
<p>Welcome!
<br/>
<br/>

I’m Lauren, a web developer and avid devourer of all things tech. I have the most experience working with JavaScript, having built multiple applications using node and front-end frameworks such as react. That being said, I thrive on pattern recognition over language-specificity and am able to pick up any language or framework with relative ease.
When I’m not coding you can find me enjoying the outdoors, drinking wine, watching college sports, or engrossed in a novel.
</p>

</div>

    );

 }

}


export default AboutMe;
