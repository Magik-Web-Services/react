import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slide = () => {
    const [sliderImg, setSliderImg] = useState([]);
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        let imgName = ['pregnancy-solutions', '2019/04/erectile-dysfunction.jpg', '2021/09/married-couple.jpg', '2021/09/premature-ejaculation.jpg', 'marriage-problems.jpg']
        let sliderapi = [];
        // axios fetch slider Images
        for (let i = 0; i <= imgName.length; i++) {
            const sliderurl = `${process.env.REACT_APP_URL}media?search=${imgName[i]}`;
            sliderImgfunc

            // axios.get(sliderurl).then(res => {
            //     sliderapi.push(res.data[0]);
            //     console.log('false');
            // }).catch(err => {
            //     console.log('err', err.message);
            // })
        }

        setSliderImg(sliderapi)
        setLoading('true')
        console.log('true');
    }, [])


    const sliderImgfunc = () =>{
        
    }
    
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {loading === 'false' ? sliderImg.map(img => {
                    return (
                        <h2>dgsg</h2>
                        /* <SwiperSlide key={img.id}>Slide 6</SwiperSlide> */
                    )
                }) : ''
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default Slide
