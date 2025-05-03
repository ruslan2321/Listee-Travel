import React from 'react'
import styles from './footer.module.scss'
export default function footer() {
  return (
		<footer className={styles.footer}>
			<h1>Listee Travel</h1>
			<div className={styles.about}>
				<h1>About</h1>
				<ul>
					<li>
						<a href=''>Главная</a>
					</li>
					<li>
						<a href=''>Features</a>
					</li>
					<li>
						<a href=''>News & Blogs</a>
					</li>
					<li>
						<a href=''>Help & Supports</a>
					</li>
				</ul>
			</div>

		</footer>
	)
}
