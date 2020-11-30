import React from 'react'

import './tragetory.css'

import {BsArrowReturnRight} from 'react-icons/bs'
import {TiArrowForwardOutline} from 'react-icons/ti'

import codeImg from '../../../images/codeImg.svg'
import coding from '../../../images/coding.svg'

export default function Tragetory() {
    return (
        <div className="history">
            <h1 className="h1edit">Um pouco da minha tragetória na Programação</h1>
            <div className="tragetory">
                <div className="paragraphs">
                    <div className="paragraph classResponsive">
                        <img src={codeImg} alt=""/>
                        <p>
                            <BsArrowReturnRight /> No inicio de 2020 eu comecei a ver alguns pequenos vídeos sobre 
                            <span className="colorEdit"> programação</span> e com o passar dos dias, eu decidi começar a fazer alguma coisa para entender como funcionava na prática o que vinha assistindo.
                        </p>
                    </div>
                    <div className="paragraph">
                        <p><BsArrowReturnRight /> Um pouco depois, em março iniciei meus primeiros códicos, que por sinal foram em <span className="colorEdit">Python</span> quando comecei ver aulas do Curso em Video lá no Youtube. Para mim foi perfeito, era algo novo e passei a práticar.</p>
                    </div>
                    <div className="paragraph">
                        <p>
                            <BsArrowReturnRight /> Algumas semanas depois iniciei em <span className="colorEdit">JavaScript</span>. É, pode parecer pouco tempo, mas utilizei o Python só para uma base na Lógica da programação. Não demorou muito, eu passei a aprender e dominar o <span className="colorEdit">Html e Css</span>.
                        </p>
                        <TiArrowForwardOutline className="arrow"/>
                    </div>
                </div>
                <div className="paragraphs">
                    <img src={coding} alt="" className="img"/>
                    <div className="paragraph">
                        <p>
                            <BsArrowReturnRight />Passei por alguns eventos da Rocketseat e achei incrível, um tempo depois iniciei o <span className="colorEdit">LauchBase</span> deles que até hoje faço, então venho me especializando cada dia mais, aprendendo coisas novas e melhorando no que é útil e eficiente para um programador.
                        </p>

                    </div>
                    <div className="paragraph">
                        <p>
                            <BsArrowReturnRight /> Por fim, atualmente eu estou iniciando no <span className="colorEdit">React Js</span>, e como já disse, participei de alguns eventos e um teve <span className="colorEdit">React Native</span>, e eu curti muito, mas não é algo que vou focar 100% agora, pois acredito que é bom entender um pouco mais do React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}