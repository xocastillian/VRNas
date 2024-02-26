import styles from './OverviewItem.module.scss'

import React from 'react'

export const OverviewItem = ({ img, title, text }) => {
	return (
		<div className={styles.OverviewItem__item}>
			<div className={styles.item__img}>
				<img src={img} alt='' />
			</div>
			<div className={styles.item__content}>
				<h2 className={styles.content__title}>{title}</h2>
				<p className={styles.content__text}>{text}</p>
			</div>
		</div>
	)
}
