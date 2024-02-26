import styles from './Link.module.scss'
import React from 'react'

export const Link = ({ title, src, dark }) => {
	const linkClass = dark ? styles['link__item-dark'] : styles['link__item']

	return (
		<div className={styles.link}>
			<a className={linkClass} href={src}>
				{title}
			</a>
		</div>
	)
}
