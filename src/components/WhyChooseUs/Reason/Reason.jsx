import styles from './Reason.module.scss'

import arrow from './../../../assets/img/icons/arrow.svg'

import React, { useState } from 'react'

export const Reason = ({ title, text }) => {
	const [showReason, setShowReason] = useState(false)

	function handleShowReasonClick() {
		setShowReason(!showReason)
	}

	return (
		<div className={styles.reasonsList__reasonItem}>
			<div className={styles.reasonItem__Btn} onClick={handleShowReasonClick}>
				<h5 className={styles.reasonItem__title}>{title}</h5>
				<img src={arrow} className={`${styles.arrow} ${showReason ? styles.arrowActive : styles.arrow}`} />
			</div>
			{showReason && <p className={styles.reasonItem__text}>{text}</p>}
		</div>
	)
}
