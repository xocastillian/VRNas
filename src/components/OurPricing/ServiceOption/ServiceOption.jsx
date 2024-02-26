import styles from './ServiceOption.module.scss'

import React from 'react'

export const ServiceOption = ({ img, title, text }) => {
	return (
		<div className={styles.services__option}>
			<div className={styles.option__img}>
				<img src={img} alt='' />
			</div>
			<div className={styles.option__descr}>
				<h5 className={styles.option__title}>{title}</h5>
				<p className={styles.option__text}>{text}</p>
			</div>
		</div>
	)
}
