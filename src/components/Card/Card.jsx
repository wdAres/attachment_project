import React, { useContext } from 'react'
import classes from './Card.module.css'
import StatesContext from '../../store/StatesContext'
// import StatesContext from '../../store/StatesContext'

const Card = ({ data, initial }) => {

  const ctx = useContext(StatesContext)

  const clickHandler = () => {
    
    console.log(initial);
    
    ctx.updateData({
      [initial]: {
        ...data
      }
    })
  }

  return (
    <div className={classes.card} onClick={clickHandler}>
      <div className={classes.left}>
        <div className={classes.flex}>
          <h3>{data?.cityName}</h3>
          <span>{data?.cityCode}</span>
        </div>
        <p>{data?.airportName}</p>
      </div>
      <h6>{data?.countryName}</h6>
    </div>
  )
}

export default Card