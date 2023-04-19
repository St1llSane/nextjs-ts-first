import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
