import React, {Component} from 'react';
import contact from './contact.css'

class Contact extends Component {
 render() {
   return(


<div>
   <p className="contact-text">Please feel free to send me an email, puruse my github, or connect with me on other social media. I look forward to hearing from you!</p>
   <div className="contact-container">
  <a className="icon"href="mailto:lauren.m.hale7@gmail.com"><i class="fas fa-envelope"></i></a>
  <a className="icon" href="https://github.com/lmhale"><i class="fab fa-github"></i></a>
  <a className="icon" href="https://www.linkedin.com/in/laurenmariehale/"><i class="fab fa-linkedin"></i></a>
  <a className="icon" href="https://www.facebook.com/lauren.m.hale.5?ref=bookmarks"> <i class="fab fa-facebook"></i></a>
     </div>
</div>
    );

 }

}


export default Contact;
