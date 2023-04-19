import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Layout>
			<main className={styles.home}>
				<h1>Home</h1>
			</main>
		</Layout>
	)
}

export default Home
