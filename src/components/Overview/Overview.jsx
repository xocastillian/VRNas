import styles from './Overview.module.scss'

import expertiseImg from './../../assets/img/icons/Expertise-icon.svg'
import customizationImg from './../../assets/img/icons/Customization-icon.svg'
import serviceImg from './../../assets/img/icons/Service-icon.svg'

import React from 'react'
import { OverviewItem } from './OverviewItem/OverviewItem'

export const Overview = () => {
	return (
		<div className='container'>
			<div className={styles.overview}>
				<OverviewItem
					img={expertiseImg}
					title='Expertise'
					text='Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service'
				/>
				<OverviewItem
					img={customizationImg}
					title='Customization'
					text='Every client is unique, and we believe every VR experience should be too. We will work with you to create a customized solution that meets your specific needs and goals'
				/>
				<OverviewItem
					img={serviceImg}
					title='Service'
					text='We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you are satisfied with every aspect of your VR experience.'
				/>
			</div>
		</div>
	)
}
