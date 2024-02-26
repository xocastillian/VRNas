import styles from './Nav.module.scss'
import logo from './../../assets/img/icons/logo.svg'
import React from 'react'

export const Nav = () => {
	return (
		<div className='container'>
			<nav className={styles.nav}>
				<a href='#' className={styles.nav__logo}>
					<img src={logo} />
				</a>
				<div className={styles.nav__navigation}>
					<ul className={styles.navigation__links}>
						<a href='#' className={styles.links__item}>
							<li>Home</li>
						</a>
						<a href='#' className={styles.links__item}>
							<li>About us</li>
						</a>
						<a href='#' className={styles.links__item}>
							<li>Service</li>
						</a>
						<a href='#' className={styles.links__item}>
							<li>Page</li>
						</a>
						<a href='#' className={styles.links__item}>
							<li>Blog</li>
						</a>
					</ul>
					<a href='#' className={styles.navigation__contacts}>
						Contact us
					</a>
				</div>
			</nav>
		</div>
	)
}
