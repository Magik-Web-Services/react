import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slide = () => {
    const [sliderImg, setSliderImg] = useState(1);
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        let imgName = ['pregnancy-solutions', '2019/04/erectile-dysfunction.jpg', '2021/09/married-couple.jpg', '2021/09/premature-ejaculation.jpg', 'marriage-problems.jpg']
        sliderImgfunc(imgName)
    }, [])

    const sliderImgfunc = (imgName) => {
        let sliderapi = [];
        for (let i = 0; i < imgName.length; i++) {
            const sliderurl = `${process.env.REACT_APP_URL}media?search=${imgName[i]}`;
            axios.get(sliderurl).then(res => {
                // console.log(res.data[0]);
                sliderapi.push(res.data[0]);
                if (i === 4) {
                    setLoading('true')
                }
            }).catch(err => {
                console.log('err', err.message);
            })
        }
        setSliderImg(sliderapi);
    }
    return (
        <>
            <Swiper
                loop={true}
                cssMode={true}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay ,Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {loading === 'true' ? sliderImg.map(img => {
                    return (
                        <SwiperSlide key={img.id}><img src={img['source_url']} alt="slider" /></SwiperSlide>
                    )
                }) : <SwiperSlide><img src='https://dummyimage.com/400X300' alt="slider" /></SwiperSlide> }
            </Swiper>
        </>
    )
}

export default Slide
