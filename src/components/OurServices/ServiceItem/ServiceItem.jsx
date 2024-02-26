import styles from './ServiceItem.module.scss'

import React from 'react'

export const ServiceItem = ({ img, title, text, link }) => {
	return (
		<a href={link} target='_blank' className={styles.service}>
			<div className={styles.service__container}>
				<div className={styles.service__content}>
					<div className={styles.service__img}>
						<img src={img} />
					</div>
					<div className={styles.service__descr}>
						<h4 className={styles.service__title}>{title}</h4>
						<p className={styles.service__text}>{text}</p>
					</div>
				</div>
				<div className={styles.service__link}>
					<p className={styles.link__item}>
						LEARN MORE
					</p>
				</div>
			</div>
		</a>
	)
}
