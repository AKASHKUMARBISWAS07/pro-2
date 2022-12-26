import React from 'react'
import '../app.css';
import {Link} from 'react-router-dom';

export default function More() {
return (
    <>
    <hr />
    <br />
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='d-flex align-items-center bst'>
        <div className='picl1 pdd'></div>
        <div className='pdd'>
            <h5>How the Indian rupee is going global and drawing interest from more nations</h5>
            <h5>Indian Rupee is going Global</h5>
            <span className='font-weight-light fs-6'>
            India's rupee trade settlement mechanism, which was set up by the Reserve Bank of India in July 2022, is attracting interest from more countries apart from Russia.
            </span><br /><br /><br />
            <footer className='blockquote-footer mb-0 mr-0 fs-5'>The Hindu Newspaper</footer>
        </div>
    </div></Link>
    <br />
    
    </>
)
}