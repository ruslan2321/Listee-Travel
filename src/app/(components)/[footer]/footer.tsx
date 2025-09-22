import React from 'react'
import styles from './footer.module.scss'
export default function footer() {
  return (
		<footer className={styles.footer}>
			<h1>Listee Travel</h1>
			<div className={styles.about}>
				<h1>О нас</h1>
				<ul>
					<li>
						<a href=''>Главная</a>
					</li>
					<li>
						<a href=''>Возможности</a>
					</li>
					<li>
						<a href=''>Новости и блоги</a>
					</li>
					<li>
						<a href=''>Помощь и поддержка</a>
					</li>
					<li ><a >Разработочики:Руслан.Р и Андрей.Х</a></li>
				</ul>
			</div>
			

		</footer>
	)
}
