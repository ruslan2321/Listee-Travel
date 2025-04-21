"use client"

import React from 'react'
import Header from '@/app/(components)/[header]/header'
import Image from 'next/image'
import Footer from '@/app/(components)/[footer]/footer'
import styles from './tour.module.scss'
import { useRouter } from 'next/navigation'

export default function page() {
			const router = useRouter()
  return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.cards}>
					<div className={styles.card_1}>
						<h1>Дубаи</h1>
						<p>Город будущего с небоскрёбами на берегу Персидского залива</p>
						<div className={styles.price}>
							<span>от 20 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_2}>
						<h1>Абу Даби</h1>
						<p>Живописный оазис посреди раскаленной пустыни</p>
						<div className={styles.price}>
							<span>от 23 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>

					<div className={styles.card_3}>
						<h1>Рас-аль-Хайма</h1>
						<p>
							Пляжный отдых, прогулки по пустыне, полеты на воздушном шаре и
							ночная охота на крабов
						</p>
						<div className={styles.price}>
							<span>от 26 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_4}>
						<h1>Белек</h1>
						<p>Богатство культур и видов отдыха</p>
						<div className={styles.price}>
							<span>от 22 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_5}>
						<h1>Бодрум</h1>
						<p>Уединенные бухты, пляжные вечеринки и яхтинг</p>
						<div className={styles.price}>
							<span>от 21 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_6}>
						<h1>Кемер</h1>
						<p>Комфортный отдых и оздоровительные процедуры</p>
						<div className={styles.price}>
							<span>от 23 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_7}>
						<h1>Санкт-Петербург</h1>
						<p>Романтика северной столицы и отдых для души</p>
						<div className={styles.price}>
							<span>от 25 486 ₽</span>
							<span>17-24 апреля 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_8}>
						<h1>Имеретинский курорт</h1>
						<p>Отдых олимпийского масштаба</p>
						<div className={styles.price}>
							<span>от 34 486 ₽</span>
							<span>19-24 января 7 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
					<div className={styles.card_9}>
						<h1>Байкал</h1>
						<p>Глубокое погружение в спокойствие</p>
						<div className={styles.price}>
							<span>от 19 486 ₽</span>
							<span>18-24 апреля 5 ночей </span>
							<button onClick={() => router.push('./form')}>+</button>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
