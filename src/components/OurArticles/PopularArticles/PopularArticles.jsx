import styles from './PopularArticles.module.scss'

import React from 'react'
import { Swipe } from '../../Swipe/Swipe'

export const PopularArticles = () => {
	return (
		<div className={styles.content__popular}>
			<h5 className={styles.popular__title}>Popular Article</h5>
			<div className={styles.popular__items}>
				<Swipe />
			</div>
		</div>
	)
}
