import React, { useContext, useEffect, useState } from 'react'
import classes from './Address.module.css'
import StatesContext from '../../store/StatesContext'

const Address = ({ label, cityName, cityCode, input, placeholder, cls, setterFunc, initialSetter, initialKey, activeCls }) => {

    const ctx = useContext(StatesContext)
    const [key, setKey] = useState('')

    const inputHandler = e => {
        setterFunc(e.target.value)
        setKey(e.target.value)
    }

    const handleClick = () => {
        initialSetter(initialKey)
    }

    useEffect(() => {
        setKey(ctx?.data[initialKey]?.cityName)
    }, [ctx])

    return (
        <div onClick={handleClick} className={`${classes.card} ${cls} ${activeCls}`}>
            <p className={classes.label}>{label}</p>


            {input ? <input value={key} placeholder='Type City Name...' onChange={inputHandler} type={placeholder} className={classes.input} /> :
                <>
                    <h3 className={classes.heading}>{ctx?.data[initialKey]?.cityName}</h3>
                </>
            }
            {
                ctx?.data[initialKey] &&
                <>
                    <h6 className={classes.sub_heading}>{ctx?.data[initialKey]?.cityCode}</h6>
                </>
            }
        </div>
    )
}

export default Address