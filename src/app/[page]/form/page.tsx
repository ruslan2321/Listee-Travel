'use client'
import React from 'react'
import styles from './form.module.scss'
import Alert from '@mui/material/Alert'
import { useRouter } from 'next/navigation'
export default function regist() {
	const router = useRouter();
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<p className='text-[#f7941e]'>Бронирование тура</p>
				</div>
				<a href='/'>назад</a>
				<form action='/page/tours' className={styles.form}>
					<input type='text' placeholder='Имя' />
					<input type='text' placeholder='Фамилия' />
					<input type='email' placeholder='Почта' />
					<input type='date' placeholder='Дата заезда' />
					<input type='text' placeholder='Кол-во Взрослых' />
					<input type='text' placeholder='Кол-во детей' />
					<button onClick={()=>router.push('/tours')}>
						Забронировать
					</button>
				</form>
			</div>
		</>
	)
}
