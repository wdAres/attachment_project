import React, { useState } from 'react'
import { BsChevronUp } from "react-icons/bs";
import classes from './Select.module.css'

const Select = ({setterFunc}) => {

    const [focused, setFocused] = useState(false)
    const changeHandler = e => setterFunc(e.target.value)

    return (
        <form className={classes.container}>
            <label className={classes.label} htmlFor="select_class">taraveller(s) class</label>
            <select className={classes.select} onChange={changeHandler} id="select_class">
                <option value="1_traveler_economy">1 Traveler, Economy</option>
                <option value="_traveler_economy">5 Traveler, Economy</option>
                <option value="1_traveler_economy">10 Traveler, Economy</option>
            </select>
            <BsChevronUp className={classes.icon} />
        </form>
    )
}

export default Select