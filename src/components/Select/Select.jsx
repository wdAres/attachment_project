import React, { useState } from 'react'
import { BsChevronUp } from "react-icons/bs";


const Select = ({setterFunc}) => {

    const [focused, setFocused] = useState(false)
    const changeHandler = e => setterFunc(e.target.value)

    return (
        <form>
            <label htmlFor="select_class">taraveller(s) class</label>
            <select onChange={changeHandler} id="select_class">
                <option value="1_traveler_economy">1 Traveler, Economy</option>
                <option value="1_traveler_economy">1 Traveler, Economy</option>
                <option value="1_traveler_economy">1 Traveler, Economy</option>
            </select>
            <BsChevronUp />
        </form>
    )
}

export default Select