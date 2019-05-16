import React from "react"

import '../styles/layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Nicholas Gustafson
    </footer>
  </div>
)

export default Layout
