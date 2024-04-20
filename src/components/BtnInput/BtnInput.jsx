import React from 'react'
import classes from './BtnInput.module.css';
import { FaMinus, FaPlus } from "react-icons/fa";


const BtnInput = ({ label, id, setterFunc, setterValue }) => {

    const incrementHandler = () => {

        console.log(setterValue)
        if (setterValue >= 0 && setterValue < 10) {
            setterFunc(prev => prev + 1)
        }
    }
    const decrementHandler = () => {
        if (setterValue <= 10 && setterValue > 0) {
            setterFunc(prev => prev - 1)
        }
    }

    return (
        <div className={classes.container}>
            <label className={classes.label} htmlFor={id}>{label}</label>
            <div className={classes.input_container}>
                <button className={classes.btn} onClick={decrementHandler}><FaMinus /></button>
                <input value={Number(setterValue)} className={classes.input} type="number" min={0} max={9} />
                <button className={classes.btn} onClick={incrementHandler}><FaPlus /></button>
            </div>
        </div>
    )
}

export default BtnInput