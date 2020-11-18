import React from 'react'
import {DiHtml5, DiCss3, DiNodejsSmall, DiJavascript1, DiReact, DiPostgresql} from 'react-icons/di'

export function LanguagesDomination() {
    const valuesDomination = [
        {
            classNames: 'card js',
            icon: <DiJavascript1 />,
            name: 'Javascript',
            backgroundIcon: '#f6da3a',
            borderBottom: '1px solid #f6da3a'
        },
        {
            classNames: 'card node',
            icon: <DiNodejsSmall />,
            name: 'Node Js',
            backgroundIcon: '#8cc84b',
            borderBottom: '1px solid #8cc84b'
        },
        {
            classNames: 'card html',
            icon: <DiHtml5 />,
            name: 'Html 5',
            backgroundIcon: '#e34f26',
            borderBottom: '1px solid #e34f26'
        },
        {
            classNames: 'card css',
            icon: <DiCss3 />,
            name: 'Css 3',
            backgroundIcon: '#2965f1',
            borderBottom: '1px solid #2965f1'
        },
        {
            classNames: 'card postgres',
            icon: <DiPostgresql />,
            name: 'PostgresSQL',
            backgroundIcon: '#336791',
            borderBottom: '1px solid #336791'
        },
    ]

    const values = valuesDomination.map((value, index) => {
        return (
            <div 
                key={index}
                className= {value.classNames} 
                style={{borderBottom: `${value.borderBottom}`}}>
                <i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
                <h1>{value.name}</h1>
            </div>
        )
    })

    return values
}

export function LanguagesLearning() {
    const valuesLearning = [
        {
            classNames: 'card react',
            icon: <DiReact />,
            name: 'React Js',
            backgroundIcon: '#2ac7e3',
            borderBottom: '1px solid #2ac7e3'
        },
        {
            classNames: 'card rn',
            icon: <DiReact />,
            name: 'React Native',
            backgroundIcon: '#5667f9',
            borderBottom: '1px solid #5667f9'
        }
    ]

    const values = valuesLearning.map((value, index) => {
        return (
            <div 
                key={index}
                className= {value.classNames} 
                style={{borderBottom: `${value.borderBottom}`}}>
                <i style={{background: `${value.backgroundIcon}`}}>{value.icon}</i>
                <h1>{value.name}</h1>
            </div>
        )
    })

    return values
}