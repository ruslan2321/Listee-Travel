"use client"
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import { useRouter } from 'next/navigation'
import styles from './header.module.scss'
export default function Header(){
	  const router = useRouter()
  return (
		<header className={styles.header}>
			<nav>
				<h1 className='text-red-700 text-4xl'>Listee Travel</h1>
				<ul>
					<li>
						{' '}
						<a href='/'>Главное</a>
					</li>
					<li>
						<a href=''>О нас</a>
					</li>
					<li>
						<a href='/[page]/tour/'>Туры</a>
					</li>
					<li>
						<a href='/[page]/tours/'>Мои туры</a>
					</li>
				</ul>
			</nav>
			<div className={styles.text}>
				<h1 className='text-5xl'>Исследователь и путешественник</h1>
				<h2>А теперь Пойдем</h2>
				<p className=''>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s,
				</p>
			</div>
			<div className={styles.block}>
				<LocationOnIcon />
				<div className={styles.location}>
					<p>Локация</p>
					<p className='font-bold'>Казань</p>
				</div>
				<DateRangeIcon />
				<div className={styles.location}>
					<p>Дата</p>
					<p className='font-bold'>31 Мая 2025 </p>
				</div>
			</div>
		</header>
	)
}