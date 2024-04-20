import React, { useContext, useState } from 'react'
import Address from '../components/Address/Address'
import { GoArrowSwitch } from "react-icons/go";
import Select from '../components/Select/Select';
import BtnInput from '../components/BtnInput/BtnInput';
import Radio from '../components/Radio/Radio';
import classes from './Home.module.css'
import { Link } from 'react-router-dom';
import StatesContext from '../store/StatesContext';

const Home = () => {

    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    const [radio,setRadio] = useState(0)
    const ctx = useContext(StatesContext)

    const addressData = [
        {
            label: 'Depart From',
            cityName: ctx?.data?.from?.cityName ?? 'New Delhi',
            cls: 'left',
            initialKey: 'from'

        },
        {
            label: 'Going To',
            cityName: ctx?.data?.destination?.cityName ?? 'Mumbai',
            cls: 'right',
            initialKey: 'destination'
        }
    ]

    const btnInputData = [
        {
            label: 'Adult',
            setterValue: adult,
            setterFunc: setAdult,
            id: 'adult'
        },
        {
            label: 'Child(2-12 Yrs)',
            setterValue: child,
            setterFunc: setChild,
            id: 'child'
        },
        {
            label: 'Infant(Below 2 Yrs)',
            setterValue: infant,
            setterFunc: setInfant,
            id: 'infant'
        },
    ]

    const radioBtnsData = [
        {
            label: 'Economy',
            id: 'economy',
            name: 'class',
            value:0
        },
        {
            label: 'Premium Economy',
            id: 'prenium_economy',
            name: 'class',
            value:1
        },
        {
            label: 'Business',
            id: 'business',
            name: 'class',
            value:2
        },
    ]

    return (
        <section className={'section'}>
            <div className={'form'}>
                <h1 className={classes.heading}>Home</h1>
                <Link to={'/countries'} className={classes.divided}>
                    <Address {...addressData[0]} />
                    <button className={classes.switch_btn}><GoArrowSwitch /></button>
                    <Address  {...addressData[1]} />
                </Link>

                <Select />

                <div className={classes.grid_container}>
                    {btnInputData.map(element => (
                        <BtnInput {...element} key={element.id} />
                    ))}
                </div>

                <div className={classes.flex_container}>
                    {radioBtnsData.map(element => (
                        <Radio {...element} key={element.id} />
                    ))}
                </div>

                <button  onClick={()=>alert('form submitted!')} className={classes.checkout}>Submit</button>
            </div>
        </section>
    )
}

export default Home