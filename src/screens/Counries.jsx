import React, { useEffect, useState } from 'react'
import classes from './Countries.module.css'
import Address from '../components/Address/Address'
import { GoArrowSwitch } from 'react-icons/go'
import Card from '../components/Card/Card'

import data from './airports.json'
import { useNavigate } from 'react-router-dom'

const Counries = () => {


    const [filteredArray, setFilteredArray] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const navigate = useNavigate()
    const [initial, setInitial] = useState('from')

    const addressData = [
        {
            label: 'Depart From',
            setterFunc: setSearchKey,
            initialSetter: setInitial,
            initialKey: 'from',
            cls: 'left'
        },
        {
            label: 'Going To',
            setterFunc: setSearchKey,
            initialSetter: setInitial,
            initialKey: 'destination',
            cls: 'right'
        }
    ]

    function filterByCityName(array, cityName) {
        return array.filter(obj => obj.cityName.toLowerCase().includes(cityName));
    }

    useEffect(() => {
        let arr = filterByCityName(data, searchKey)
        setFilteredArray(arr)
    }, [searchKey])


    useEffect(() => {
        if (searchKey) {
            setSearchKey('')
        }
    }, [initial])

    

    return (
        <section className={'section'}>
            <div className={'form'}>
                <h1>Select City</h1>
                <div className={classes.divided}>
                    <Address activeCls={initial == 'from' ? classes.active : ''}  {...addressData[0]} input={true} />
                    <Address activeCls={initial == 'destination' ? classes.active : ''}  {...addressData[1]} input={true} />
                </div>

                <div className={classes.data_container}>
                    {filteredArray.map((element, index) => (
                        <Card initial={initial} data={element} key={element.index} />
                    ))}
                </div>

                <button onClick={()=>navigate('/')} className={classes.checkout}>Checkout</button>
            </div>

        </section>
    )
}

export default Counries