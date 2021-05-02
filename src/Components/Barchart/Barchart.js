import React from 'react';
import './Barchart.css'
const Barchart = () => {
    return (
        <div className="barChart">
        <div className="skills">

<div className="charts">
<div className="chart chart--dev">
  <span className="chart__title">Development</span>
  <div className="chart--horiz">
   <div className="fill">
   <p className="chart__bar" style={{width: "90%"}}>
      <div className="chart__label">
        HTML5
        <span style={{marginLeft:"90%"}}>90%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: '80%'}}>
    <div className="chart__label">
        CSS3
        <span style={{marginLeft:"94%"}}>80%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: '70%'}}>
    <div className="chart__label">
        JAVASCRIPT
        <span style={{marginLeft:"87%"}}>70%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: "70%"}}>
    <div className="chart__label">
        REACT
        <span style={{marginLeft:"94%"}}>70%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: '25%'}}>
    <div className="chart__label">
        Express
        <span style={{marginLeft:"63%"}}>25%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: "60%"}}>
    <div className="chart__label">
       NODEJS
        <span style={{marginLeft:"90%"}}>60%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: "70%"}}>
      <div className="chart__label">
        MONGODB
        <span style={{marginLeft:"87%"}}>70%</span>
      </div>
    </p>
   </div>
   <div className="fill">
   <p className="chart__bar" style={{width: '20%'}}>
      <div className="chart__label">
        SASS
        <span style={{marginLeft:"90%"}}>20%</span>
      </div>
    </p>
   </div>
    <div className="fill">
    <p className="chart__bar" style={{width: '40%'}}>
      <div className="chart__label">
        PHOTOSHOP
        <span style={{marginLeft:"75%"}}>40%</span>
      </div>
    </p>
    </div>
    <div className="fill">
    <p className="chart__bar" style={{width: '55%'}}>
      <div className="chart__label">
        ILLUSTRATOR
        <span style={{marginLeft:"70%"}}>55%</span>
      </div>
    </p>
    </div>
  </div>
</div>
</div>
</div>
    </div>

    );
};

export default Barchart;