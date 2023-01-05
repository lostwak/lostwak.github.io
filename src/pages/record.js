import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RecordPage = () => {
  const [raidNum, setRaidNum] = React.useState(0);

  const data = useStaticQuery(graphql`
  query Records($eq: Int = -1) {
    allRecordsJson(
      sort: {clearedAt: {_date: {_numberLong: ASC}}}
      filter: {raid: {gt: $eq}}
    ) {
      edges {
        node {
          users
          clearTime
          clearedAt {
            _date {
              _numberLong
            }
          }
          raid
        }
      }
    }
  }
  `)


  return (
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
        <h2 className="record-h2">기록관</h2>
          <button className={`bt-raid ${raidNum === 0 && 'selected'}`} onClick={() => {setRaidNum(0)}}>귀상어두</button>
          <button className={`bt-raid ${raidNum === 1 && 'selected'}`} onClick={() => {setRaidNum(1)}}>계륵</button>
          <button className={`bt-raid ${raidNum === 2 && 'selected'}`} onClick={() => {setRaidNum(2)}}>마녀두</button>
          <ul className="list-group raid-list-group">
            {
              data.allRecordsJson.edges.filter(e => e.node.raid == raidNum).map((e, idx) => {
                return (
                  <li className="list-group-item record-list" key={idx}>
                    <p className="record-names">{ e.node.users }</p>
                    <p className="record-time">소요 시간 : { e.node.clearTime }</p>
                    <p>{ (new Date(Number(e.node.clearedAt._date._numberLong))).toLocaleString()   }</p>
                  </li>
                );
              })
            }
          </ul>
          <p className="updated-txt">업데이트 날짜 : 2023-01-06 12:00</p>
      </div>
    </div>




  </Layout>
  )
}

export const Head = () => <Seo title="기록관" />

export default RecordPage
