import { HappyClients } from '../HappyClients/HappyClients'
import { Link } from '../UI/Links/Link'
import styles from './Preview.module.scss'

import React from 'react'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className={styles.preview__descr}>
				<h1 className={styles.descr__title}>Immerse Yourself in Virtual Reality</h1>
				<p className={styles.descr__text}>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
				<Link title={'discover more'} src={'#'} />
			</div>
			<HappyClients />
		</div>
	)
}
