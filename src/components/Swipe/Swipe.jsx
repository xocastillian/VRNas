import 'swiper/swiper-bundle.css'
import './swiperStyles.scss'

import articleImg from './../../assets/img/article-img.jpg'
import articleImg2 from './../../assets/img/article-img2.svg'
import articleImg3 from './../../assets/img/article-img3.svg'
import articleImg4 from './../../assets/img/article-img4.svg'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Pagination } from 'swiper/modules'
import { SwipeItem } from './SwipeItem/SwipeItem'

export const Swipe = () => {
	return (
		<Swiper modules={[Scrollbar, Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
			<SwiperSlide>
				<SwipeItem name={'VR Games'} title={'Entertainment Goes Virtual: The Rise of VR Gaming'} link={'#'} bg={articleImg} />
			</SwiperSlide>
			<SwiperSlide>
				<SwipeItem name={'VR Education'} title={'The Future of Education: How VR is Revolutionizing the Classroom'} link={'#'} bg={articleImg2} />
			</SwiperSlide>
			<SwiperSlide>
				<SwipeItem name={'VR Architecture'} title={'Bringing Designs to Life: How VR is Changing Architecture'} link={'#'} bg={articleImg3} />
			</SwiperSlide>
			<SwiperSlide>
				<SwipeItem name={'VR Entertainment '} title={'Making Events Memorable: The Power of VR for Corporate and Special Occasions'} link={'#'} bg={articleImg4} />
			</SwiperSlide>
		</Swiper>
	)
}
