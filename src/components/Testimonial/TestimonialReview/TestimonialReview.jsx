import styles from './TestimonialReview.module.scss'
import React, { useState, useEffect } from 'react'

export const TestimonialReview = ({ icon, text, autor, autorPosition }) => {
	const [reviewContent, setReviewContent] = useState(false)

	useEffect(() => {
		const handleClickOutside = event => {
			if (reviewContent && !event.target.closest(`.${styles.testimonialReview__content}`)) {
				setReviewContent(false)
			}
		}

		window.addEventListener('click', handleClickOutside)
		return () => {
			window.removeEventListener('click', handleClickOutside)
		}
	}, [reviewContent])

	function handleShowReviewContent() {
		setReviewContent(!reviewContent)
	}

	return (
		<div className={styles.testimonialReview}>
			<div>
				<img
					className={styles.testimonialReview__icon}
					src={icon}
					onClick={e => {
						e.stopPropagation()
						handleShowReviewContent()
					}}
				/>
			</div>
			{reviewContent && (
				<div className={styles.testimonialReview__content}>
					<p className={styles.content__text}>{text}</p>
					<p className={styles.content__autor}>
						{autor} - <span className={styles.autor__position}>{autorPosition}</span>
					</p>
				</div>
			)}
		</div>
	)
}
