import styles from './Testimonial.module.scss'

import testimonialImg3 from './../../assets/img/testimonial-img3.png'
import man from './../../assets/img/icons/man.png'
import man2 from './../../assets/img/icons/man2.png'
import man3 from './../../assets/img/icons/man3.png'
import man4 from './../../assets/img/icons/man4.png'
import man5 from './../../assets/img/icons/man5.png'
import man6 from './../../assets/img/icons/man6.png'

import React from 'react'
import { TestimonialReview } from './TestimonialReview/TestimonialReview'

export const Testimonial = () => {
	return (
		<section className={styles.testimonial}>
			<div className={styles.ellips1}>
				<div className={styles.ellips2}>
					<div className={styles.ellips3}>
						<div className={styles.ellips4}>
							<div className={styles.ellips5}>
								<div className={styles.testimonial__content}>
									<div className={styles.testimonial__intro}>
										<div className={styles.intro__name}>TESTIMONIAL</div>
										<h4 className={styles.intro__title}>What Our Clients Are Saying</h4>
									</div>
									<div className={styles.testimonial__imgs}>
										<img src={testimonialImg3} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.testimonial__item}>
					<TestimonialReview
						icon={man}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
				<div className={styles.testimonial__item2}>
					<TestimonialReview
						icon={man2}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
				<div className={styles.testimonial__item3}>
					<TestimonialReview
						icon={man3}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
				<div className={styles.testimonial__item4}>
					<TestimonialReview
						icon={man4}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
				<div className={styles.testimonial__item5}>
					<TestimonialReview
						icon={man5}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
				<div className={styles.testimonial__item6}>
					<TestimonialReview
						icon={man6}
						text={'The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.'}
						autor={'Robert Fox'}
						autorPosition={'CEO Anono'}
					/>
				</div>
			</div>
		</section>
	)
}
