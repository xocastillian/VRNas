import styles from './Homepage.module.scss'

import wavesHeader from './../../assets/img/waves-header.png'

import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import { Overview } from '../../components/Overview/Overview'
import { AboutUs } from '../../components/AboutUs/AboutUs'
import { OurServices } from '../../components/OurServices/OurServices'
import { WhyChooseUs } from '../../components/WhyChooseUs/WhyChooseUs'
import { HowToGetStarted } from '../../components/HowToGetStarted/HowToGetStarted'
import { Testimonial } from '../../components/Testimonial/Testimonial'
import { OurPricing } from '../../components/OurPricing/OurPricing'
import { OurArticles } from '../../components/OurArticles/OurArticles'
import { MailingForm } from '../../components/MailingForm/MailingForm'
import { Footer } from '../../components/Footer/Footer'

export const Homepage = () => {
	return (
		<>
			<div className={styles.homepage}>
				<Nav />
				<HeroSection />
				<Overview />
				<AboutUs />
				<OurServices />
				<WhyChooseUs />
				<HowToGetStarted />
				<Testimonial />
				<OurPricing />
				<OurArticles />
				<MailingForm />
				<Footer />
			</div>
			<img src={wavesHeader} className={styles.wavesHeader} />
		</>
	)
}
