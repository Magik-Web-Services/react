import React from 'react'
import AyurvedicConsulationCard from './Extra/AyurvedicConsulationCard'

const AyurvedicConsulation = () => {
    return (
        <section className="bg-[rgba(242,242,242,1);] pt-1 pb-10">
            <h2 className='text-3xl text-center font-bold mt-10 text-[#0393dd]'>ONLINE AYURVEDIC CONSULTATION</h2>
            <div className="container mx-auto flex pt-5 flex-row gap-x-[30px] items-center">

                <AyurvedicConsulationCard heading="BEDWETTING TREATMENT" para="Bedwetting or Nocturnal Enuresis is a common pre-adolescent problem until the age of six but things can take a serious turn after that." />
                <AyurvedicConsulationCard heading="PREMATURE EJACULATION" para="Premature ejaculation occurs when a man ejaculates quicker than his or his partner’s expectation. It is one of the common sex-related issues and impacts one out of every three men at some point." />
                <AyurvedicConsulationCard heading="ERECTILE DYSFUNCTION" para="Erectile dysfunction is a man’s inability to gain and retain an erection, sufficient enough for penetrative sex. Often simply known ED, It affects millions of men around." />
                <AyurvedicConsulationCard heading="INFERTILITY" para="Infertility is a couple’s inability to have a baby. If you and your partner have been unable to conceive, despite trying for a year or more, it is essential to seek medical help." />
            </div>
        </section>
    )
}

export default AyurvedicConsulation
