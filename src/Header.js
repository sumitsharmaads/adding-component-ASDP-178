import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="heading1">
      <h1> This is Header </h1>
      </div>
      <div className="paragraph1">
      <p> This is paragraph and with green color. I am here to give you all advice about your calm and inner satidsfaction.
      becase in today's world a person is depressed becaudse he haave every thing but not the peace and this  is tht thing you can'yt buy
      from shop and not from money. it's depends on your mind state how you think and what reason you give to yourself for handling 
      a situation. <abbr>THis is my Website</abbr>
      </p>
      </div>
      <div>
      	<ul>
  			<li>Coffee</li>
  			<li>Tea</li>
 			 <li>Coca Cola</li>
	    </ul>
      </div>
      </div>
    );
  }
}

export default Header;