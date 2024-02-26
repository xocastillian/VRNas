import styles from './Intro.module.scss'

import React from 'react'

export const Intro = ({ name, title, text, _textAlign }) => {
	return (
		<div className={styles.intro} style={{ textAlign: _textAlign }}>
			<div className={styles.intro__name}>{name}</div>
			<h4 className={styles.intro__title}>{title}</h4>
			{text && <p className={styles.intro__text}>{text}</p>}
		</div>
	)
}
