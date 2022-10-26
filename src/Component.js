import React, { useEffect } from 'react'
import Bill from './Bill'
import { useState } from 'react'
import SelectTIp from './SelectTip'
import Conrbezero from './Conrbezero'
import './componet.css'
import './responsive.css'
import NumberOfPeople from './NumberOfPeople'
import Result from './Result'
export default function Component() {
    const [bill, setBill] = useState('')
    const [persent, setPersent] = useState('')
    const [visable, setVisable] = useState('')
    const [percentinput, setPercentinput] = useState('');
    const [person, setPerson] = useState('')
    const [resulta, setResulta] = useState('0.00')
    const [resultt, setResultt] = useState('0.00')
    const [resetactive, setResetactive] = useState('')
    function click(event) {
        document.querySelectorAll('.btnprocent').forEach((btn) => {
            btn.removeAttribute('id')
        })
        event.target.id = 'backactive'
    }
    useEffect(() => {
        if (bill > 0 && (persent > 0 || percentinput > 0) && person > 0) {
            setResulta((bill * persent) / (person * 100))
            if (persent == '') {
                setResulta((bill * percentinput) / (person * 100))
            }
            setResultt((bill / person) + resulta)
            setResetactive(false);

        }
    })
    return (
        <div className='component'>
            <div className='component_left'>
                {(bill == '' && visable) && <div className='cuntbezero1'>
                    <Conrbezero /></div>}
                <Bill bill={bill} setBill={setBill} />
                {((persent == '' && percentinput == '') && visable) && <div className='cuntbezero1'>
                    <Conrbezero />
                </div>}
                <SelectTIp persnt={persent} setPersent={setPersent} click={click} setVisable={setVisable} setPercentinput={setPercentinput} />
                {(person == '' && visable) && <div className='cuntbezero1'>
                    <Conrbezero /></div>}
                <NumberOfPeople person={person} setPerson={setPerson} setVisable={setVisable} />
            </div>
            <div className='component_right'>
                <Result resetactive={resetactive}
                    setPerson={setPerson} setPersent={setPersent} setPercentinput={setPercentinput} setBill={setBill} setResetactive={setResetactive} resulta={resulta} setResulta={setResulta} resultt={resultt} setResultt={setResultt} />
            </div>
        </div>
    )
}
