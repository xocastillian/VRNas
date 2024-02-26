import styles from './HeroSection.module.scss'

import vrMain from './../../assets/img/vr-main.png'

// visual-bg
import gridVisual from './../../assets/img/grid-visual.png'
import lightGrad from './../../assets/img/Light.png'
// visual-bg

import React from 'react'
import { Preview } from '../Preview/Preview'

export const HeroSection = () => {
	return (
		<>
			<div className='container'>
				<section className={styles.heroSection}>
					<Preview />
					<div className={styles.vrMainImg}>
						<img src={vrMain} alt='' />
					</div>
				</section>
			</div>
			<img src={gridVisual} className={styles.gridVisual} />
			<img src={lightGrad} className={styles.lightGrad} />
		</>
	)
}
