import React, { useState, useRef } from 'react'
import styles from './VideoContent.module.scss'

export const VideoContent = ({ preview, name, title, video }) => {
	const [showDescription, setShowDescription] = useState(true)
	const videoRef = useRef(null)

	const handlePlay = () => {
		setShowDescription(false)
	}

	const handlePause = () => {
		setShowDescription(true)
	}

	const handleEnded = () => {
		setShowDescription(true)
	}

	return (
		<div className={styles.getStarted__video}>
			<video poster={preview} preload='metadata' controls className={styles.video__item} src={video} ref={videoRef} onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded}></video>
			{showDescription && (
				<div className={styles.video__descr}>
					<div className={styles.descr__name}>{name}</div>
					<p className={styles.descr__title}>{title}</p>
				</div>
			)}
		</div>
	)
}
