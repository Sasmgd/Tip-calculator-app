import React from 'react'
import Cunrbezero from './Conrbezero'
import persimg from './image/person.svg'
import './componet.css'
import './responsive.css'
export default function NumberOfPeople(props) {
    return (
        <div className='people'>
            <p className='leftp'>Number of People</p>
            <input className='input' min="0" type="number" placeholder='0' onClick={() => { props.setVisable(true); }} onChange={(event) => { props.setPerson(event.target.value) }} value={props.person} />
            <div><img src={persimg} alt="personlogo" /></div>
        </div>
    )
}
