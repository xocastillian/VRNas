import styles from './HappyClients.module.scss'

import happyClients from './../../assets/img/icons/happy-clients.svg'

import React from 'react'

export const HappyClients = () => {
	return (
		<div className={styles.happyClients}>
			<img src={happyClients} alt='' />
			<p className={styles.happyClients__text}>
				<b>32k+</b> Happy Client
			</p>
		</div>
	)
}
