import React from 'react'
import './componet.css'
import Dolar from './image/dolar.svg'
import './responsive.css'
export default function Bill(props) {

    return (
        <div className='bill'>
            <p>Bill</p>
            <input type="number" min="0" placeholder='0' onChange={(event) => { props.setBill(event.target.value) }} value={props.Bill} />
            <img src={Dolar} />
        </div>
    )
}
