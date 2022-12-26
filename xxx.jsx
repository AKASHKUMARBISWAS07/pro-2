import React from "react";
import More from "./more";
import More1 from "./more1";
import Last from "./last";
import '../app.css'
import '../index.css'

const Xxx = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="inl st655">
          <More /> <More /> <More />
          <More />
          <More />
          <hr />
          <br />
          <br />
          <div className="picb">
            <span className="btxt ttp">
              <h1> </h1>
              <h2> </h2>
            </span>
          </div>
        </div>
        <div className="inl fff1">
          <div className="ad">
            <span className="vrt">Advertisement</span>
          </div>
          <br />
          <br />
          <h2>Top Posts</h2>
          <div className="blne"></div> <br />
          <div className="img11"></div>
          <br></br>
          <h3>Sania Mirza of U.P. on the flight path to be India’s first Muslim woman fighter pilot</h3>
        Sania Mirza on path to history as she could become India’s first Muslim woman fighter pilot if she successfully completes all required courses.
          <div>
            <h3> </h3>
            {" "}
          </div>
          <More1 />
          <More1 />
          <hr />
        </div>
      </div>
      <h2>The Latest</h2>
      <div className="blne"></div>
      <hr />
      <br />
      <div className="d-flex justify-content-around svs">
        <Last /><br/><br/>
        <Last /><br/><br/>
        <Last />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </>
  );
};

export default Xxx;