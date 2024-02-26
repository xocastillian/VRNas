import styles from './CardBuy.module.scss'

import React from 'react'
import { Link } from '../UI/Links/Link'

export const CardBuy = () => {
	return (
		<div className={styles.ourPricing__card}>
			<div className={styles.card__price}>
				<p className={styles.price__text}>Start from</p>
				<p className={styles.price__price}>$99</p>
			</div>
			<Link title={'GET STARTED'} src={'#'} />
			<p className={styles.card__garantee}>30 Days Moneyback Guarantee</p>
		</div>
	)
}
