import styles from './OurPricing.module.scss'

import cloud from './../../assets/img/icons/cloud.svg'
import pricingImg from './../../assets/img/pricing-img.png'
import lightGrad from './../../assets/img/Light.png'

import React from 'react'
import { ServiceOption } from './ServiceOption/ServiceOption'
import { CardBuy } from '../CardBuy/CardBuy'

export const OurPricing = () => {
	return (
		<>
			<div className='container'>
				<section className={styles.ourPricing}>
					<div className={styles.ourPricing__intro}>
						<div className={styles.intro__name}>our pricing</div>
						<h4 className={styles.intro__title}>Affordable VR Services for Everyone</h4>
						<p className={styles.intro__text}>
							At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.
						</p>
					</div>
					<div className={styles.ourPricing__serviceOption}>
						<div className={styles.serviceOption__services}>
							<ServiceOption
								img={cloud}
								title={'Customizable Packages'}
								text={
									'We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.'
								}
							/>
							<ServiceOption
								img={cloud}
								title={'Flexible Payment Options'}
								text={
									'We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.'
								}
							/>
							<ServiceOption
								img={cloud}
								title={'Satisfaction Guarantee'}
								text={
									'We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.'
								}
							/>
						</div>
						<div className={styles.ourPricing__imgs}>
							<img src={pricingImg} alt='' />
						</div>
					</div>
					<div className={styles.card__position}>
						<CardBuy />
					</div>
				</section>
			</div>
			<img src={lightGrad} alt='' className={styles.ourPricing__blurBg} />
		</>
	)
}
