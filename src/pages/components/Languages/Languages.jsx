import React from 'react'
import { LanguagesDomination, LanguagesLearning} from './LangsMap'

export default function Langs() {
    return (
    <div className="languagesProgramation">
        <div className="cardsDomination">
            <h1 className="h1editLanguages">O que eu domino</h1>
            <div className="cards">
                < LanguagesDomination />
            </div>
        </div>
        <div className="cardsLearning">
            <h1 className="h1editLanguages">O que estou aprendendo</h1>
            <div className="cards">
                <LanguagesLearning />
            </div>
        </div>
    </div>
    )
}