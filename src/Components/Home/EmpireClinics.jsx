import React, { useEffect, useState } from 'react'
import axios from 'axios';

const EmpireClinics = () => {
    const [aboutImg, setAboutImg] = useState('https://dummyimage.com/720x600');

    useEffect(() => {
        // axios fetch image
        const url4 = `${process.env.REACT_APP_URL}media?search=2020/10/home_sec`;
        axios.get(url4).then(res => {
            let imgs = res.data[0].source_url;
            setAboutImg(imgs)
        })
    }, [])

    return (
        <>
            <section className="body-font">
                <h2 className='text-3xl text-center font-bold mt-10 text-[#0393dd]'>ABOUT EMPIRE CLINICS</h2>
                <div className="container mx-auto flex pt-5 flex-row gap-x-20 items-center">
                    <div className="flex-grow md:w-1/2 flex flex-col md:items-start items-center text-center w-[50%]">
                        <p className="mb-8 leading-relaxed text-left">
                            Empire Clinics is formed by the best <a href="/" className="text-blue-600"> ayurvedic sexologists in Ambala </a>, Haryana, India. With our years of professional experience as sexologists, we have cured more than 22000 men and women suffering from various sexual problems. <br />
                            Under the constant guidance of Dr. Satinder Singh, we are a team of doctors dedicated to offering the world-class ayurvedic treatments to patients suffering from various sexual disorders. We boast on our effective medication and history of curing many men of different ages suffering from serious issues such as Erectile Dysfunction (ED), Premature Ejaculation, Infertility, Loss of Libido and various other issues. We are also expert in curing women suffering from infertility and lack of libido along with several other sexual problems. <br />
                            If you are going through a tough time in your marriage for an unsatisfactory sex life, stop worrying and visit us. We ensure 100% natural ayurvedic cure of any of your sexual disorders.</p>
                        <div className="flex justify-center">
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <img width="1920" height="1080" className="object-cover object-center h-[20em] rounded" alt="hero" src={aboutImg} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmpireClinics
