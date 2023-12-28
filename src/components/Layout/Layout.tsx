import React from 'react'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <img
          src="/assets/background-pattern-desktop.svg"
          className="header--desktop"
          alt="Desktop Header"
        />

        <img
          src="/assets/background-pattern-mobile.svg"
          className="header--mobile"
          alt="Mobile Header"
        />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
