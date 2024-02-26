import styles from './RecentArticleItem.module.scss'

import arrowLink from './../../../../assets/img/icons/arrow-link-lil.svg'

import React from 'react'

export const RecentArticleItem = ({ name, text, link, img }) => {
	return (
		<div className={styles.article}>
			<div className={styles.article__img}>
				<img src={img} alt='' />
			</div>
			<div className={styles.article__descr}>
				<div className={styles.descr__name}>{name}</div>
				<p className={styles.descr__text}>{text}</p>
			</div>
			<div className={styles.descr__link}>
				<a className={styles.link__item} href={link}>
					<img src={arrowLink} alt='' />
				</a>
			</div>
		</div>
	)
}
