import React from 'react'
import classes from './Radio.module.css';

const Radio = ({cls,label,id,setterFuc,setterValue,name}) => {
  return (
    <div className={`${classes.container} ${cls && cls}`}>
        <input className={classes.radio} type="radio" name={name} id={id} />
        <label className={classes.label} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio