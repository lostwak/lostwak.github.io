import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const credit = [
  {
    job: "팀장, 개발",
    members: [{
      name: "고롱스",
      review: "https://cafe.naver.com/steamindiegame/9194915"
    }]
  },
  {
    job: "기획",
    members: [{
      name: "청달이",
      review: "https://cafe.naver.com/steamindiegame/9194879"
    },{
      name: "호라용이",
      review: "https://cafe.naver.com/steamindiegame/9196256"
    }]
  },
  {
    job: "디자이너",
    members: [{
      name: "노독풀",
      review: "https://cafe.naver.com/steamindiegame/9196760"
    },{
      name: "눈딸기",
      review: "https://cafe.naver.com/steamindiegame/9195463"
    },{
      name: "밤바다소다",
      review: ""
    },{
      name: "좋냥이",
      review: "https://cafe.naver.com/steamindiegame/9186970"
    },{
      name: "탐탐",
      review: "https://cafe.naver.com/steamindiegame/9195369"
    }]
  },
  {
    job: "사운드",
    members: [{
      name: "티콘",
      review: ""
    },{
      name: "PIRIMUDUM",
      review: ""
    },{
      name: "파괴광선캐터피",
      review: ""
    }]
  },
]

const CreditPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div
        className="game-bg-wrapper sub-wrapper">
        <StaticImage
          src="../images/credit_thumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(110%)` }}
        >
        </StaticImage>
      </div>
    </div>
    
    <div className="white-container">
      <div className="container sub-container text-center">
        <h2 className="credit-h2">개발진</h2>
        {
          credit.map(cre => {
            return(
              <div key={cre.job}>
                <h4 className="credit-job">[ {cre.job} ]</h4>
                {
                  cre.members.map(mem => <a key={mem.name} className={`credit-name ${mem.review==="" && "none-link"}`} href={mem.review}>{mem.name}</a>)
                }
              </div>
            )
          })
        }
      </div>
    </div>




  </Layout>
)

export const Head = () => <Seo title="개발진" />

export default CreditPage
