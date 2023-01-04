import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const NotFoundPage = () => (
  <Layout>
    
    <div className={styles.textCenter}>
      <div
        className="game-bg-wrapper sub-wrapper">
        <StaticImage
          src="../images/thumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(110%)` }}
        >
        </StaticImage>
      </div>
    </div>
    <div className="container sub-container">
      <h1>404: Not Found</h1>
      <p>잘못된 페이지 주소입니다.</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
