import Image from 'next/image'
import Header from './(components)/[header]/header'
import Footer from './(components)/[footer]/footer'
import styles from './page.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Home() {
	return (
		<>
			<Header></Header>
			<main>
				<div className={styles.about}>
					<h1 className='text-red-500'>Выберите свой</h1>
					<h2>Пункт назначения</h2>
					<div className={styles.cards}>
						<div className={styles.card_1}>
							<h1>Малайзия</h1>
						</div>
						<div className={styles.card_2}>
							<h1>Дубаи</h1>
						</div>
						<div className={styles.card_3}>
							<h1>Сингапур</h1>
						</div>
					</div>
				</div>
				<div className={styles.activity}>
					<h1>Путешествие по</h1>
					<h2>Активность</h2>
					<p>
					
					</p>
					<div className={styles.cards}>
						<div className={styles.card}>
							<Image src={'/img/p1.png'} width={100} height={100} alt='' />
							<h1>Приключения</h1>
							<p>
							
							</p>
						</div>
						<div className={styles.card}>
							<Image src={'/img/p2.png'} width={100} height={100} alt='' />
							<h1>Кемпинг</h1>
							<p>
							
							</p>
						</div>
						<div className={styles.card}>
							<Image src={'/img/p3.png'} width={100} height={100} alt='' />
							<h1>Треккинг</h1>
							<p>
								
							</p>
						</div>
						<div className={styles.card}>
							<Image src={'/img/p4.png'} width={100} height={100} alt='' />
							<h1>Бездорожье</h1>
							<p>
								
							</p>
						</div>
						<div className={styles.card}>
							<Image src={'/img/p5.png'} width={100} height={100} alt='' />
							<h1>Походный Костер</h1>
							<p>
								
							</p>
						</div>
						<div className={styles.card}>
							<Image src={'/img/p6.png'} width={100} height={100} alt='' />
							<h1>Истекающий</h1>
							<p>
								
							</p>
						</div>
					</div>
				</div>
				<div className={styles.best}>
					<h1>Лучший Путешественник</h1>
					<h2>Общие фотографии</h2>
					<p>
					
					</p>
					<div className={styles.cards}>
						<Image src={'/img/img4.png'} width={300} height={300} alt='' />
						<Image src={'/img/img5.png'} width={300} height={300} alt='' />
						<Image src={'/img/img6.png'} width={300} height={300} alt='' />
						<Image src={'/img/img7.png'} width={300} height={300} alt='' />
						<Image src={'/img/img8.png'} width={300} height={300} alt='' />
						<Image src={'/img/img9.png'} width={300} height={300} alt='' />
					</div>
				</div>
				<div className={styles.review}>
					<h1>О нас</h1>

					<div className={styles.rew} id='#about'>
						<p>
							Мы — команда единомышленников, влюблённых в путешествия и свою
							работу. Наша туристическая компания создавалась с одной простой
							идеей: дарить людям яркие впечатления, заботу и настоящий отдых
							без лишних хлопот. За годы работы мы помогли тысячам клиентов
							открыть для себя мир — от пляжей Бали до заснеженных Альп.
						</p>
					</div>
				</div>
				<div className={styles.end}>
					<Image src={'/img/people.png'} width={270} height={275} alt='' />
					<div>
						<h1>Получите наш Ежемесячный Новостная рассылка</h1>
						<p>
							Введите свою почту и получайте свежие новости от нас
						</p>
						<form action=''>
							<input type='text' placeholder='Введите ваш email' />
							<button>
								<ArrowForwardIcon />
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	)
}
