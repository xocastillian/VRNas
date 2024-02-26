import styles from './AboutUs.module.scss'

import aboutUsImg from './../../assets/img/about-us-img.png'
import check from './../../assets/img/icons/checksvg.svg'

import lightGrad from './../../assets/img/Light.png'

import React from 'react'
import { Link } from '../UI/Links/Link'

export const AboutUs = () => {
	return (
		<>
			<div className='container'>
				<section className={styles.aboutUs}>
					<div className={styles.aboutUs__imgs}>
						<img src={aboutUsImg} className={styles.aboutUsImg} />
						<div className={styles.aboutUsImgBg}></div>
					</div>
					<div className={styles.aboutUs__descr}>
						<div className={styles.descr__block}>
							<p className={styles.descr__blockName}>ABOUT US</p>
							<h2 className={styles.descr__title}>Bring your events to life like never before with our VR services.</h2>
							<p className={styles.descr__text}>
								VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to
								explore new worlds, learn in new ways, and experience events in a whole new light.
							</p>
						</div>
						<div className={styles.descr__checks}>
							<div className={styles.descr__item}>
								<img src={check} />
								<p className={styles.checks__text}>Cutting-Edge Technology</p>
							</div>
							<div className={styles.descr__item}>
								<img src={check} />
								<p className={styles.checks__text}>Versatile Applications</p>
							</div>
							<div className={styles.descr__item}>
								<img src={check} />
								<p className={styles.checks__text}>Affordable and Accessible</p>
							</div>
						</div>
						<Link title={'READ MORE'} src={'#'} />
					</div>
				</section>
			</div>
			<img src={lightGrad} className={styles.aboutUs__bluBg} />
		</>
	)
}
