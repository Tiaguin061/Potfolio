import React from 'react'

// icons 
import  { AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function MediaMap() {
    const valuesMedias = [
        {
            classNames: 'icons card insta',
            href:"https://instagram.com/tg001_xx",
            icon: <FiInstagram />,
            name: 'Instagram',
            backgroundIcon: '#833AB4',
            borderBottom: '1px solid #833AB4'
        },
        {
            classNames: 'icons card linkedin',
            href: 'https://www.linkedin.com/in/tiagogoncalves200428/',
            icon: <AiFillLinkedin />,
            name: 'Linkedin',
            backgroundIcon: '#0a66c2',
            borderBottom: '1px solid #0a66c2'
        },
        {
            classNames: 'icons card gmail',
            icon: <SiGmail />,
            name: 'Gmail',
            nameTwo: 'tiaguin180@gmail.com',
            backgroundIcon: '#d93025',
            borderBottom: '1px solid #d93025',
            cursor: 'default'
        },
        {
            classNames: 'icons card discord',
            icon: <FaDiscord />,
            name: 'Discord',
            nameTwo: 'Tiaguin061#2748',
            backgroundIcon: '#7289da',
            borderBottom: '1px solid #7289da',
            cursor: 'default'
        },
    ]

    const values = valuesMedias.map((value, index) => {
        return (
            <div 
                key={index}
                className={value.classNames} 
                style={{borderBottom: `${value.borderBottom}`, cursor: value.cursor}}>
                <a href={value.href} target="_blank">
                    <i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
                    <h1>{value.name}</h1>
                    <h1 className="nameTwo">{value.nameTwo}</h1>
                </a>
            </div>
        )
    })
    return values
}