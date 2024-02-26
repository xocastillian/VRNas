import styles from './Footer.module.scss'

import geo from './../../assets/img/icons/geo.svg'
import email from './../../assets/img/icons/email.svg'
import phone from './../../assets/img/icons/phone.svg'
import logo from './../../assets/img/icons/logo.svg'
import twitter from './../../assets/img/icons/twitter.svg'
import inst from './../../assets/img/icons/inst.svg'
import facebook from './../../assets/img/icons/facebook.svg'
import github from './../../assets/img/icons/github.svg'

import wavesFooter from './../../assets/img/waves-footer.png'

import React from 'react'

export const Footer = () => {
	return (
		<>
			{' '}
			<footer className={styles.footer}>
				<div className='container'>
					<div className={styles.footer__content}>
						<div className={styles.footer__socials}>
							<a href='#' className={styles.socials__logo}>
								<img src={logo} alt='' />
							</a>
							<div className={styles.socials__links}>
								<a href='#'>
									<img src={twitter} alt='Twitter' />
								</a>
								<a href='#'>
									<img src={facebook} alt='Facebook' />
								</a>
								<a href='#'>
									<img src={inst} alt='Instagram' />
								</a>
								<a href='#'>
									<img src={github} alt='GitHub' />
								</a>
							</div>
						</div>
						<div className={styles.footer__quicklinks}>
							<h6 className={styles.quicklinks__title}>Quicklinks</h6>
							<a href='#' className={styles.link}>
								Home
							</a>
							<a href='#' className={styles.link}>
								Pricing Plan
							</a>
							<a href='#' className={styles.link}>
								Service
							</a>
							<a href='#' className={styles.link}>
								Blog
							</a>
							<a href='#' className={styles.link}>
								Our Team
							</a>
						</div>
						<div className={styles.footer__support}>
							<h6 className={styles.support__title}>Support</h6>
							<a href='#' className={styles.link}>
								About us
							</a>
							<a href='#' className={styles.link}>
								Contact us
							</a>
							<a href='#' className={styles.link}>
								FAQ
							</a>
							<a href='#' className={styles.link}>
								Tems & Conditions
							</a>
							<a href='#' className={styles.link}>
								Privacy Policy
							</a>
						</div>
						<div className={styles.footer__help}>
							<h6 className={styles.help__title}>Need Help?</h6>
							<a href='#' className={styles.link__extra}>
								<img src={geo} alt='' />
								Tanjung Sari Street no.48, Pontianak City
							</a>
							<a href='mailto:example@example.com' className={styles.link__extra}>
								<img src={email} alt='' />
								Support@VRNas.com
							</a>
							<a href='tel:+1234567890' className={styles.link__extra}>
								<img src={phone} alt='' />
								+123 456 7890
							</a>
						</div>
					</div>
					<div className={styles.footer__copy}>© Copyright 2023, All Rights Reserved</div>
				</div>
			</footer>
			<img className={styles.wavesFooter} src={wavesFooter} alt='' />
		</>
	)
}
