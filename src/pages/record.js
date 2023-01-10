import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"

import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"


export const pageQuery = graphql`
  query Records($raidIdx: Int! = 0) {
    allRecordsJson(
      sort: {clearedAt: {_date: {_numberLong: ASC}}}
      filter: {raid: {eq: $raidIdx}}
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
`

const RecordPage = ({data, pageContext }) => {
  const raids = ["귀상어두", "계륵", "마녀두", "마녀두(하드)"];
  
  const [isSortClearedTime, setSortClearedTime] = React.useState(false);

  React.useEffect(() => {
    // 소요시간으로 재정렬
    if (isSortClearedTime)
      data.allRecordsJson.edges.sort((a, b) => a.node.clearedAt._date._numberLong - b.node.clearedAt._date._numberLong);
    // 최초 클리어 시간으로 재정렬  
    else
      data.allRecordsJson.edges.sort((a, b) => a.node.clearTime - b.node.clearTime);
  }, [isSortClearedTime]);

  return (
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
          style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(90%)` }}
        >
        </StaticImage>
      </div>
    </div>
    
    <div className="white-container">
      <div className="container sub-container text-center">
        <h2 className="record-h2">기록관</h2>
          <div className="record-menus">
            {
              raids.map((raid, idx) => {
                return (
                  <Link key={idx} className={`bt-raid ${pageContext.raidIdx === idx && 'selected'}`} to={"/record/" + idx}>{raid}</Link>
                )
              })
            }
            <button className="btn-sorted" onClick={() => {setSortClearedTime(bf => !bf)}}>
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{width:"24px"}}>
                <path strokeLinecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"></path>
              </svg>
              <span>{ isSortClearedTime ? " 최초토벌순 " : " 소요시간순 " }</span>
            </button>
          </div>
          <br/>
          <br/>
          <ul className="list-group raid-list-group">
            {
              data.allRecordsJson.edges.map((e, idx) => {
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
          <p className="updated-txt">업데이트 날짜 : 2023-01-10 00:00</p>
      </div>
    </div>




  </Layout>
  )
}

export const Head = () => <Seo title="기록관" />

export default RecordPage
