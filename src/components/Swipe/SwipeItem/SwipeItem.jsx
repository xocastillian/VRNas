import styles from './SwipeItem.module.scss'

import arrowLink from './../../../assets/img/icons/arrow-link.svg'

import React from 'react'

export const SwipeItem = ({ name, title, link, bg }) => {
	return (
		<div className={styles.swipeItem}>
			<img className={styles.swipeItem__img} src={bg} alt='' />
			<div className={styles.swipeItem__content}>
				<div className={styles.content__descr}>
					<div className={styles.descr__name}>
						<p className={styles.name__item}>{name}</p>
					</div>
					<h5 className={styles.descr__title}>{title}</h5>
				</div>
				<div className={styles.content__link}>
					<a className={styles.link__item} href={link}>
						<img src={arrowLink} alt='' />
					</a>
				</div>
			</div>
		</div>
	)
}
