import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const updateMessage = [
  {
    version: "v1.0.2",
    message: `업데이트 날짜 : 2023-01-04
    1. 멤버 미표기 수정
    2. 로그인 화면 UI 위치 이동 수정
    3. 완드 아이템 수치 변경
    3. 곡괭이 아이템 수치 변경
    `
  },
  {
    version: "v1.0.1",
    message: `정식 버전입니다.
    방송에서 처음 공개됩니다.
    `
  },

]

const UpdatePage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div
        className="game-bg-wrapper sub-wrapper">
        <StaticImage
          src="../images/update_thumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(110%)` }}
        >
        </StaticImage>
      </div>
    </div>
    
    <div className="white-container sub-container">
      <div className="container">
        <h2 className="credit-h2">업데이트</h2>

        {
          updateMessage.map((log, idx) => {
            return (
              <div className="version-block" key={idx}>
                <h3>{log.version} {idx === 0 && <span className="badge badge-primary">Latest</span>} </h3>
                <p>{log.message}</p>
              </div>
            )}
          )
        }

      </div>
    </div>




  </Layout>
)

export const Head = () => <Seo title="업데이트" />

export default UpdatePage
