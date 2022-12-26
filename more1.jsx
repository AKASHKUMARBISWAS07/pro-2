import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom';

export default function More1() {
return (
    <>
    <hr />
    <br />
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='d-flex align-items-center'>
        <div className='picl11 pdd1'></div>
        <div className='pdd1'>
            <h6>PM Modi Pays Tributes To Guru Gobind Singh's Sons</h6>
            <span className='font-weight-light' style={{fontSize:"10px"}}>
            Veer Baal Diwas – A tribute to the 10th Sikh Guru Gobind Singh’s four sons who were executed by the Mughals
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-7'>Indian Express</footer>
        </div>
    </div></Link>
    <br />
    </>
)
}