"use client"
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import Link from 'next/link'
import styles from './header.module.scss'
export default function Header(){
  return (
		<header className={styles.header}>
			<nav>
				<h1 className='text-red-700 text-4xl'>Listee Travel</h1>
				<ul>
					<li>
						{' '}
						<Link href='/'>Главное</Link>
					</li>
					<li>
						<Link href='#about'>О нас</Link>
					</li>
					<li>
						<Link href='/dubai/tour/'>Туры</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.text}>
				<h1 className='text-5xl'>Исследователь и путешественник</h1>
				<h2>А теперь Пойдем</h2>
				<p className=''>
			
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