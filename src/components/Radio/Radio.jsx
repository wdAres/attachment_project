import React from 'react'
import classes from './Radio.module.css';

const Radio = ({cls,label,id,setterFuc,value,name}) => {

  return (
    <div className={`${classes.container} ${cls && cls}`}>
        <input onChange={()=>setterFuc(e.target.value)} value={value} className={classes.radio} type="radio" name={name} id={id} />
        <label className={classes.label} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio