import React, { useState } from 'react'
import classes from './Address.module.css'

const Address = ({ label, cityName, cityCode, input, placeholder, cls , setterFunc,initialSetter,initialKey }) => {

    const [ket,setKey] = useState('')

    const inputHandler = e => {
        setterFunc(e.target.value)
        setKey(e.target.value)
    }

    const handleClick = () => {
        initialSetter(initialKey)
    }


    return (
        <div onClick={handleClick} className={`${classes.card} ${cls}`}>
            <p className={classes.label}>{label}</p>
            {input ? <input onChange={inputHandler} type={placeholder} className={classes.input} /> :
                <>
                    <h3 className={classes.heading}>{cityName}</h3>
                    <h6 className={classes.sub_heading}>{cityCode}</h6>
                </>
            }
        </div>
    )
}

export default Address