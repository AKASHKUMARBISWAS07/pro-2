import React from 'react'
import '../index.css'
import '../app.css'
import {Link} from 'react-router-dom'

export default function Latest() {
return (
    <Link to='/openview' style={{textDecoration:"none",color:"black"}}>
    <div className='latest'>
        <div className='picl'></div>
        <br/>
        <div className='pad'>
            <h4>PM Modi Pays Tributes To Guru Gobind Singh's Sons</h4>
            <h4>The day they died is is observed as 'Veer Baal Diwas'.</h4>
            <span className='font-weight-light small'>On Veer Baal Diwas, we recall the courage of the Sahibzades and Mata Gujri Ji. We also remember the courage of Sri Guru Gobind Singh Ji.At 12:30 PM today, will be joining a programme to mark this inspiring day</span>
        </div>
    </div></Link>
)
}