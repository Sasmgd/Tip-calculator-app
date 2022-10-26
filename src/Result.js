import React, { useEffect } from 'react'
import './componet.css'
export default function Result(props) {
    function click1(event) {
        document.querySelectorAll('.resetbtn').forEach((btn) => {
            btn.removeAttribute('id')
        })
    }
    useEffect(() => {
        if (props.resetactive) {
            document.querySelector('.resetbtn').setAttribute('id', 'rstbtn')
        } else {
            document.querySelector('.resetbtn').removeAttribute('id')
        }
    })
    return (
        <div className='result'>
            <div className='results'>
                <div className='result_top'>
                    <div className='result_top_left'>
                        <p className='amout'>Amout</p>
                        <p className='person'>/person</p>
                    </div>
                    <div className='result_top_right'>
                        {Math.round(100*Number(props.resulta))/100}
                    </div>
                </div>
                <div className='result_buttom'>
                    <div className='result_buttom_left'>
                        <p className='total'>Total</p>
                        <p className='person'>/person</p>
                    </div>
                    <div className='result_butom_right'>
                        {Math.round(100*Number(props.resultt))/100}
                    </div>
                </div>
                <button className='resetbtn' onClick={() => { props.setBill('0.00'); props.setPerson(''); props.setResulta('0.00'); props.setResultt('0.00'); props.setPersent(''); props.setPercentinput(''); props.setResetactive(true); click1() }}>RESET</button>
            </div>
        </div>

    )
}
