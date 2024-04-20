import React, { useEffect, useState } from 'react'
import classes from './Countries.module.css'
import Address from '../components/Address/Address'
import { GoArrowSwitch } from 'react-icons/go'
import Card from '../components/Card/Card'

import data from './airports.json'

const Counries = () => {


    const [filteredArray, setFilteredArray] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [loading, setLoading] = useState(false)

    const core_inital_values = {
        0:'from',
        1:'destination'
    }

    const [initial,setInitial] = useState(0)

    const addressData = [
        {
            label: 'Depart From',
            setterFunc: setSearchKey,
            initialSetter:setInitial,
            initialKey:0

        },
        {
            label: 'Going To',
            setterFunc: setSearchKey,
            initialSetter:setInitial,
            initialKey:1
        }
    ]

    function  filterByCityName(array, cityName) {
        return array.filter(obj => obj.cityName.includes(cityName));
    }

    useEffect(()=>{
        let arr = filterByCityName(data,searchKey)
        setFilteredArray(arr)
    },[searchKey])


    useEffect(()=>{
        console.log('clicked')
        if (searchKey) {
            setSearchKey('')
        }
    },[initial])

    return (
        <section className={classes.section}>
            <h1>Screen 2</h1>
            <div className={classes.divided}>
                <Address  {...addressData[0]} input={true} />
                <button className={classes.switch_btn}><GoArrowSwitch /></button>
                <Address {...addressData[1]} input={true} />
            </div>

            <div className={classes.data_container}>
                {filteredArray.map((element, index) => (
                    <Card inital={core_inital_values[initial]} data={element} key={element.index} />
                ))}
            </div>

        </section>
    )
}

export default Counries