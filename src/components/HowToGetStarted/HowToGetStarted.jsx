import { VideoContent } from '../VideoContent/VideoContent'
import styles from './HowToGetStarted.module.scss'

import getStartedVideo from './../../assets/video/get-started-video.mp4'
import videoPreview from './../../assets/img/video-preview.jpg'

import React from 'react'
import { Link } from '../UI/Links/Link'

export const HowToGetStarted = () => {
	return (
		<div className='container'>
			<section className={styles.getStarted}>
				<div className={styles.getStarted__intro}>
					<div className={styles.intro__name}>HOW TO GET STARTED</div>
					<h4 className={styles.intro__title}>Bringing Your Virtual Reality Dreams to Life</h4>
				</div>
				<VideoContent name={'VR Service'} title={'How to get started'} preview={videoPreview} />
				<Link title={'GET STARTED'} src={'#'} />
			</section>
		</div>
	)
}
