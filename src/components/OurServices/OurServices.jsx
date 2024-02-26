import styles from './OurServices.module.scss'

import software from './../../assets/img/icons/software.svg'
import videoConsole from './../../assets/img/icons/video-console.svg'
import design from './../../assets/img/icons/design.svg'
import party from './../../assets/img/icons/party.svg'
import review from './../../assets/img/icons/review.svg'
import theatre from './../../assets/img/icons/theatre.svg'

import React from 'react'
import { ServiceItem } from './ServiceItem/ServiceItem'

export const OurServices = () => {
	return (
		<div className='container'>
			<section className={styles.ourService}>
				<div className={styles.ourService__descr}>
					<div className={styles.descr__intro}>
						<p className={styles.intro__name}>OUR SERVICE</p>
						<h3 className={styles.intro__title}>Our Service</h3>
					</div>
					<p className={styles.descr__text}>
						We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and
						our team is always available to answer any questions and address any concerns you may have.
					</p>
				</div>
				<div className={styles.services}>
					<div className={styles.services__left}>
						<ServiceItem img={software} title={'VR Development'} text={'From concept to creation, our team of VR developers will bring your vision to life.'} link={'#'} />
						<ServiceItem img={videoConsole} title={'VR Games'} text={'We offer a wide selection of VR games that are suitable for players of all ages and skill levels.'} link={'#'} />
					</div>
					<div className={styles.services__mid}>
						<ServiceItem img={design} title={'VR Design'} text={'Our talented VR designers will create immersive and engaging environments that will captivate your audience.'} link={'#'} />
						<ServiceItem img={party} title={'VR Events'} text={'Make your next event unforgettable with our VR event services.'} link={'#'} />
					</div>
					<div className={styles.services__right}>
						<ServiceItem
							img={review}
							title={'VR Consulting'}
							text={'Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.'}
							link={'#'}
						/>
						<ServiceItem
							img={theatre}
							title={'VR Entertainment'}
							text={'Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.'}
							link={'#'}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
