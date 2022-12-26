import React from 'react';
import Header from '../components/header';
import '../index.css';
import Latest from '../components/latest';
import More from '../components/more';
import '../app.css'
import More1 from '../components/more1';
import Last from '../components/last';

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex1'>
      <div className='cont1'>
        <span className='imgtxt1 hhd'>Fewer polluted river stretches but worst stretches unchanged</span>
        <h4 className='line'>The CPCB network monitors water quality at 4,484 locations in 28 States and seven Union Territories including rivers, lakes, creeks, drains and canals.</h4>
      </div>
      <div className='cont2'>
        <div className='cont3'>
        <span className='imgtxt2 hhd1'>What are ‘dark patterns’ in the Internet ?</span>
        <h6 className='line1'>Advertising Standards Council of India (ASCI), a self-regulatory body of the advertising industry, on Thursday said it wants to expand its code to address concerns around ’dark patterns’ in digital advertising, where consumers are manipulated into making choices that are detrimental to their interest.</h6>
        </div>
        <div className='cont4'>
        <span className='imgtxt3 hhd2'><b>Afghan Women, Girls Protest in Kabul for Right to Education</b></span>
        </div>
      </div>
    </div>
    <br /><br />
    <h2>The Latest</h2>
    <div className='blne'></div> <br />
    <div className='d-flex justify-content-between ss1'>
      <Latest /><Latest /><Latest />
    </div><br /><br />
    <h2>Latest Articles</h2>
    <div className='blne'></div> <br />
    <div className='d-flex justify-content-between'>
    <div className='inl st65' >
    <More /> <More /> <More /><More /><More /><hr />
    <br /><br />
    <div className='picb'>
        <span className='btxt ttp'>
        </span>
    </div>
    </div>
    <div className='inl' id='fff' >
      <div className='ad'>
        <span className='vrt'>Advertisement</span>
      </div>
      <br /><br/>
      <h2>Top Posts</h2>
      <div className='blne'></div> <br />
      <div className='img11'></div>
      <div>
        <br/>
        <h3>Sania Mirza of U.P. on the flight path to be India’s first Muslim woman fighter pilot</h3>
        Sania Mirza on path to history as she could become India’s first Muslim woman fighter pilot if she successfully completes all required courses.
        <br />
      </div>
      <More1 /><More1 /><br/><hr/>
    </div>
    </div>
    <h2>Latest NEWS</h2>
    <div className='blne'></div>
    <hr/><br/>
    <div className='d-flex justify-content-around'>
        <Last/><Last/><Last/>
    </div><br/><br/><hr/>
    <br /><br />
    </>
  )
}