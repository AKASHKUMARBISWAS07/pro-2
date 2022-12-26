import React from 'react'
import '../app.css'
import '../index.css'
import Latest from '../components/latest'
import clap from '../img/clap.png'
import share from '../img/share.png'
import img11 from '../img/11.jpg'
import dp1 from '../img/dpimg.png'
import Dpblck from '../components/dpblck'

export default function Openview() {
return (
    <>
    <div className='hde'><br/>
    <span className='lft'>
    <p className='rtt'>The</p>
        <span className='fs-1'>KNOWLEDGE</span>
    </span>
    <button className='clk'>More</button>
    </div>
    <div className='mrg d-flex flex-row'>
        <div className='offf'  style={{width:"200%"}} >
            <span className="cp"><img src={clap} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.6k
            <br/><br/><img src={share} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share</span>
        </div>  
        <div>  
        <br/><br/>
        <h1 style={{color:"black"}}>Veer Baal Diwas – A tribute to the 10th Sikh Guru Gobind Singh’s four sons who were executed by the Mughals</h1><br/>
        <div className='icc'></div>
        <br/><br/>
        <div className='bgt'><b>Who were the Char Sahibzades?</b><br></br>
        The four Sahibzade Khalsa warrior princes were the sons of Guru Gobind Singh ji.
        Guru Gobind Singh ji had four sons – Sahibzada Ajit Singh, Sahibzada Jujhar Singh, Sahibzada Zorawar Singh and Sahibzada Fateh Singh. All four of his sons were initiated into the Khalsa and all were executed by Mughal forces before the age of 19. Sikhism honors the illustrious martyred sons of Guru Gobind Singh ji in the prayer of ardas for their valor and sacrifice as ‘Char Sahibzade’, that is   the four princes of the Khalsa warrior order.
        Ajit Singh was martyred at the age of 18, on December 7, 1705 CE at Chamkaur after he volunteered to leave the besieged fortress and face the enemy on the battlefield. Jujhar Singh was martyred at the age of 14, on December 7, 1705 CE at Chamkaur where he earned the reputation of being likened to a crocodile for his fierceness in battle, when he volunteered to leave the besieged fortress with five of the last Singhs standing, and all achieved immortality on the battlefield.</div>

        <br/><br/>
        <img className='nmn' src={img11} alt=""/><br/><br/><hr/>
        <p>Zorawar Singh and his younger brother Fateh Singh were captured with their grandmother Mata Gujari, the mother of Guru Gobind Singh. They were imprisoned with their grandmother and put to death by cruel Mughals on the orders of Aurangzeb, who attempted to suffocate them ​inside a brick enclosure. At the time of martyrdom, the ages of Zorawar Singh and Fateh Singh were 9 years and 6 years respectively. This sacrifice is seen as the bravest sacrifice for Dharma by any young boys in the Indian history.
        Guru Gobind Singh was also killed by a Mughal assassin in 1708, a year after the death of Aurangzeb.</p>
        <div className='grid-container'>
        <div>
        <img className='dp' src={dp1} alt=""/>
        </div>
        <div>
            <span className='hhh'>
            <b>Knowledge makes you great</b><br/>
            <span>Thinking leads to knowledge.</span></span>
        </div>
        </div>

        
    </div>
    </div><br /><br/><hr></hr><br/><br/>
    <div className='d-flex justify-content-between bggg gfh '>
    <Latest /><Latest /><Latest />
    </div><br />
    <div id='bch11'>
    <div className='d-flex justify-content-between bggg' id='bch'>
        <Dpblck/><Dpblck/>
    </div></div><br /><br/><br/>
    </>
)
}