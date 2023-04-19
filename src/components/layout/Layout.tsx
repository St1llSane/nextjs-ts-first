import React, { FC, PropsWithChildren } from 'react'
import { Titillium_Web } from 'next/font/google'
import Header from './header/Header'

const titillium = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin'],
})

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={titillium.className}>
			<Header />
			{children}
		</div>
	)
}

export default Layout
