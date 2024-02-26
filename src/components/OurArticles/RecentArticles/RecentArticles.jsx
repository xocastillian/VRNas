import styles from './RecentArticles.module.scss'

import articleImg2 from './../../../assets/img/article-img2.svg'
import articleImg3 from './../../../assets/img/article-img3.svg'
import articleImg4 from './../../../assets/img/article-img4.svg'
import articleImg5 from './../../../assets/img/article-img5.svg'

import React from 'react'
import { RecentArticleItem } from './RecentArticleItem/RecentArticleItem'

export const RecentArticles = () => {
	return (
		<div className={styles.recentArticles}>
			<h5 className={styles.recentArticles__title}>Recent Article</h5>
			<div className={styles.recentArticles__items}>
				<RecentArticleItem name={'VR Education'} text={'The Future of Education: How VR is Revolutionizing the Classroom'} link={'#'} img={articleImg2} />
				<RecentArticleItem name={'VR Architecture'} text={'Bringing Designs to Life: How VR is Changing Architecture'} link={'#'} img={articleImg3} />
				<RecentArticleItem name={'VR Entertainment '} text={'Making Events Memorable: The Power of VR for Corporate and Special Occasions'} link={'#'} img={articleImg4} />
				<RecentArticleItem name={'VR Event'} text={'Exploring New Worlds: The Benefits of VR Travel'} link={'#'} img={articleImg5} />
				<RecentArticleItem name={'VR Education'} text={'The Future of Education: How VR is Revolutionizing the Classroom'} link={'#'} img={articleImg2} />
				<RecentArticleItem name={'VR Architecture'} text={'Bringing Designs to Life: How VR is Changing Architecture'} link={'#'} img={articleImg3} />
				<RecentArticleItem name={'VR Entertainment '} text={'Making Events Memorable: The Power of VR for Corporate and Special Occasions'} link={'#'} img={articleImg4} />
				<RecentArticleItem name={'VR Event'} text={'Exploring New Worlds: The Benefits of VR Travel'} link={'#'} img={articleImg5} />
				<RecentArticleItem name={'VR Education'} text={'The Future of Education: How VR is Revolutionizing the Classroom'} link={'#'} img={articleImg2} />
				<RecentArticleItem name={'VR Architecture'} text={'Bringing Designs to Life: How VR is Changing Architecture'} link={'#'} img={articleImg3} />
				<RecentArticleItem name={'VR Entertainment '} text={'Making Events Memorable: The Power of VR for Corporate and Special Occasions'} link={'#'} img={articleImg4} />
				<RecentArticleItem name={'VR Event'} text={'Exploring New Worlds: The Benefits of VR Travel'} link={'#'} img={articleImg5} />
				<RecentArticleItem name={'VR Education'} text={'The Future of Education: How VR is Revolutionizing the Classroom'} link={'#'} img={articleImg2} />
				<RecentArticleItem name={'VR Architecture'} text={'Bringing Designs to Life: How VR is Changing Architecture'} link={'#'} img={articleImg3} />
				<RecentArticleItem name={'VR Entertainment '} text={'Making Events Memorable: The Power of VR for Corporate and Special Occasions'} link={'#'} img={articleImg4} />
				<RecentArticleItem name={'VR Event'} text={'Exploring New Worlds: The Benefits of VR Travel'} link={'#'} img={articleImg5} />
			</div>
		</div>
	)
}
