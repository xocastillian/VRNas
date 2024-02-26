import styles from './WhyChooseUs.module.scss'

import whyUsImg from './../../assets/img/why-us-img.png'

import lightGrad from './../../assets/img/Light.png'

import React from 'react'
import { Reason } from './Reason/Reason'

export const WhyChooseUs = () => {
	return (
		<>
			<div className='container'>
				<section className={styles.whyChooseUs}>
					<div className={styles.whyChooseUs__reasons}>
						<div className={styles.reasons__intro}>
							<div className={styles.intro__name}>WHY CHOOSE US</div>
							<h4 className={styles.intro__title}>Why Choose Us for Your VR Needs</h4>
						</div>
						<div className={styles.reasons__reasonsList}>
							<Reason
								title={'Passionate and Experienced Team'}
								text={
									'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'
								}
							/>
							<Reason title={'Customized Solutions'} text={'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work.'} />
							<Reason
								title={'Exceptional Customer Service'}
								text={'Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'}
							/>
						</div>
					</div>
					<div className={styles.whyChooseUs__imgs}>
						<div className={styles.imgs__bg}></div>
						<img src={whyUsImg} alt='' />
					</div>
				</section>
			</div>
			<img src={lightGrad} className={styles.lightGrad} />
		</>
	)
}
