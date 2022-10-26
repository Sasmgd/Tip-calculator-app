import React, { useContext } from 'react'
import Button from './Button.js';
import './componet.css'
export default function SelectTIp(props) {

    function click1() {
        document.querySelectorAll('.btnprocent').forEach((btn) => {
            btn.removeAttribute('id')
        })
    }
    return (
        <div className='selectTip'>
            <p id='p11'>Select Tip %</p>
            <div className='btncontainer'>
                <Button num='5' setPersent={props.setPersent} click={props.click} setVisable={props.setVisable} />
                <Button num='10' setPersent={props.setPersent} click={props.click} setVisable={props.setVisable} />
                <Button num='15' setPersent={props.setPersent} click={props.click} setVisable={props.setVisable} />
                <Button num='25' setPersent={props.setPersent} click={props.click} setVisable={props.setVisable} />
                <Button num='50' setPersent={props.setPersent} click={props.click} setVisable={props.setVisable} />
                <input type="number" min="0" className='customInput' onChange={(event) => { props.setPercentinput(event.target.value) }} onClick={(event) => { click1(); props.setVisable(true); }} value={props.percentinput} placeholder='Custom' />
            </div>
        </div>
    )
}

