import React from 'react'
import './componet.css'
export default function Button(props) {

    return (
        <button className='btnprocent' onClick={(event) => { props.setPersent(Number(props.num)); props.click(event); props.setVisable(true) }}>{props.num}%</button>

    )
}