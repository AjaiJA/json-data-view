import React from 'react';
import Main from './components/Main';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Typography} from '@material-ui/core';

let data={
  head:"Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, &amp; More",
  course:"Multi-Day Course",
  description:"In this 5 day class we will explore artists Monet,Matisse, Van Gogh. among others and then recreate paintings using crayon and Watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.",
  completedLearners:21,
  totalReviews:467,
  classReviews:5,
  author:"Kimberly R Moseler"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:"48px"}}>{data.head}</h1>
        <Typography style={{color:"grey"}}>{data.course} <HelpOutlineIcon /></Typography>
      </header><br/><br/>
      <section>
        <Main data={data}/>
      </section>
    </div>
  );
}

export default App;
