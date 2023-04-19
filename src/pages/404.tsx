import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'

const NotFoud = () => {
	return (
		<Layout>
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					rowGap: '30px',
					marginTop: '30px',
				}}
			>
				<h2>NotFoud</h2>
				<Image
					src='/images/404.png'
					alt='404'
					width={800}
					height={320}
					priority
				/>
			</section>
		</Layout>
	)
}

export default NotFoud
