import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper';
import './styles.css';

export default function Slider({settings, children}) {
    return (
    <Swiper modules={[Navigation, Pagination, A11y]}
        {...settings}>{children}
    </Swiper>
    )
}