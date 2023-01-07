import * as React from "react"
import { Link } from "gatsby"

import logo from '../images/title.png'

const Header = () => {
  const [headerStyle, setHeaderStyle] = React.useState("header");

  React.useEffect(() => {
      document.addEventListener('scroll', scrollListen)
  })

  function scrollListen (w) {
    if (window.scrollY === 0) {
      setHeaderStyle("header");
    } else {
      setHeaderStyle("header-dark");
    }
  }

  return (
  <header
    className={headerStyle}
    style={{
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      position: `fixed`,
      width: `100%`,
      zIndex: `100`
    }}
  >
    <div
      className="left-menus">
      <div className="logo">
        <Link
          className="logo-menu"
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            margin: `0rem 4rem 0rem 4rem`,
            // padding: `var(--space-4) var(--size-gutter)`,
            textDecoration: `none`,
          }}
        >
          <img
            alt="Lostwak"
            height={50}
            style={{ margin: 0 }}
            src={logo}
          />
        </Link>
      </div>

      <Link
        to="/update"
        className="menu">
        업데이트
      </Link>

      <Link
        to="/record"
        className="menu">
        기록관
      </Link>

      <Link
        to="/credit"
        className="menu">
        개발진
      </Link>
    </div>

    <Link
      className="btn-download"
      to="https://github.com/lostwak/lostwak.github.io/releases/download/v1.1.2/Lostwak-v1.1.3.zip"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        background: `rgb(185,80,117)`,
        background: `linear-gradient(114deg, rgba(185,80,117,1) 0%, rgba(184,68,108,1) 48%, rgba(194,107,138,1) 100%)`,
        width: `220px`,
        height: `85px`,
        textAlign: `center`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`
      }}
    >
      <span style={{
        fontSize: `1.5rem`,
        color: `white`,
        fontWeight: `bold`
      }}>다운로드</span>
    </Link>
  </header>)
}

export default Header
