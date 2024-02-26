import styles from './OurArticles.module.scss'

import lightArt from './../../assets/img/lightArt.png'
import gridVisual from './../../assets/img/grid-visual.png'

import React from 'react'
import { Intro } from '../../components/Intro/Intro'
import { Link } from '../UI/Links/Link'
import { PopularArticles } from './PopularArticles/PopularArticles'
import { RecentArticles } from './RecentArticles/RecentArticles'

export const OurArticles = () => {
	return (
		<section className={styles.ourArticles}>
			<div className='container'>
				<div className={styles.ourArticles__header}>
					<Intro name={'OUR ARTICLES'} title={'Stay Up-to-Date with Our VR Insights'} />
					<Link title={'see all'} src={'#'} dark />
				</div>
				<div className={styles.ourArticles__content}>
					<PopularArticles />
					<RecentArticles />
				</div>
			</div>
			<img className={styles.lightArt} src={lightArt} alt='' />
			<img className={styles.gridVisual} src={gridVisual} alt='' />
		</section>
	)
}
